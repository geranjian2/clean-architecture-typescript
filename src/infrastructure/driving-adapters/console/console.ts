import { UserCreator } from '@app/application/usecases/UserCreator'
import { UserDeleteUseCase } from '@app/application/usecases/UserDelete'
import { UserGetterAllUseCase } from '@app/application/usecases/UserGetterAllUseCase'
import { UserGetterUseCase } from '@app/application/usecases/UserGetterUseCase'
import { UserUpdaterUseCase } from '@app/application/usecases/UserUpdate'
import { type User } from '@app/domain/entities/User'
import { DynamoDBUserRepository } from '@app/infrastructure/implementations/Aws/dynamo-db/DynamoDBuserRepository'
import { InMemoryUserRepository } from '@app/infrastructure/implementations/inMemory/inMemoryUserRepository'
import * as dotenv from "dotenv";
// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  dotenv.config();
  console.log(process.env.AWS_ACCESS_KEY_ID);
  // const userMemoryRepository = new InMemoryUserRepository()
  const userMemoryRepository = new DynamoDBUserRepository()
  // console.log(userMemoryRepository.userData)
  const userCreatorUseCase = new UserCreator(userMemoryRepository)
  const userTocreate: User = {
    name: 'Luciana',
    age: 12,
    id: '1',
    username: 'geranjian'
  }
  await userCreatorUseCase.run(userTocreate)
  const userGetterUseCase = new UserGetterUseCase(userMemoryRepository)
  const user = await userGetterUseCase.run('geranjian@gmail.com')

  const userGetterAllUseCase = new UserGetterAllUseCase(userMemoryRepository)
  const users = await userGetterAllUseCase.run('geranjian@gmail.com')
  // console.log(userMemoryRepository.userData)
  console.log(users)
  console.log(user)

  const userUpdateUseCase = new UserUpdaterUseCase(userMemoryRepository)
  const userUpdate: User = {
    name: 'Andres',
    age: 18,
    id: '1',
    username: 'geranjian'
  }
  const userU = await userUpdateUseCase.run(userUpdate)
  console.log('update', userU)

  // const userDeleteUseCase = new UserDeleteUseCase(userMemoryRepository)
  // await userDeleteUseCase.run(userUpdate)

  const usersv = await userGetterAllUseCase.run('geranjian@gmail.com')
  console.log(usersv)
})()
