# NLW Valoriza

<img src="https://img.icons8.com/color/240/000000/nodejs.png"/>

## Projeto praiseAPI

<b>Aplicação que  possibilita a interação de pessoas, através de elogios.<br/> Você usuário envia um elogio para outro.<br/> Foii utilizado as tecnologias Node, ORM(typeorm), express, typescript, SQLite.<br/>
APLICAÇÃO DESENVOLVIDA NO NEXT LEVEL WEEK.</b>

### TechS 
- Express
- Banco de Dados
- Typescript

## Regras de negócio

 - Cadastro de Usuario.
   - Não é Permitido cadastrar mais de um Usuario com o mesmo E-MAIL.
   - Não é permitido cadastrar sem Usuario sem E-MAIL.
 - Cadastro de Tags
   - Não é Permitido ter Tags Duplicadas 
   - Não é permitido Tags sem nome
   -  Não é Permitido Cadastro de Tags de usuarios Que não são Administradores
 - Cadastro de Elogios
   - Não é Permitido Cadastrar um Elogio para si mesmo
   - Não permitido Cadastrar elogios para usuarios invalidos (Não Cadastrados)