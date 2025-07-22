import { UserService } from './services/userService'
import { ProductService } from './services/productService'
import { UserCard } from './components/UserCard'
import { ProductCard } from './components/ProductCard'
import { User, Product } from './types/api'
import { isValidEmail, isValidPassword } from './utils/validators'
import { formatCurrency, formatDate } from './utils/formatters'
import { API_BASE_URL, DEFAULT_PAGE_SIZE, USER_ROLES } from './utils/constants'

class App {
  private userService: UserService
  private productService: ProductService

  constructor() {
    this.userService = new UserService()
    this.productService = new ProductService()
  }

  async init() {
    console.log(`Initializing app with API: ${API_BASE_URL}`)
    console.log(`Default page size: ${DEFAULT_PAGE_SIZE}`)
    
    try {
      const users = await this.userService.getUsers()
      const products = await this.productService.getProducts()

      this.renderUsers(users.data)
      this.renderProducts(products.data)
    } catch (error) {
      console.error('Failed to initialize app:', error)
    }
  }

  private renderUsers(users: User[]) {
    users.forEach(user => {
      const userCard = new UserCard(user)
      console.log(userCard.render())
    })
  }

  private renderProducts(products: Product[]) {
    products.forEach(product => {
      const productCard = new ProductCard(product)
      console.log(productCard.render())
    })
  }

  validateUserInput(email: string, password: string): boolean {
    return isValidEmail(email) && isValidPassword(password)
  }
}

const app = new App()
app.init()