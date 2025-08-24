// associacoes.js
async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

const formAssociacao = document.getElementById('formAssociacao');
const listaAssociacoes = document.getElementById('listaAssociacoes');
const pessoaSelect = document.getElementById('associacaoPessoaId');
const carroSelect = document.getElementById('associacaoCarroId');


let listaVisivel = false;

async function loadAssociacoes() {
  const associacoes = await fetchJSON('/pessoa_por_carro/associacoes');
  listaAssociacoes.innerHTML = '';
  associacoes.forEach(a => {
    const li = document.createElement('li');
    li.textContent = `Pessoa: ${a.pessoa?.nome || a.pessoaId} - Carro: ${a.carro?.modelo || a.carroId}`;
    li.innerHTML += ` <button onclick="deleteAssociacao(${a.id})">Excluir</button>`;
    listaAssociacoes.appendChild(li);
  });
}

async function loadSelects() {
  const pessoas = await fetchJSON('/pessoas');
  pessoaSelect.innerHTML = '';
  pessoas.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.idPessoa;
    opt.textContent = p.nome;
    pessoaSelect.appendChild(opt);
  });
  const carros = await fetchJSON('/carros');
  carroSelect.innerHTML = '';
  carros.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.idCarro;
    opt.textContent = c.modelo;
    carroSelect.appendChild(opt);
  });
}

formAssociacao.onsubmit = async e => {
  e.preventDefault();
  const pessoaId = pessoaSelect.value;
  const carroId = carroSelect.value;
  await fetchJSON('/pessoa_por_carro/associar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pessoaId, carroId })
  });
  formAssociacao.reset();
  loadAssociacoes();
};

async function deleteAssociacao(id) {
  await fetch(`/pessoa_por_carro/associacoes/${id}`, { method: 'DELETE' });
  loadAssociacoes();
}

document.getElementById('toggleListaAssociacoes').onclick = () => {
  listaVisivel = !listaVisivel;
  listaAssociacoes.style.display = listaVisivel ? '' : 'none';
  if (listaVisivel) loadAssociacoes();
};

window.onload = () => {
  listaAssociacoes.style.display = 'none';
  loadSelects();
};
