import dotenv from 'dotenv'
dotenv.config()
if (!process.env.THINGIVERSE_TOKEN) {
  console.log('Thingverse token is not set in environment')
  process.exit(1)
}

import { ApolloServer } from 'apollo-server'

import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { ThingiverseAPI } from './datasources/things'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    thingsAPI: new ThingiverseAPI(),
  }),
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
