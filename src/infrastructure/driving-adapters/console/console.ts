import { UserCreator } from '@app/application/usecases/UserCreator'
// import { UserGetterUseCase } from '@app/application/usecases/UserGetterUseCase'
import { type User } from '@app/domain/entities/User'
import { InMemoryUserRepository } from '@app/infrastructure/implementations/inMemory/inMemoryUserRepository'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  const userMemoryRepository = new InMemoryUserRepository()
  console.log(userMemoryRepository.userData)
  const userCreatorUseCase = new UserCreator(userMemoryRepository)
  const userTocreate: User = {
    name: 'Luciana',
    age: 12,
    id: '1'
  }
  await userCreatorUseCase.run(userTocreate)
  // const userGetterUseCase = new UserGetterUseCase(userMemoryRepository)
  // const users = await userGetterUseCase.run('geranjian@gmail.com')
  console.log(userMemoryRepository.userData)
})()
