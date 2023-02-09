import { MinorUserException } from 'domain/exeptions/minorUserException'
import { User } from '../../../domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'
// import { type Notifier } from '../../domain/repositories/Notifier'

export class UserCreator {
  private readonly _userRepository: UserRepository
  // private readonly _notifier: Notifier

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    // this._notifier = notifier
  }

  async run ({ id, name, age }: { id: string, name: string, age: number }): Promise<User> {
    const user = new User({ id, name, age })

    if (user.age < 18) { throw new MinorUserException() }

    await this._userRepository.save(user)

    // this._notifier.notify({
    //   name: user.name,
    //   age: user.age
    // })
    return user
  }
}
