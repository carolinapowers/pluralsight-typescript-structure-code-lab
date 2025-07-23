/**
 * Types barrel file - TypeScript interface definitions
 * 
 * Consolidates all type definitions from API and event modules.
 * Created in Step 3 of the barrel file learning progression.
 * 
 * @example Import API types
 * import { User, Product, ApiResponse } from './types'
 * 
 * @example Import event types
 * import { ClickEvent, KeyboardEvent, AppEvent } from './types'
 * 
 * @example Mixed usage
 * import { User, ClickEvent } from './types'
 * 
 * @benefits
 * - Centralizes all TypeScript definitions
 * - Enables consistent type imports across the application
 * - Supports both individual and batch type imports
 */

// Re-export API types
export * from './api'

// Re-export event types
export * from './events'