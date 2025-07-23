/**
 * Main barrel file - TypeScript Barrel Files Code Lab
 * 
 * This file creates a complete barrel implementation providing centralized exports
 * for the entire application. Supports both namespace and direct import patterns:
 * 
 * @example Namespace imports
 * import { utils, types } from './index'
 * const isValid = utils.isValidEmail('test@example.com')
 * 
 * @example Direct imports  
 * import { User, UserService, formatCurrency } from './index'
 * 
 * @benefits
 * - 75% reduction in import complexity (8 statements → 2)
 * - Single source of truth for module exports
 * - Improved maintainability and refactoring
 * - Clean separation of concerns
 */

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
export type { 
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