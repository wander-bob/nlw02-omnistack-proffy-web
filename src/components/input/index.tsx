import { InputHTMLAttributes } from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
}
export function Input({label, name, ...props}: InputProps){
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...props} />
    </div>
  )
}