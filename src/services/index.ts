/**
 * Services barrel file - STEP 5: Advanced optimizations with selective exports
 * 
 * Step 5 optimizations implemented:
 * - Selective class exports instead of export *
 * - Namespace grouping for service organization
 * - Clear separation of service classes and utilities
 * 
 * @example Selective imports (optimized)
 * import { UserService, ProductService } from './services'
 * 
 * @example Namespace imports (new in Step 5)
 * import { Services } from './services'
 * const userService = new Services.UserService()
 * const productService = new Services.ProductService()
 * 
 * @benefits
 * - Better tree-shaking for service classes
 * - Improved IDE IntelliSense and navigation
 * - Clear dependency tracking for service imports
 * - Enhanced maintainability and refactoring
 */

// Step 5: Selective re-exports for better tree-shaking
export { UserService } from './userService'
export { ProductService } from './productService'

// Step 5: Create unified Services namespace for alternative import style
import { UserService } from './userService'
import { ProductService } from './productService'

export const Services = {
  UserService,
  ProductService
} as const