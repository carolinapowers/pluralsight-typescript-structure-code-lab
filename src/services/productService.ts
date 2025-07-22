import { Product, ApiResponse, PaginatedResponse } from '../types/api'
import { apiConfig, endpoints } from '../config/api'
import { formatCurrency } from '../utils/formatters'
import { DEFAULT_PAGE_SIZE } from '../utils/constants'

export class ProductService {
  async getProducts(page = 1, limit = DEFAULT_PAGE_SIZE): Promise<PaginatedResponse<Product>> {
    const response = await fetch(`${apiConfig.baseUrl}${endpoints.products}?page=${page}&limit=${limit}`)
    return response.json()
  }

  async getProductById(id: number): Promise<ApiResponse<Product>> {
    const response = await fetch(`${apiConfig.baseUrl}${endpoints.products}/${id}`)
    return response.json()
  }

  formatProductPrice(product: Product): string {
    return formatCurrency(product.price)
  }

  isProductAvailable(product: Product): boolean {
    return product.inStock
  }
}