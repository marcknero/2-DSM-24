#Modelo de banco de dados a ser adotado para o sistema:

Entre os sistemas Embedding e Referencing, focando na performace e praticidade do sistema, vamos utilizar o sistema Referencing.
O sistema Embedding é indicado para consultas mais rapidas, porem ele tem melhor performace com baixo volume de dados, uma vez que o sistema precisa carregar todo o documento do banco de dados para exibir os resultados, assim seria indicado no caso de uma oficina mecanica, que precisa armazenar a manutenção dos carros dos clientes, como uma carro de competição possui uma frequencia de manuteção maior, maior volume de trocas de peças e afins, acaba gerando um volume muito grande de dados a serem armazenados em um unico documento, fazendo que a diferença do tempo de carregamento entre o sistema Embedding e Reerencing nao seja tao significativa para os computadores convencionais. Assim o Referencing oferece performace similar com a ordanização dos dados de forma mais estruturada, e evitando repetições e a criação de documentos muito extensos.

para estrutura do modelo utilizaremos as seguintes tabelas

Usuario
_id objectID
nome String required
email String required
permissao string required
senha String required

carro
_id ObjectID
num_patrimonio String required
modelo String required
especificações String required
historico_ids Array of ObjectID

historico_manutencao
_id ObjectID
carro_id ObjectID required
data Date required
tipo_servico String Required
detalhes String Required
pecas Array required
tecnico String Required
custo Number required

Telemetria:
_id ObjectID
carro_id ObjectID required
corrida_id ObjectID required
oleo_motor String required
quentidade_oleo_motor number required
pneu String required
pressao_pneu String required
