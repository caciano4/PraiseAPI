import {EntityRepository,Repository } from 'typeorm'
import {User} from '../entities/User'

@EntityRepository(User)
class userRepositories extends Repository<User> {}

export {userRepositories}