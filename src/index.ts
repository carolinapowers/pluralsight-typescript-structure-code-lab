/**
 * Main barrel file - STEP 5: Advanced optimizations with selective exports
 * 
 * Step 5 enhancements over Step 4:
 * - Selective re-exports instead of export * for better tree-shaking
 * - Type-only exports separated from runtime exports
 * - Namespace organization for cleaner import patterns
 * - Performance optimizations for bundle size
 * 
 * @example Selective imports (Step 5 optimized)
 * import { UserService, formatCurrency, User } from './index'
 * 
 * @example Namespace imports (Step 5 feature)
 * import { Services, Formatters } from './index'
 * const service = new Services.UserService()
 * const price = Formatters.formatCurrency(100)
 * 
 * @example Type-only imports (Step 5 optimization)
 * import type { User, Product } from './index'
 * 
 * @benefits
 * - Superior tree-shaking and bundle optimization
 * - Zero runtime overhead for type-only imports
 * - Better IDE IntelliSense and autocomplete
 * - Clear dependency tracking across the application
 */

// Step 5: Type-only exports (zero runtime overhead)
export type { 
  User, 
  Product, 
  ApiResponse, 
  PaginatedResponse,
  ClickEvent, 
  KeyboardEvent, 
  AppEvent 
} from './types'

// Step 5: Selective runtime exports for better tree-shaking
export { 
  UserService, 
  ProductService 
} from './services'

export { 
  formatCurrency, 
  formatDate, 
  capitalize,
  isValidEmail, 
  isValidPassword, 
  isNotEmpty,
  API_BASE_URL, 
  API_VERSION,
  DEFAULT_PAGE_SIZE, 
  MAX_RETRY_ATTEMPTS,
  HTTP_STATUS,
  USER_ROLES 
} from './utils'

export { 
  UserCard, 
  ProductCard 
} from './components'

// Step 5: Namespace exports for organized imports
export { Services } from './services'
export { Formatters, Validators, Constants } from './utils'

// Step 5: Module namespace exports for backward compatibility
export * as utils from './utils'
export * as types from './types'
export * as services from './services'
export * as components from './components'
export * as config from './config'

// Step 5: Type namespace exports
export type { API, Events } from './types'