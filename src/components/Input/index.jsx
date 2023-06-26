import './style.scss'

export function Input({type, placeholder, value, onChange}) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
}