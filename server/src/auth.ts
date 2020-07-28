import express from 'express'
import axios from 'axios'
import {addUserSession} from './user-sessions'

const ACCESS_TOKEN_NAME = 'access_token'

const app = express()
app.get('/', async (req, res) => {
  const code = req.query.code.toString()
  await authenticateByCode(code)
  res.redirect(`${process.env.CLIENT_APP_URL}?code=${code}`)
})

async function authenticateByCode(code: string): Promise<void> {
  const res = await axios.post(process.env.THINGIVERSE_AUTH_TOKEN_URL, null, {
    params: {
      client_id: process.env.THINGIVERSE_CLIENT_ID,
      client_secret: process.env.THINGIVERSE_CLIENT_SECRET,
      code: code,
    }
  })
  const token = parseToken(res.data)
  addUserSession(code, token)
}

function parseToken(data: string): string {
  const tokenIndex = data.indexOf(ACCESS_TOKEN_NAME)
  const nextParamIndex = data.indexOf('&', tokenIndex)
  return data.slice(tokenIndex + ACCESS_TOKEN_NAME.length + 1, nextParamIndex)
}

app.listen(process.env.AUTH_PORT, function () {
  console.log('Auth server listening on port ' + process.env.AUTH_PORT + '!');
});

