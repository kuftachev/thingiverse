import React from 'react'

interface InputProps {
  label?: string
  value: string | number
  handler: any
  type?: InputType
}

export enum InputType {
  Text = 'text',
  Number = 'number',
}

const Input: React.FC<InputProps> = ({label = '', value, handler, type = InputType.Text}) => {
  const handleChange = (e: any) => {
    handler(e.target.value)
  }

  return (
    <label>
      {label}:&nbsp;
      <input type={type} value={value} onChange={handleChange}/>
    </label>
  )
}

export default Input