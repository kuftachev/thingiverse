import React, {Fragment} from 'react'
import {gql, useQuery} from '@apollo/client'
import {ThingsParams, ThingsResponseData} from '../types'
import ThingListItem from '../components/ThingListItem'

const GET_THINGS = gql`
  query ThingList($page: Int!, $perPage: Int!, $searchType: SearchType!) {
    things(page: $page, perPage: $perPage, searchType: $searchType) {
      things {
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
  }
`

const ThingListContainer: React.FC<ThingsParams> = ({page, perPage, searchType}) => {
  const {
    data, loading, error
  } = useQuery<ThingsResponseData, ThingsParams>(GET_THINGS, {variables: {page, perPage, searchType}})

  if (loading) return <p>Loading...</p>
  if (error) return <p>{`Error! ${error.message}`}</p>

  let thingList = data ? data.things.things.map(v => <ThingListItem thing={v} key={v.id}/>) : []

  return (
    <Fragment>
      {thingList}
    </Fragment>
  )
}


export default ThingListContainer