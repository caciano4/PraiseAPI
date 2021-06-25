import {Request,Response} from 'express'
import { CreateUserAuthentication } from '../services/CreateUserAthentication'

class CreateAuthController{

  async handle(request:Request,response:Response){
    const {email,password} = request.body
    const Auth = new CreateUserAuthentication()

    const token = await Auth.execute({email,password})

    response.json(token)

  }

}

export {CreateAuthController}