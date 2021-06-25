import { Request, Response } from 'express'
import { createUserService } from '../services/createUserService';


class CreateUsersControllers {

    async handle(request: Request, response: Response) {
        const { name, email, admin,password } = request.body

        const createUsersService = new createUserService()

        const user = await createUsersService.execute(
            { name, email, admin,password }
            )

        return response.json(user)

    }


}

export { CreateUsersControllers }