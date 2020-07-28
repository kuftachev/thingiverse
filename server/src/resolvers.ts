import {ThingsResponse, Thing, ThingsParams, SearchType} from './types'
import {ThingiverseAPI} from './datasources/things'

export const resolvers = {
  Query: {
    things: async (_: any, {page = 1, perPage = 20, searchType = SearchType.Newest}: ThingsParams, {dataSources}): Promise<ThingsResponse> => {
      const ds = dataSources.thingsAPI as ThingiverseAPI
      return await ds.getThings({page, perPage, searchType})
    },

    thing: async (_: any, {id}, {dataSources}): Promise<Thing> => {
      const ds = dataSources.thingsAPI as ThingiverseAPI
      return ds.getThing(id)
    },
  },
}
