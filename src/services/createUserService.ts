import { userRepositories } from '../repositories/userRepositories'
import { getCustomRepository } from 'typeorm'
import {hash} from 'bcryptjs'


interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password:string;
}

class createUserService {
  async execute({ name, email, admin = false,password }: IUserRequest) {
    const usersRepositories = getCustomRepository(userRepositories)
    if (!email) {
      throw new Error('E-MAIL Incorrect ') 
    }

    const userAlreadyExists = await usersRepositories.findOne({email})
    if (userAlreadyExists) {
      throw new Error('User Already Exists')
    }
    const Hash = await hash(password,8)

    const user = usersRepositories.create({ 
      name,
      email,
      admin,
      password: Hash
    })
    await usersRepositories.save(user);

    return user;
  }
}
export { createUserService }