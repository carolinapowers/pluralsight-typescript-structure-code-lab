import { Product } from '../types'
import { formatCurrency, capitalize } from '../utils'
import { ProductService } from '../services'

export class ProductCard {
  private product: Product
  private productService: ProductService

  constructor(product: Product) {
    this.product = product
    this.productService = new ProductService()
  }

  render(): string {
    const formattedPrice = this.productService.formatProductPrice(this.product)
    const isAvailable = this.productService.isProductAvailable(this.product)
    const formattedCategory = capitalize(this.product.category)

    return `
      <div class="product-card ${isAvailable ? 'available' : 'out-of-stock'}">
        <h3>${this.product.name}</h3>
        <p>Price: ${formattedPrice}</p>
        <p>Category: ${formattedCategory}</p>
        <p>Status: ${isAvailable ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    `
  }
}