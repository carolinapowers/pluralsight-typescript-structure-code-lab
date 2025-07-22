export const API_BASE_URL = 'https://api.example.com'
export const API_VERSION = 'v1'
export const DEFAULT_PAGE_SIZE = 20
export const MAX_RETRY_ATTEMPTS = 3

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
} as const

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
} as const