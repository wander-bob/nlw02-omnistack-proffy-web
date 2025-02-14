import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { Input } from '../../components/input';
import { PageHeader } from '../../components/page-header';
import { Textarea } from '../../components/textarea';
import { Select } from '../../components/select';

import warningIcon  from '../../assets/images/icons/warning.svg';
import './styles.css';
import { api } from '../../services/api';


export function TeacherForm(){
  const navigate = useNavigate()
  const [name,setName] = useState('');
  const [avatar,setAvatar] = useState('');
  const [whatsapp,setWhatsApp] = useState('');
  const [bio,setBio] = useState('');
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [ scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: ''}
  ]);
  function addNewScheduleItem(){
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: ''}
    ])    
  }
  function handleCreateClass(e: FormEvent){
    e.preventDefault();
    api.post('/classes', {
      name, 
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(()=>{
      alert('Cadastro realizado com sucesso!')
      navigate('/')
    }).catch((error)=>{
      console.log(error)
      alert('Ocorreu um erro ao cadastrar...')
    })
  }
  function setScheduleItemValue(position: number, field: string, value: string){
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index)=> {
      if(index === position){
        return {...scheduleItem, [field]: value}
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }
  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader 
        title='Que incrível que você quer dar aulas.'
        description='O primeiro passo, é preencher esse
        formulário de inscrição.'
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label='Nome completo'
              name='name'
              value={name}
              onChange={(e)=> setName(e.target.value)} 
            />
            <Input
              label='Avatar'
              name='avatar'
              onChange={(e)=> setAvatar(e.target.value)} 
            />
            <Input
              label='WhatsApp'
              name='whatsapp'
              value={whatsapp}
              onChange={(e)=> setWhatsApp(e.target.value)} 
            />
            <Textarea 
              label='Biografia'
              name='bio'
              value={bio}
              onChange={(e)=> setBio(e.target.value)} 
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select 
              name='subject' 
              label='Matéria' 
              value={subject}
              onChange={(e) => {setSubject(e.target.value)}}
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Filosofia', label: 'Filosofia' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'Histórias' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
              ]}
            />
            <Input 
              label='Custo por aula' 
              name='cost'
              value={cost}
              onChange={(e)=> {setCost(e.target.value)}}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type='button' onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) =>{
                return(
                  <div key={scheduleItem.week_day} className="schedule-item">
                    <Select 
                      name='weekday' 
                      label='Dia da semana'
                      value={scheduleItem.week_day}
                      onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                      options={[
                        {value: '0', label: 'Domingo'},
                        {value: '1', label: 'Segunda-feira'},
                        {value: '2', label: 'Terça-feira'},
                        {value: '3', label: 'Quarta-feira'},
                        {value: '4', label: 'Quinta-feira'},
                        {value: '5', label: 'Sexta-feira'},
                        {value: '6', label: 'Sábado'},
                      ]}
                    />
                    <Input 
                      name='from' 
                      label='Das' 
                      type='time'
                      value={scheduleItem.from}
                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                      />
                    <Input 
                      name='to'
                      label='Até'
                      type='time' 
                      value={scheduleItem.to}
                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    />
                  </div>
                );
              })}
            
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt='Aviso importante' />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type='submit'>
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}