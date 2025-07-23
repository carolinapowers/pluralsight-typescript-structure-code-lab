/**
 * Utils barrel file - Utility functions and constants
 * 
 * Consolidates formatters, validators, and constants into a single import point.
 * This was the first barrel file created in the learning progression (Step 2).
 * 
 * @example Basic usage
 * import { formatCurrency, isValidEmail, API_BASE_URL } from './utils'
 * 
 * @example Validation chain
 * import { isValidEmail, isValidPassword } from './utils'
 * const isValid = isValidEmail(email) && isValidPassword(password)
 * 
 * @benefits
 * - Consolidates 3 utility modules into 1 import
 * - Provides consistent access to formatting, validation, and constants
 * - Simplifies refactoring and maintenance
 */

// Re-export constants
export * from './constants'

// Re-export formatters
export * from './formatters'

// Re-export validators  
export * from './validators'