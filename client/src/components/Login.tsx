import React from 'react'
import styled from '@emotion/styled'

const THINGIVERSE_AUTH_URL = process.env.REACT_APP_THINGIVERSE_AUTH_URL
const THINGIVERSE_CLIENT_ID = process.env.REACT_APP_THINGIVERSE_CLIENT_ID
const SERVER_AUTH = process.env.REACT_APP_SERVER_AUTH

export default function Login() {
  return (
    <LoginWrapper>
      <a
        href={`${THINGIVERSE_AUTH_URL}?client_id=${THINGIVERSE_CLIENT_ID}&response_type=code&redirect_uri=${SERVER_AUTH}`}>Login</a>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  padding-top: 100px;
`
