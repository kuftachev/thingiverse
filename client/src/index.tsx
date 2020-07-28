import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client'

import './normilize.css'
import './index.css'
import App from './App'
import {codeToken} from './auth'

const URI = process.env.REACT_APP_SERVER_URL

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URI,
    headers: {
      authorization: codeToken,
    },
  }),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
