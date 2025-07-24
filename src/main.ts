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
    console.log(`🚀 TypeScript Barrel Files Demo - SOLUTION: Perfect Implementation`)
    console.log(`📁 Initializing app with API: ${API_BASE_URL}`)
    console.log(`📊 Default page size: ${DEFAULT_PAGE_SIZE}`)
    console.log(`✨ Main barrel file provides both direct & namespace imports`)
    console.log(`🎯 Final result: 2 import statements (down from 8!)`)
    console.log(`📈 75% reduction in import complexity!`)
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

    console.log('👥 Demo Users (main barrel import):')
    this.renderUsers(mockUsers)
    console.log('')
    console.log('📦 Demo Products (main barrel import):')
    this.renderProducts(mockProducts)
    console.log('')
    
    // Demonstrate utility functions from main barrel
    console.log('🛠️ Utility Functions Demo (main barrel):')
    console.log(`💰 Formatted price: ${formatCurrency(99.99)}`)
    console.log(`📅 Formatted date: ${formatDate(new Date())}`)
    console.log(`✅ Email validation: ${isValidEmail('test@example.com')}`)
    console.log(`❌ Password validation: ${isValidPassword('weak')}`)
    console.log('')
    console.log('🏆 SOLUTION: Complete barrel implementation!')
    console.log('🎓 You have mastered TypeScript barrel files!')
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