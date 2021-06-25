import {Request,Response} from 'express'
import { ComplimentsService } from '../services/CreateComplimentsService'

class ComplimentsController{
  async handle(request:Request,response:Response){
    //Fazer a Requisição do que o Cliente Digitar
    const {user_receiver,user_sender,message,tag_id} = request.body
    //Instanciar o service que Criamos antes de Usar
    const complimentsService = new ComplimentsService()
    //Pegar Os Dados da requisição e mandar para o Service Execitar
    const resultCompliments = await complimentsService.execute({user_receiver,user_sender,message,tag_id})
    //Vamos Devolver a Resposta em formato Json Para o Front
    return response.json(resultCompliments)
  }
}
export{ ComplimentsController}