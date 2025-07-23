import { UserService, ProductService } from './services'
import { UserCard, ProductCard } from './components'
import { User, Product } from './types'
import { isValidEmail, isValidPassword, formatCurrency, formatDate, API_BASE_URL, DEFAULT_PAGE_SIZE, USER_ROLES } from './utils'

class App {
  private userService: UserService
  private productService: ProductService

  constructor() {
    this.userService = new UserService()
    this.productService = new ProductService()
  }

  async init() {
    console.log(`🚀 TypeScript Barrel Files Demo - STEP 3: Multiple Barrels`)
    console.log(`📁 Initializing app with API: ${API_BASE_URL}`)
    console.log(`📊 Default page size: ${DEFAULT_PAGE_SIZE}`)
    console.log(`✅ Notice: Multiple barrel files working together!`)
    console.log(`📈 Improvement: 8 imports → 4 barrel imports`)
    console.log(`🎯 Types, Services, Components & Utils all using barrels`)
    console.log(``)
    
    // Create mock data for demo purposes
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' }
    ]
    
    const mockProducts: Product[] = [
      { id: 1, name: 'TypeScript Course', price: 49.99, category: 'education', inStock: true },
      { id: 2, name: 'Vite Handbook', price: 29.99, category: 'books', inStock: false }
    ]

    console.log('👥 Demo Users (via barrel imports):')
    this.renderUsers(mockUsers)
    console.log('')
    console.log('📦 Demo Products (via barrel imports):')
    this.renderProducts(mockProducts)
    console.log('')
    
    // Demonstrate utility functions from barrel import
    console.log('🛠️ Utility Functions Demo (all via barrels):')
    console.log(`💰 Formatted price: ${formatCurrency(99.99)}`)
    console.log(`📅 Formatted date: ${formatDate(new Date())}`)
    console.log(`✅ Email validation: ${isValidEmail('test@example.com')}`)
    console.log('')
    console.log('🎯 STEP 3: Multiple barrels - major simplification!')
    console.log('➡️ Next: git checkout step-4 for complete implementation')
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