/**
 * Components barrel file - UI component classes
 * 
 * Consolidates all UI components for rendering user and product data.
 * Created in Step 3 of the barrel file learning progression.
 * 
 * @example Import specific components
 * import { UserCard, ProductCard } from './components'
 * 
 * @example Component instantiation
 * import { UserCard } from './components'
 * const card = new UserCard(userData)
 * 
 * @benefits
 * - Centralizes all UI components
 * - Simplifies component imports in main application
 * - Enables consistent component access patterns
 */

// Re-export user components
export * from './UserCard'

// Re-export product components
export * from './ProductCard'