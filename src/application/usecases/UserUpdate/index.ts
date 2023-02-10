import { UserGetterById } from '@app/domain/services/UserGetterById'
import { MinorUserException } from 'domain/exeptions/minorUserException'
import { User } from '../../../domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'
// import { type Notifier } from '../../domain/repositories/Notifier'

export class UserUpdaterUseCase {
  private readonly _userRepository: UserRepository
  private readonly _userGetterById: UserGetterById

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._userGetterById = new UserGetterById(userRepository)
  }

  async run (data: User): Promise<User> {
    const user = await this._userGetterById.run(data.id)

    // const user = new User({ id, name, age, username })

    const dataToUpdate = new User({
      id: data.id,
      name: data.name ?? user?.name,
      age: data.age ?? user?.age,
      username: data.username ?? user?.username
    })

    const userUpdated: User = await this._userRepository.update(dataToUpdate)
    return userUpdated
  }
}
