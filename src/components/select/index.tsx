import { SelectHTMLAttributes } from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  label: string;
  name: string;
  options: {
    value: string, 
    label: string
  }[];
}
export function Select({label, name, options, ...props}: SelectProps){
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select defaultValue='' id={name} {...props}>
        <option value='' disabled hidden>Selecione uma opção</option>
        {options.map((option, key) => {
          return <option key={`${key}-${option.value}`} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}