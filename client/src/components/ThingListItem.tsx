import React from 'react'
import {Thing} from '../types'
import {Link} from '@reach/router'
import styled from '@emotion/styled'

interface ThingProps {
  thing: Thing
}

const ThingListItem: React.FC<ThingProps> = ({thing}) => {

  return (
    <Card>
      <Link to={'/' + thing.id}>
        <CardImage src={thing.thumbnail} alt={thing.name}/>
        <CardBody>
          <p>Name: {thing.name}</p>
          <p>By: {thing.creator.name}</p>
        </CardBody>
      </Link>
    </Card>
  )
}

const Card = styled.div`
  width: 300px;
  margin-bottom: 30px;
  border: 1px solid black;
`

const CardImage = styled.img`
  height: 200px;
  width: 100%;
`
const CardBody = styled.div`
  padding: 10px;
`

export default ThingListItem