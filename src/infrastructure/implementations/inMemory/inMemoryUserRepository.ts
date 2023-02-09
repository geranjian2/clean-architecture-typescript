
import { type User } from '@app/domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  readonly userData: User[] = []
  async getAll (): Promise<User[]> {
    return this.userData
  }

  async save (user: User): Promise<User> {
    this.userData.push(user)
    return user
  }

  async getById (userId: string): Promise<User | null> {
    let user!: User
    return user
  }

  async delete (userId: string): Promise<string> {
    return 'usuario eliminado'
  }

  async update (user: User): Promise<User> {
    return user
  }
}
