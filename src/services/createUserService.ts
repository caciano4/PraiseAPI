import { userRepositories } from '../repositories/userRepositories'
import { getCustomRepository } from 'typeorm'


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class createUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(userRepositories)
    if (!email) {
      throw new Error('E-MAIL Incorrect ') 
    }

    const userAlreadyExists = await usersRepositories.findOne({email})
    if (userAlreadyExists) {
      throw new Error('User Already Exists')
    }

    const user = usersRepositories.create({ 
      name,
      email,
      admin
    })
    await usersRepositories.save(user);

    return user;
  }
}
export { createUserService }