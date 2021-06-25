import { getCustomRepository } from "typeorm"
import { ComplimentsRepository } from "../repositories/ComplimentsRepository"
import { userRepositories } from "../repositories/userRepositories"


interface IComplimentsService{
  user_sender:string;
  user_receiver:string;
  tag_id:string;
  message:string;
}

class ComplimentsService{
  async execute({user_receiver,user_sender,tag_id,message}: IComplimentsService){
    const RPUser = getCustomRepository(userRepositories)
    const RPCompliments = getCustomRepository(ComplimentsRepository)

    //verificar se Está o usuario está mandando pra ele mesmo
    if(user_sender === user_receiver){
      throw new Error("Can't Receive Of YourSelf")
    }
    // Verificar Se o Usuario que irá Receber Exist 
    // Não Precisamos Verificar se o usuario que envia existe porque ele já está logado
    const Receiver = await RPUser.findOne(user_receiver)
    if(!Receiver){
      throw new Error("User Don't Exists")
    }
    const Compliments = RPCompliments.create({
      user_receiver,
      user_sender,
      tag_id,
      message
    })

    await RPCompliments.save(Compliments)
    return Compliments
  }
}
export {ComplimentsService}