import { UserGetterById } from '@app/domain/services/UserGetterById'
import { MinorUserException } from 'domain/exeptions/minorUserException'
import { type User } from '../../../domain/entities/User'
import { type UserRepository } from '../../../domain/repositories/UserRepository'
// import { type Notifier } from '../../domain/repositories/Notifier'

export class UserDeleteUseCase {
  private readonly _userRepository: UserRepository
  private readonly _userGetterById: UserGetterById

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository
    this._userGetterById = new UserGetterById(userRepository)
  }

  async run (data: User): Promise<void> {
    const user = await this._userGetterById.run(data.id)
    if (user != null) {
      await this._userRepository.delete(user)
    }
  }
}
