# Atividade 5 - Desenvolvimento Web II
        
## Objetivos:
- Desenvolver um servidor utilizando Node.js com o framework Express;
- Criar rotas HTTP para consulta de dados;
- Realizar acesso ao banco de dados PostgreSQL;
- Realizar requisições HTTP;
- Estilizar componentes com Styled Components;
- Implementar React Context para o gerenciamento de dados;
- Utilizar o hook useEffect para lidar com efeitos colaterais.


## Descrição da atividade:
Desenvolver uma aplicação servidora que retorne os dados de todos os concursos da Mega-Sena, armazenados 
previamente em um banco de dados PostgreSQL. O acesso aos dados deverá ser integrado na aplicação front-end 
desenvolvida na atividade anterior.

## Requisitos funcionais:
- A aplicação servidora deverá disponibilizar as seguintes rotas:
    - Rota para retornar o concurso mais recente da Mega-Sena;
    - Rota para retornar os dados de um concurso específico, identificado pelo número.
- A aplicação front-end deverá ser inicializada exibindo o concurso mais atual. O concurso deverá ser obtido no servidor.
- A aplicação front-end deverá ter um campo para o usuário fornecer o número do concurso desejado. 
- A aplicação front-end deverá exibir uma mensagem quando não existir o concurso fornecido pelo usuário. 

## Requisitos não-funcionais:
- A aplicação servidora deverá ser executada na porta 3001;
- Os parâmetros de conexão com o BD devem ser definidos estar no arquivo .env.
