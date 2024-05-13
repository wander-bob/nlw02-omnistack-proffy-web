
import { FormEvent, useState } from 'react';
import { Input } from '../../components/input';
import { PageHeader } from '../../components/page-header';
import { Select } from '../../components/select';
import { TeacherItem, Teacher } from '../../components/teacher-item';
import './styles.css';
import { api } from '../../services/api';

export function TeacherList(){
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers]= useState([]);
  function searchTeachers(e: FormEvent){
    e.preventDefault();
    api.get('/classes', {
      params: {
        subject, week_day: weekDay, time
      }
    }).then((response)=>{
      setTeachers(response.data);
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            name='subject' 
            label='Matéria'
            value={subject}
            onChange={e => {setSubject(e.target.value)}}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Educação Física', label: 'Educação Física'},
              {value: 'Física', label: 'Física'},
              {value: 'Filosofia', label: 'Filosofia'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'História', label: 'Histórias'},
              {value: 'Português', label: 'Português'},
              {value: 'Química', label: 'Química'},
            ]}
          />
          <Select 
            name='weekday' 
            label='Dia da semana' 
            value={weekDay}
            onChange={e => {setWeekDay(e.target.value)}}
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
            label="Hora" 
            name="time" 
            type="time"
            value={time}
            onChange={e => {setTime(e.target.value)}}
          />
          <button type='submit'>
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher)=>{
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}