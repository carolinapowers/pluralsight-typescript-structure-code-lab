// Main barrel file - Step 4 of the lab
// This file creates a complete barrel implementation with nested exports
// allowing for clean imports from the entire application

// Re-export all utilities with namespace
export * as utils from './utils'

// Re-export all types with namespace
export * as types from './types'

// Re-export all services with namespace
export * as services from './services'

// Re-export all components with namespace
export * as components from './components'

// Re-export all config with namespace
export * as config from './config'

// Direct exports for most commonly used items
export { 
  // Types
  User, 
  Product, 
  ApiResponse, 
  PaginatedResponse 
} from './types'

export {
  // Services
  UserService,
  ProductService
} from './services'

export {
  // Components
  UserCard,
  ProductCard
} from './components'

export {
  // Most common utilities
  formatCurrency,
  formatDate,
  isValidEmail,
  API_BASE_URL,
  DEFAULT_PAGE_SIZE
} from './utils'