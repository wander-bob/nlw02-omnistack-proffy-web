import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
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
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}