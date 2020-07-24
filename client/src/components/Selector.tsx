import React from 'react'
import {SearchType} from '../types'

export interface SelectorItem {
  value: any
  text: string
}

interface SelectorProps {
  label?: string
  value: SearchType
  items: SelectorItem[]
  handler: any
}

const Selector: React.FC<SelectorProps> = ({label = '', value, items, handler}) => {
  const handleChange = (e: any) => {
    handler(e.target.value)
  }

  const options = items.map(item => <option key={item.value} value={item.value || ""}>{item.text}</option>)
  return (
    <label>
      {label}:&nbsp;
      <select value={value} onChange={handleChange}>
        {options}
      </select>
    </label>
  )
}

export default Selector
