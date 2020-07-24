import React from 'react'
import {Thing} from '../types'

interface ThingProps {
  thing: Thing
}

const ThingItem: React.FC<ThingProps> = ({thing}) => {
  return (
    <div>
      <h1>{thing.name}</h1>
      <img src={thing.thumbnail} alt={thing.name}/>
      <h2>By: {thing.creator.name}</h2>
    </div>
  )
}

export default ThingItem