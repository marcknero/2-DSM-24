// pessoas.js
async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}


const formPessoa = document.getElementById('formPessoa');
const listaPessoas = document.getElementById('listaPessoas');
const searchPessoaId = document.getElementById('searchPessoaId');
const searchPessoaResult = document.getElementById('searchPessoaResult');
const pessoaTelefone = document.getElementById('pessoaTelefone');
const updatePessoaTelefone = document.getElementById('updatePessoaTelefone');


let listaVisivel = false;

async function loadPessoas() {
  const pessoas = await fetchJSON('/pessoas');
  listaPessoas.innerHTML = '';
  pessoas.forEach(p => {
    const telefone = p.telefones && p.telefones.length > 0 ? p.telefones[0].numero : '-';
    const li = document.createElement('li');
    li.textContent = `${p.nome} (${p.email}) [ID: ${p.idPessoa}]`;
    li.innerHTML += ` <strong>Telefone:</strong> ${telefone}`;
    li.innerHTML += ` <button onclick="deletePessoa(${p.idPessoa})">Excluir</button>`;
    listaPessoas.appendChild(li);
  });
}

formPessoa.onsubmit = async e => {
  e.preventDefault();
  const nome = document.getElementById('pessoaNome').value;
  const email = document.getElementById('pessoaEmail').value;
  const telefone = pessoaTelefone.value;
  // Create pessoa
  const pessoa = await fetchJSON('/pessoas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email })
  });
  // Add telefone if provided
  if (telefone) {
    await fetchJSON('/telefones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pessoaId: pessoa.idPessoa, numero: telefone })
    });
  }
  formPessoa.reset();
  loadPessoas();
};

async function deletePessoa(id) {
  await fetch(`/pessoas/${id}`, { method: 'DELETE' });
  loadPessoas();
}

async function searchPessoa() {
  const id = searchPessoaId.value;
  if (!id) return;
  try {
    const pessoa = await fetchJSON(`/pessoas/${id}`);
  const telefone = pessoa.telefones && pessoa.telefones.length > 0 ? pessoa.telefones[0].numero : '-';
  searchPessoaResult.innerHTML = `<strong>${pessoa.nome}</strong> (${pessoa.email}) [ID: ${pessoa.idPessoa}]`;
  searchPessoaResult.innerHTML += ` <strong>Telefone:</strong> ${telefone}`;
      searchPessoaResult.innerHTML += ` <button onclick="showUpdatePessoa(${pessoa.idPessoa}, '${pessoa.nome}', '${pessoa.email}', '${telefone}')">Atualizar</button>`;

// Show update form for pessoa (global)
function showUpdatePessoa(id, nome, email, telefone) {
  document.getElementById('formUpdatePessoa').style.display = '';
  document.getElementById('updatePessoaId').value = id;
  document.getElementById('updatePessoaNome').value = nome;
  document.getElementById('updatePessoaEmail').value = email;
  updatePessoaTelefone.value = telefone || '';
}

window.showUpdatePessoa = showUpdatePessoa;

      document.getElementById('formUpdatePessoa').onsubmit = async function(e) {
        e.preventDefault();
        const id = document.getElementById('updatePessoaId').value;
        const nome = document.getElementById('updatePessoaNome').value;
        const email = document.getElementById('updatePessoaEmail').value;
        const telefone = document.getElementById('updatePessoaTelefone').value;
        await fetchJSON(`/pessoas/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nome, email })
        });
        // Delete old telefone and add new one
        // Find telefone from pessoa.telefones in the list
        const pessoa = await fetchJSON(`/pessoas/${id}`);
        const tel = pessoa.telefones && pessoa.telefones.length > 0 ? pessoa.telefones[0] : null;
        if (tel) {
          await fetch(`/telefones/${tel.telefoneId}`, { method: 'DELETE' });
        }
        if (telefone) {
          await fetchJSON('/telefones', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pessoaId: id, numero: telefone })
          });
        }
        document.getElementById('formUpdatePessoa').style.display = 'none';
        loadPessoas();
      };

      document.getElementById('cancelUpdatePessoa').onclick = function() {
        document.getElementById('formUpdatePessoa').style.display = 'none';
      };
    } catch (err) {
      searchPessoaResult.textContent = 'Pessoa não encontrada.';
    }
}


document.getElementById('toggleListaPessoas').onclick = () => {
  listaVisivel = !listaVisivel;
  listaPessoas.style.display = listaVisivel ? '' : 'none';
  if (listaVisivel) loadPessoas();
};

window.onload = () => {
  listaPessoas.style.display = 'none';
};

