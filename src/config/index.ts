/**
 * Config barrel file - Application configuration
 * 
 * Consolidates all configuration settings and constants.
 * Created in Step 3 of the barrel file learning progression.
 * 
 * @example Import API configuration
 * import { apiConfig, endpoints } from './config'
 * 
 * @example Access configuration values
 * import { apiConfig } from './config'
 * const baseUrl = apiConfig.baseUrl
 * 
 * @benefits
 * - Centralizes all application configuration
 * - Provides single source of truth for settings
 * - Simplifies configuration management and updates
 */

// Re-export API configuration
export * from './api'