
import { type User } from '../entities/User'

export interface UserRepository {
  save: (user: User) => Promise<User>
  getAll: () => Promise<User[]>
  getById: (userId: string) => Promise<User | undefined>
  delete: (userId: string) => Promise<string>
  update: (user: User) => Promise<User>
}
