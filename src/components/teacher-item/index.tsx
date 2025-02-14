import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { api } from '../../services/api';
import './styles.css';

export interface Teacher {
  id: number;
    avatar:string; 
    bio: string;
    cost: number;
    name: string;
    subject:string
    whatsapp:string
}
interface TeacherItemProps {
  teacher: Teacher;
}
export function TeacherItem({teacher}:TeacherItemProps){
  function createNewConnection(){
    api.post('/connections', {user_id: teacher.id})
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {Number(teacher.cost).toFixed(2)}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target='_blank'
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}