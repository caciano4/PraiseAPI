import { Request, Response } from 'express'
import { CreateTagService } from '../services/CreateTagService'

class CreateTagController {

  async handle(resquest:Request,response:Response) {
      const {name} = resquest.body

      const createTagService = new CreateTagService()

      const tag = await createTagService.execute({name})

      return response.json(tag)

   }
}

export { CreateTagController }