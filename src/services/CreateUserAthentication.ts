import { getCustomRepository } from "typeorm";
import { userRepositories } from "../repositories/userRepositories";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface ICreateAuthentication {
  email: string;
  password: string;
}

class CreateUserAuthentication {
  async execute({ email, password }: ICreateAuthentication) {
    const userRepository = getCustomRepository(userRepositories)
    /*await Podemos Colocar await aqui ou direto como Abaixo*/
    const user = await userRepository.findOne({ email })
    //Primeiro Parametro a senha que o cliente Digitou
    //Seegundo Parametro a Senha que está no banco de Dados(Repositorio) 
    const AuthPassword = compare(password, user.password)

    // Verificar se o existe
    if (!user) {
      throw new Error("Email/Password Incorrect")
    }
    // Verificar se a senha Existe
    if (!AuthPassword) {
      throw new Error("Email/Password Incorrect")
    }
    //Gerar um Token

    const token = sign({
      email: user.email
    },
      "8f4f813f52869914314b6e13b5e1d3b4"
      , {
        subject: user.id,
        expiresIn: "1d"
      });

    return token;
  }
}

export {CreateUserAuthentication}