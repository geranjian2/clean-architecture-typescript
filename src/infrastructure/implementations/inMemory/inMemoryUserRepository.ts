
import { type User } from '@app/domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'

export class InMemoryUserRepository implements UserRepository {
  userData: User[] = []
  async getAll (): Promise<User[]> {
    return this.userData
  }

  async save (user: User): Promise<User> {
    this.userData.push(user)
    return user
  }

  async getById (userId: string): Promise<User | undefined> {
    return this.userData.find(x => x.id === userId)
  }

  async delete (user:User): Promise<string> {
    const arr = this.userData.filter(item => item.id !== user.id)
    this.userData = arr
    return 'remove'
  }

  async update (user: User): Promise<User> {
    this.userData.map(e => {
      if (e.id === user.id) {
        e.name = user.name
        e.age = user.age
        e.username = user.username
      }
      return e
    })
    return user
  }
}
