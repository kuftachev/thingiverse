import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

import './normilize.css'
import './index.css'
import App from './App'

const URI = process.env.REACT_APP_SERVER_URL

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URI,
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
