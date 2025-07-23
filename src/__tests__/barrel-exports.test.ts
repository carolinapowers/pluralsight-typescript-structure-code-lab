import { describe, it, expect } from 'vitest'

describe('Barrel Export Verification', () => {
  describe('Utils Barrel Exports', () => {
    it('should export all formatter functions', async () => {
      const utils = await import('../utils')
      
      expect(utils.formatCurrency).toBeDefined()
      expect(utils.formatDate).toBeDefined()
      expect(utils.capitalize).toBeDefined()
      
      expect(typeof utils.formatCurrency).toBe('function')
      expect(typeof utils.formatDate).toBe('function')
      expect(typeof utils.capitalize).toBe('function')
    })

    it('should export all validator functions', async () => {
      const utils = await import('../utils')
      
      expect(utils.isValidEmail).toBeDefined()
      expect(utils.isValidPassword).toBeDefined()
      expect(utils.isNotEmpty).toBeDefined()
      
      expect(typeof utils.isValidEmail).toBe('function')
      expect(typeof utils.isValidPassword).toBe('function')
      expect(typeof utils.isNotEmpty).toBe('function')
    })

    it('should export all constants', async () => {
      const utils = await import('../utils')
      
      expect(utils.API_BASE_URL).toBeDefined()
      expect(utils.API_VERSION).toBeDefined()
      expect(utils.DEFAULT_PAGE_SIZE).toBeDefined()
      expect(utils.MAX_RETRY_ATTEMPTS).toBeDefined()
      expect(utils.HTTP_STATUS).toBeDefined()
      expect(utils.USER_ROLES).toBeDefined()
      
      expect(typeof utils.API_BASE_URL).toBe('string')
      expect(typeof utils.DEFAULT_PAGE_SIZE).toBe('number')
    })
  })

  describe('Types Barrel Exports', () => {
    it('should export API types', async () => {
      // Test that types can be imported without errors
      const types = await import('../types')
      
      // Since these are TypeScript interfaces, we verify the module loads
      expect(types).toBeDefined()
    })

    it('should export event types', async () => {
      const types = await import('../types')
      
      // Verify event types module can be imported
      expect(types).toBeDefined()
    })
  })

  describe('Services Barrel Exports', () => {
    it('should export service classes', async () => {
      const services = await import('../services')
      
      expect(services.UserService).toBeDefined()
      expect(services.ProductService).toBeDefined()
      
      expect(typeof services.UserService).toBe('function')
      expect(typeof services.ProductService).toBe('function')
    })

    it('should allow service instantiation', async () => {
      const { UserService, ProductService } = await import('../services')
      
      const userService = new UserService()
      const productService = new ProductService()
      
      expect(userService).toBeInstanceOf(UserService)
      expect(productService).toBeInstanceOf(ProductService)
    })
  })

  describe('Components Barrel Exports', () => {
    it('should export component classes', async () => {
      const components = await import('../components')
      
      expect(components.UserCard).toBeDefined()
      expect(components.ProductCard).toBeDefined()
      
      expect(typeof components.UserCard).toBe('function')
      expect(typeof components.ProductCard).toBe('function')
    })

    it('should allow component instantiation', async () => {
      const { UserCard, ProductCard } = await import('../components')
      
      const mockUser = { id: 1, name: 'Test User', email: 'test@example.com', role: 'user' as const }
      const mockProduct = { id: 1, name: 'Test Product', price: 99.99, category: 'test', inStock: true }
      
      const userCard = new UserCard(mockUser)
      const productCard = new ProductCard(mockProduct)
      
      expect(userCard).toBeInstanceOf(UserCard)
      expect(productCard).toBeInstanceOf(ProductCard)
    })
  })

  describe('Config Barrel Exports', () => {
    it('should export configuration objects', async () => {
      const config = await import('../config')
      
      expect(config.apiConfig).toBeDefined()
      expect(config.endpoints).toBeDefined()
      
      expect(typeof config.apiConfig).toBe('object')
      expect(typeof config.endpoints).toBe('object')
    })

    it('should have valid configuration values', async () => {
      const { apiConfig, endpoints } = await import('../config')
      
      expect(apiConfig.baseUrl).toBe('https://api.example.com')
      expect(apiConfig.timeout).toBe(5000)
      expect(typeof apiConfig.retryAttempts).toBe('number')
      
      expect(endpoints.users).toBe('/users')
      expect(endpoints.products).toBe('/products')
    })
  })

  describe('Main Barrel Exports', () => {
    it('should export all commonly used items directly', async () => {
      const main = await import('../index')
      
      // Test direct exports
      expect(main.UserService).toBeDefined()
      expect(main.ProductService).toBeDefined()
      expect(main.UserCard).toBeDefined()
      expect(main.ProductCard).toBeDefined()
      expect(main.formatCurrency).toBeDefined()
      expect(main.formatDate).toBeDefined()
      expect(main.isValidEmail).toBeDefined()
      expect(main.API_BASE_URL).toBeDefined()
      expect(main.DEFAULT_PAGE_SIZE).toBeDefined()
    })

    it('should export namespace objects', async () => {
      const main = await import('../index')
      
      // Test namespace exports
      expect(main.utils).toBeDefined()
      expect(main.types).toBeDefined()
      expect(main.services).toBeDefined()
      expect(main.components).toBeDefined()
      expect(main.config).toBeDefined()
      
      expect(typeof main.utils).toBe('object')
      expect(typeof main.services).toBe('object')
      expect(typeof main.components).toBe('object')
      expect(typeof main.config).toBe('object')
    })

    it('should provide consistent access patterns', async () => {
      const main = await import('../index')
      
      // Test that both direct and namespace access work
      expect(main.formatCurrency).toBe(main.utils.formatCurrency)
      expect(main.UserService).toBe(main.services.UserService)
      expect(main.UserCard).toBe(main.components.UserCard)
    })
  })

  describe('Import Complexity Verification', () => {
    it('should demonstrate import reduction benefits', async () => {
      // Test that complex imports are no longer needed
      const main = await import('../index')
      
      // Single import provides access to everything
      const {
        UserService,
        ProductService,
        UserCard,
        ProductCard,
        formatCurrency,
        isValidEmail,
        API_BASE_URL
      } = main
      
      expect(UserService).toBeDefined()
      expect(ProductService).toBeDefined()
      expect(UserCard).toBeDefined()
      expect(ProductCard).toBeDefined()
      expect(formatCurrency).toBeDefined()
      expect(isValidEmail).toBeDefined()
      expect(API_BASE_URL).toBeDefined()
    })

    it('should work with real application workflow', async () => {
      const {
        UserService,
        UserCard,
        formatCurrency,
        isValidEmail
      } = await import('../index')
      
      // Simulate real usage
      const userService = new UserService()
      expect(userService).toBeInstanceOf(UserService)
      
      const isValid = isValidEmail('test@example.com')
      expect(isValid).toBe(true)
      
      const formatted = formatCurrency(99.99)
      expect(formatted).toContain('$99.99')
      
      const mockUser = { id: 1, name: 'Test', email: 'test@example.com', role: 'user' as const }
      const userCard = new UserCard(mockUser)
      expect(userCard.render()).toContain('Test')
    })
  })
})