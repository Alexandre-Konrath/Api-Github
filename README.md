<h1 align="center"> Api do GitHub</h1>

<br />

## Descrição do projeto  
  Meu primeiro projeto que faço usando uma api externa, foi desenvolvido dentro do curso da dev Samurai - Fundamentos do React - No inínio  
  achava que mexer com api era uma coisa muito difícil, que era um bicho de sete cabeças, mas na verdade não é tanto assim, não deixa de ser  
  um pouco complexo mas é tranquilo. A grande maioria das apis tem um bom suporte de cocumentações e vários videos no youtube ja feitos  
  explicando, então deixa o processo mais tranquilo de se desenvolver.

<br />

## O que foi aprendido
  A unica limitação da api que descobri é que ela tem um limite de 1.000 solicitações por dia, isso que dizer que cada f5 que a pagina der é  
  uma solicitação, acredito que eu não cheguei a fazer todas essas solicitações por dia. Mas antes de fazer a requisição dos dados direto da  
  api mesmo usei o json-server, ja tinha usado uma vez, então foi de boas.  
  O que foi novo para mim foi criar multiplas rotas dentro do json-server, primeiramente não sabia que isso era possível pesquisei um pouco e  
  fui codar primeiro no parte de scrips você tem que mudar e deixar assim  
  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ- `"json-server": "json-server --watch db.json --routes routes.json --id login --port 5000"` -   
 <br /> 
 <br /> 
 
 ### Vou explicar capa parte deste script
 
 <br /> 
 
| script | Explicação |
|--------|-------------|  
| ***"json-server"*** | Comando para executar o json-server. |
| ***--watch db.json*** | Especifica o arquivo db.json que o json-server irá observar. Esse arquivo contém os dados que a API irá expor. |
| ***--routes routes.json*** |  Especifica um arquivo routes.json para definir rotas customizadas. |
| ***--id login*** | Define o campo login como identificador único (normalmente é id) |
| ***--port 5000*** | Define a porta onde o servidor irá rodar (no caso, a porta 5000). |

 <br /> 
 <br /> 

 ### E para que o json server acesse essas rotas customizadas você precisa criar um arquivo para mapear essas rotas
ㅤㅤㅤㅤ{  
ㅤㅤㅤㅤㅤ"/users/:login": "/users/:login",  
ㅤㅤㅤㅤㅤ"/users/:login/repos/*": "/repos/:login"  
ㅤㅤㅤㅤ}  

<br />

| script | Esxplicação |  
|--------|-------------|  
| ***/users/:login*** | Mapeia uma rota para retornar um usuário específico pelo campo login. Se você acessar /users/user1, o json-server retornará os dados do user1 |  
| ***/users/:login/repos/*** | Quando você acessa /users/user1/repos, o json-server buscará repositórios que tenham o campo login igual a user1 |  

<br />



### - Pesquisa o nome do usuario para ver os repositórios dele
![Screenshot 2024-05-27 083141](https://github.com/Alexandre-Konrath/Api-Github/assets/160286787/59de55d7-297b-45e5-8e08-3f63bb2f4a7c)
![Screenshot 2024-05-27 083153](https://github.com/Alexandre-Konrath/Api-Github/assets/160286787/e0ddc60d-5335-45be-914a-49399ff9a9d5)

<br />

### - Rendeliza todos os dados que foram recuperados da API
![Screenshot 2024-05-27 083114](https://github.com/Alexandre-Konrath/Api-Github/assets/160286787/e9e74ae9-b91d-4216-b68f-cb2072063b2a)

<br />

### - Botão para filtrar por linguagem os repositórios 
![Screenshot 2024-05-27 083133](https://github.com/Alexandre-Konrath/Api-Github/assets/160286787/2026525c-e233-4e86-b93d-5f275c8c377c)
![Screenshot 2024-05-27 083127](https://github.com/Alexandre-Konrath/Api-Github/assets/160286787/03ed20cd-b135-4b81-81dd-b1440d61311a)

<br />

## Site totalmente responsivo
![Screenshot 2024-05-27 083027](https://github.com/Alexandre-Konrath/Api-Github/assets/160286787/6335d753-c7b1-4e5e-ae0c-282e4710cd49)
