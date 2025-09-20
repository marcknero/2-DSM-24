// Função para cadastrar livros
async function cadastrarLivros(event){
    event.preventDefault();

    const livro = {
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        ano: document.getElementById('ano').value
    };

    const response = await fetch('http://localhost:3000/livros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livro)
    });

    const data = await response.json();
    console.log('Livros cadastrado:', data);
    
    // Clear form after successful submission
    document.getElementById('formLivro').reset();
    
    atualizarListaDeLivros();
};

// Função para atualizar a lista de livros
async function atualizarListaDeLivros(){
    const response = await fetch('http://localhost:3000/livros');
    const livros = await response.json();

    // Fix: Use the correct element ID from HTML
    const lista = document.getElementById('listaLivros');

    // Fix: Use the correct variable name
    lista.innerHTML = ''; //limpa lista antes de atualizar

    livros.forEach(livro => {
        const div = document.createElement('div');
        div.className = 'livro';
        div.innerHTML = `
        <strong>${livro.titulo}:</strong> - ${livro.autor} (${livro.ano})
        <button class="btn btn-editar" onclick="editarLivro('${livro._id}')">Alterar</button>
        <button class="btn btn-excluir" onclick="excluirLivro('${livro._id}')">Excluir</button>
        `;
        lista.appendChild(div);
    });
};

// Função para editar livros
async function editarLivro(id){
    const novoTitulo = prompt('Novo título:');
    const novoAutor = prompt('Novo autor:');
    const novoAno = prompt('Novo ano:');

    // Fix: Move livroAtualizado outside the if block and add proper validation
    if(novoTitulo && novoAutor && novoAno){    
        const livroAtualizado = {
            titulo: novoTitulo,
            autor: novoAutor,
            ano: parseInt(novoAno)
        };

        await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livroAtualizado)
        });

        atualizarListaDeLivros();
    }
};

// Função para excluir livros
async function excluirLivro(id){
    if(confirm('Tem certeza que deseja excluir este livro?')){
        await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'DELETE'
        });

        atualizarListaDeLivros();
    }
};

// Adiciona evento ao formulário
document.getElementById('formLivro').addEventListener('submit', cadastrarLivros);

//carrega a lista de livros ao carregar a página
window.onload = atualizarListaDeLivros;