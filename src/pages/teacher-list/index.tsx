
import { PageHeader } from '../../components/page-header';
import { TeacherItem } from '../../components/teacher-item';
import './styles.css';


export function TeacherList(){
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis." >
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da semana</label>
            <input type="text" id="weekday"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
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