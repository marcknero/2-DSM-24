# Revisao P3

## Questão 1:
### a)

{
	"servidor":"web01",
	"ip":"192.168.10.15",
	"alertas":"[{
			"date-time":"2025-04-12",
			"alerta":"tentativa de acesso nao autorizada",
			"ip-origem":"192.168.11.04"
		}]"
}

### b)

Ao considerar que as pesquisas sao focadas em registros de um servidor, ou que os dados sejam armazenados em relação aos servidores e endereços de ip, o embedding gera maior rapidez ao encontrar o documento e recuperar todo o historico em uma unica pesquisa, fazendo com que o referencing nao seja o ideal, pois precisaria de varias consultas para apresentar o mesmo resultado, diminuindo a velocidade da pesquisa.


### c)

Se for necessario o controle de um fluxo de uso ou acesso, onde cada funcionario possui um nivel de acesso diferente, e cada acesso precisa ser monitorado para relatorios de invasão e afins, assim criar coleções separadas para funcionarios, logs de alerta, niveis de acesso e afins, seria mais vantajoso, pois concentraria muitos documentos que seriam repetidos se fosse usar embedding e otimiza a volume de dados gerado, outra situação que o referencing ajudaria bantante é quando há algum limitante de armazenamento, pois ajuda a reduzir o volume de dados, evitando repetições e otimizando o armazenamento disponivel.

## questao 2:

### a)

...{gravidade:{ $gte:4 }},
{ip_origem:{$regex:/^201\./}}

desta forma a pesquisa por regez procurará o prefixo 201.(incluindo o ponto)

### b)

Esta consulta limita o os documentos a um prefixo de ip expecifico e um tipo expecifico de alerta, fazendo com que se concentre nos resultados apenas os riscos de tentativa de longin, para serem avaliados individualmente, concentrando nesta falha e conferindo se houve e quando, para avaliar o responsavel e metodo utilizado.

## questao 3)

### a)

adicionar o operado $gt - para agrupar os scans de porta que forem maiores do que um

### b)

este relatorio mostra as maquinas e consequentemente usuarios que estejam tentnado escanear as portas da rede, procurando brechas e afins, fazendo com que tenha-se em mente o numero de tentativas por ip, e ordenar do maior para o menor, fazendo com que se analise os relatorios a partir do de maior risco para o de menor risco.

### c)

Encaminhar um alerta direcionado a tecnicos especificos para verificação de segurança, e bloquear o acesso do ip com numero especificos de tentativas da rede, ou a determinadas pastas ou Bancos de dados mais sensiveis

## Questao 4:

### a)

a rota representa um endpoint http, para alimentaçao do banco de dados, fazendo com que o sistema (API) cria um registro no banco
fazendo tambem a validação do formato e tipo dos dados no documento para garantir a integridade do banco de dados, no que tange ao formato do documeto, estando sempre com um dado oprigatorio presente

### b)

	primeiro eu referenciaria que sem a autenticação qualquer um com acesso e conhecimento especifico poderia adicionar dados nao autorizados e manipular o banco, ou dificultar a interpretação de problemas reais e falsos
	
	seguindo o mesma linha, pode-se sobrecarregar o sistema com inumeras insersoes automatizadas fazendo o sistema quebrar ou deixar de funcionar

### c)

mongodb://admin:Senha123@localhost:27017/alertas?retryWrites=true&w=majority

## Questao 5:

### a)

monbodump - cria um backup
mongorestore - restaura a partir de um backup

mongoose.connection.on recuera os status da conexão para o servidor ou aplicação, para checagem ou geração de logs de serviço.

### b)

a manutenção e backups garente ou evita que sejam perdidos dados de analise, essencias para auditorias ou processos de investigação e validação de ameaças

### c)

connected

disconnected

error
