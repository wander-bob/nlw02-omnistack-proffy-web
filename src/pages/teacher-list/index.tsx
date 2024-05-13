
import { Input } from '../../components/input';
import { PageHeader } from '../../components/page-header';
import { Select } from '../../components/select';
import { TeacherItem } from '../../components/teacher-item';
import './styles.css';


export function TeacherList(){
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teachers">
        <Select 
            name='subject' 
            label='Matéria' 
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
          <Input name="weekday" label="Dia da semana" />
          <Input name="time" label="Hora" type="time"/>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}