/**
 * Utils barrel file - STEP 5: Advanced optimizations with selective exports
 * 
 * Step 5 optimizations implemented:
 * - Selective re-exports instead of export * for better tree-shaking
 * - Namespace grouping for better organization
 * - Type-only exports where applicable
 * 
 * @example Selective imports (optimized)
 * import { formatCurrency, isValidEmail, API_BASE_URL } from './utils'
 * 
 * @example Namespace imports (new in Step 5)
 * import { Formatters, Validators } from './utils'
 * const price = Formatters.formatCurrency(100)
 * const isValid = Validators.isValidEmail(email)
 * 
 * @benefits
 * - Better tree-shaking and bundle optimization
 * - Improved IDE IntelliSense and autocomplete
 * - Clear dependency tracking
 * - Enhanced maintainability
 */

// Step 5: Selective re-exports for better tree-shaking
export { 
  formatCurrency, 
  formatDate, 
  capitalize 
} from './formatters'

export { 
  isValidEmail, 
  isValidPassword, 
  isNotEmpty 
} from './validators'

export { 
  API_BASE_URL, 
  API_VERSION,
  DEFAULT_PAGE_SIZE, 
  MAX_RETRY_ATTEMPTS,
  HTTP_STATUS,
  USER_ROLES 
} from './constants'

// Step 5: Namespace grouping for better organization
export * as Formatters from './formatters'
export * as Validators from './validators'
export * as Constants from './constants'