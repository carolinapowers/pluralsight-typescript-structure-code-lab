export const apiConfig = {
  baseUrl: process.env.API_BASE_URL || 'https://api.example.com',
  timeout: 5000,
  retryAttempts: 3,
  retryDelay: 1000
}

export const endpoints = {
  users: '/users',
  products: '/products',
  auth: '/auth',
  profile: '/profile'
}