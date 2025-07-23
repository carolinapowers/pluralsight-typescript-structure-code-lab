/**
 * Types barrel file - STEP 5: Advanced optimizations with type-only exports
 * 
 * Step 5 optimizations implemented:
 * - Type-only exports for better performance
 * - Selective type exports instead of export *
 * - Namespace grouping for logical organization
 * 
 * @example Type-only imports (optimized)
 * import type { User, Product, ApiResponse } from './types'
 * 
 * @example Namespace type imports (new in Step 5)
 * import type { API, Events } from './types'
 * const user: API.User = { ... }
 * const event: Events.ClickEvent = { ... }
 * 
 * @benefits
 * - Zero runtime overhead with type-only exports
 * - Better tree-shaking and bundle optimization
 * - Clear separation between types and runtime code
 * - Enhanced TypeScript compilation performance
 */

// Step 5: Type-only selective exports for better performance
export type { 
  User, 
  Product, 
  ApiResponse, 
  PaginatedResponse 
} from './api'

export type { 
  ClickEvent, 
  KeyboardEvent, 
  AppEvent 
} from './events'

// Step 5: Namespace grouping for logical organization
export type * as API from './api'
export type * as Events from './events'