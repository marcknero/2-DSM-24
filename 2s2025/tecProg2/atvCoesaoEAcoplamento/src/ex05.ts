class AutenticacaoDeUsuario {
    usuarios: Map<string, string> = new Map();

    registrarUsuario(usuario: string, senha: string): void {
        if (this.usuarios.has(usuario)) {
            console.log(`Usuário "${usuario}" já registrado!`);
        } else {
            this.usuarios.set(usuario, senha);
            console.log(`Usuário "${usuario}" registrado com sucesso!`);
        }
    }

    autenticarUsuario(usuario: string, senha: string): boolean {
        if (!this.usuarios.has(usuario)) {
            return false; // usuário não existe
        }

        const senhaArmazenada = this.usuarios.get(usuario);
        return senhaArmazenada === senha; // true se senha correta, false se incorreta
    }
}

const autenticacao = new AutenticacaoDeUsuario(); 
autenticacao.registrarUsuario("alice", "senha123"); 
autenticacao.registrarUsuario("bob", "outrasenha"); 
 
const usuarioAutenticado = autenticacao.autenticarUsuario("alice", "senha123"); 
 
if(usuarioAutenticado){ 
    console.log("Usuário autenticado com sucesso!"); 
} else { 
    console.log("Falha na autenticação do Usuário!"); 
} 