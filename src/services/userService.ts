import { User, ApiResponse, PaginatedResponse } from '../types'
import { apiConfig, endpoints } from '../config'
import { isValidEmail, DEFAULT_PAGE_SIZE } from '../utils'

export class UserService {
  async getUsers(page = 1, limit = DEFAULT_PAGE_SIZE): Promise<PaginatedResponse<User>> {
    const response = await fetch(`${apiConfig.baseUrl}${endpoints.users}?page=${page}&limit=${limit}`)
    return response.json()
  }

  async getUserById(id: number): Promise<ApiResponse<User>> {
    const response = await fetch(`${apiConfig.baseUrl}${endpoints.users}/${id}`)
    return response.json()
  }

  async createUser(userData: Omit<User, 'id'>): Promise<ApiResponse<User>> {
    if (!isValidEmail(userData.email)) {
      throw new Error('Invalid email address')
    }

    const response = await fetch(`${apiConfig.baseUrl}${endpoints.users}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    return response.json()
  }
}