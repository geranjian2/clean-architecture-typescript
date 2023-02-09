
import { UserNotFoundException } from 'domain/exeptions/userNotFoundException'
import { type User } from '../../entities/User'
import { type UserRepository } from '../../repositories/UserRepository'

export class UserFinder {
  private readonly _userRepository: UserRepository

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
  }

  async run (userId: string): Promise<User> {
    const user: User = await this._userRepository.getById(userId)

    if (user === null) { throw new UserNotFoundException() }

    return user
  }
}
