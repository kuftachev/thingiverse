require('dotenv').config()
require('./auth')

import {ApolloServer} from 'apollo-server'

import {typeDefs} from './schema'
import {resolvers} from './resolvers'
import {ThingiverseAPI} from './datasources/things'
import {getUserSession} from './user-sessions'

const context = async ({req}) => {
  const code = (req.headers && req.headers.authorization) || ''
  let userSession = getUserSession(code)

  return {userSession}
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => ({
    thingsAPI: new ThingiverseAPI(),
  }),
})

server.listen().then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
