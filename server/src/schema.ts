import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Query {
    things(
      page: Int!
      perPage: Int!
      searchType: SearchType!
    ): ThingResponse
    thing(id: Int!): Thing
  }

  enum SearchType {
    NEWEST
    POPULAR
    FEATURED
  }

  type ThingResponse {
    count: Int!
    things: [Thing]!
    error: String
  }

  type Thing {
    id: Int!,
    name: String!,
    url: String!,
    thumbnail: String!,
    creator: Creator!
  }

  type Creator {
    name: String!
  }
`
