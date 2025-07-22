export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

export interface Product {
  id: number
  name: string
  price: number
  category: string
  inStock: boolean
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number
  limit: number
  total: number
}