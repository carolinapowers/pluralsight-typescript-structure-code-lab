/**
 * Services barrel file - Business logic and API services
 * 
 * Consolidates all service classes for user and product operations.
 * Created in Step 3 of the barrel file learning progression.
 * 
 * @example Import specific services
 * import { UserService, ProductService } from './services'
 * 
 * @example Instantiate services
 * import { UserService } from './services'
 * const userService = new UserService()
 * 
 * @benefits
 * - Centralizes all business logic services
 * - Simplifies service instantiation and dependency injection
 * - Enables consistent service imports across components
 */

// Re-export user service
export * from './userService'

// Re-export product service
export * from './productService'