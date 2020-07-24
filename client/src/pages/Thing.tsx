import React from 'react'
import { RouteComponentProps } from '@reach/router'
import ThingContainer from '../container/ThingContainer'

interface ThingProps extends RouteComponentProps {
  id?: any
}

const Thing: React.FC<ThingProps> = ({ id }) => {
  return (
    <ThingContainer id={parseInt(id)}/>
  )
}

export default Thing
