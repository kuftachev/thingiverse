import React from 'react'
import {gql, useQuery} from '@apollo/client'
import {ThingResponseData} from '../types'
import ThingItem from '../components/ThingItem'

const GET_THING = gql`
  query Thing($id: Int!) {
    thing(id: $id) {
      id
      name
      url
      thumbnail
      creator
      {
        name
      }
    }
  }  
`

interface ThingContainerProps {
  id: number
}

const ThingContainer: React.FC<ThingContainerProps> = ({id}) => {
  const {
    data, loading, error
  } = useQuery<ThingResponseData, ThingContainerProps>(GET_THING, {variables: {id}})

  if (loading) return <p>Loading...</p>
  if (error) return <p>{`Error! ${error.message}`}</p>
  if (!data) return <p>Error...</p>

  return (
    <ThingItem thing={data.thing}/>
  )
}

export default ThingContainer