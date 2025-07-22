import { User } from '../types'
import { formatDate, capitalize, USER_ROLES } from '../utils'

export class UserCard {
  private user: User

  constructor(user: User) {
    this.user = user
  }

  render(): string {
    const formattedRole = capitalize(this.user.role)
    const isAdmin = this.user.role === USER_ROLES.ADMIN

    return `
      <div class="user-card ${isAdmin ? 'admin' : ''}">
        <h3>${this.user.name}</h3>
        <p>Email: ${this.user.email}</p>
        <p>Role: ${formattedRole}</p>
        <span class="user-id">ID: ${this.user.id}</span>
      </div>
    `
  }
}