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

// Direct re-exports from individual barrel files
export * from './types'
export * from './services' 
export * from './components'
export * from './utils'
export * from './config'