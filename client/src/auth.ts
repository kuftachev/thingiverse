export function doAuth(): string {
// eslint-disable-next-line no-restricted-globals
  const authCode = (new URLSearchParams(location.search)).get('code')
  if (authCode) {
    localStorage.setItem('code_token', authCode)
    // eslint-disable-next-line no-restricted-globals
    location.search = ''
  }
  return localStorage.getItem('code_token') || ''
}

export const codeToken = doAuth()
export const isLogged = !!codeToken