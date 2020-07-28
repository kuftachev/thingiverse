interface UserSession {
  code: string
  token: string
}

const userSession = new Map<string, UserSession>()

export function addUserSession(code: string, token: string) {
  userSession.set(code, {code, token})
}

export function getUserSession(code: string): UserSession | undefined {
  return userSession.get(code)
}
