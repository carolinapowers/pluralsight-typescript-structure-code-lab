import { 
  UserService, 
  ProductService, 
  UserCard, 
  ProductCard,
  User, 
  Product,
  isValidEmail,
  formatCurrency, 
  formatDate,
  API_BASE_URL, 
  DEFAULT_PAGE_SIZE 
} from './index'
import { isValidPassword } from './utils'

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