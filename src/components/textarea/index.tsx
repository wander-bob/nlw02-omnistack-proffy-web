import { TextareaHTMLAttributes } from 'react';
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  label: string;
  name: string;
}
export function Textarea({label, name, ...props}: TextareaProps){
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...props} />
    </div>
  )
}