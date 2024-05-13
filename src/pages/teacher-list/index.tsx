
import { Input } from '../../components/input';
import { PageHeader } from '../../components/page-header';
import { TeacherItem } from '../../components/teacher-item';
import './styles.css';


export function TeacherList(){
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
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