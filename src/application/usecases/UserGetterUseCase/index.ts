// import { MinorUserException } from 'domain/exeptions/minorUserException'
import { type User } from '../../../domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'
// import { type Notifier } from '../../domain/repositories/Notifier'

export class UserGetterUseCase {
  private readonly _userRepository: UserRepository
  // private readonly _notifier: Notifier

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    // this._notifier = notifier
  }

  async run (email: string): Promise<User | null> {
    const user = await this._userRepository.getById(email)

    // this._notifier.notify({
    //   name: user.name,
    //   age: user.age
    // })
    return user
  }
}
