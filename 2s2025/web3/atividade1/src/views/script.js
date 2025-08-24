// ...existing code...
// Helper functions
async function fetchJSON(url, options = {}) {
	const res = await fetch(url, options);
	if (!res.ok) throw new Error(await res.text());
	return res.json();
}

// Pessoa CRUD
const formPessoa = document.getElementById('formPessoa');
const listaPessoas = document.getElementById('listaPessoas');
const telefonePessoaId = document.getElementById('telefonePessoaId');
const associacaoPessoaId = document.getElementById('associacaoPessoaId');

async function loadPessoas() {
	const pessoas = await fetchJSON('/pessoas');
	listaPessoas.innerHTML = '';
	telefonePessoaId.innerHTML = '';
	associacaoPessoaId.innerHTML = '';
	pessoas.forEach(p => {
		const li = document.createElement('li');
		li.textContent = `${p.nome} (${p.email})`;
		li.innerHTML += ` <button onclick="deletePessoa(${p.idPessoa})">Excluir</button>`;
		listaPessoas.appendChild(li);
		// For selects
		const opt1 = document.createElement('option');
		opt1.value = p.idPessoa;
		opt1.textContent = p.nome;
		telefonePessoaId.appendChild(opt1);
		const opt2 = opt1.cloneNode(true);
		associacaoPessoaId.appendChild(opt2);
	});
}

formPessoa.onsubmit = async e => {
	e.preventDefault();
	const nome = document.getElementById('pessoaNome').value;
	const email = document.getElementById('pessoaEmail').value;
	await fetchJSON('/pessoas', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ nome, email })
	});
	formPessoa.reset();
	loadPessoas();
};

async function deletePessoa(id) {
	await fetch(`/pessoas/${id}`, { method: 'DELETE' });
	loadPessoas();
	loadTelefones();
	loadAssociacoes();
}

// Carro CRUD
const formCarro = document.getElementById('formCarro');
const listaCarros = document.getElementById('listaCarros');
const associacaoCarroId = document.getElementById('associacaoCarroId');

async function loadCarros() {
	const carros = await fetchJSON('/carros');
	listaCarros.innerHTML = '';
	associacaoCarroId.innerHTML = '';
	carros.forEach(c => {
		const li = document.createElement('li');
		li.textContent = `${c.modelo} (${c.marca}, ${c.ano})`;
		li.innerHTML += ` <button onclick="deleteCarro(${c.idCarro})">Excluir</button>`;
		listaCarros.appendChild(li);
		// For select
		const opt = document.createElement('option');
		opt.value = c.idCarro;
		opt.textContent = c.modelo;
		associacaoCarroId.appendChild(opt);
	});
}

formCarro.onsubmit = async e => {
	e.preventDefault();
	const modelo = document.getElementById('modelo').value;
	const marca = document.getElementById('marca').value;
	const ano = parseInt(document.getElementById('ano').value);
	await fetchJSON('/carros', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ modelo, marca, ano })
	});
	formCarro.reset();
	loadCarros();
};

async function deleteCarro(id) {
	await fetch(`/carros/${id}`, { method: 'DELETE' });
	loadCarros();
	loadAssociacoes();
}

// Telefone CRUD
const formTelefone = document.getElementById('formTelefone');
const listaTelefones = document.getElementById('listaTelefones');

async function loadTelefones() {
	// For demo, fetch all pessoas and their telefones
	const pessoas = await fetchJSON('/pessoas');
	listaTelefones.innerHTML = '';
	pessoas.forEach(async p => {
		// You may want to create a dedicated endpoint for telefones
		// For now, fetch by pessoaId
		// Not implemented: list telefones by pessoa
	});
	// For simplicity, fetch all telefones
	const telefones = await fetchJSON('/telefones');
	telefones.forEach(t => {
		const li = document.createElement('li');
		li.textContent = `Pessoa ${t.pessoaId}: ${t.numero}`;
		li.innerHTML += ` <button onclick="deleteTelefone(${t.telefoneId})">Excluir</button>`;
		listaTelefones.appendChild(li);
	});
}

formTelefone.onsubmit = async e => {
	e.preventDefault();
	const pessoaId = document.getElementById('telefonePessoaId').value;
	const numero = document.getElementById('telefoneNumero').value;
	await fetchJSON('/telefones', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ pessoaId, numero })
	});
	formTelefone.reset();
	loadTelefones();
};

async function deleteTelefone(id) {
	await fetch(`/telefones/${id}`, { method: 'DELETE' });
	loadTelefones();
}

// Associação Pessoa-Carro CRUD
const formAssociacao = document.getElementById('formAssociacao');
const listaAssociacoes = document.getElementById('listaAssociacoes');

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

formAssociacao.onsubmit = async e => {
	e.preventDefault();
	const pessoaId = document.getElementById('associacaoPessoaId').value;
	const carroId = document.getElementById('associacaoCarroId').value;
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

// Initial load
window.onload = () => {
	loadPessoas();
	loadCarros();
	loadTelefones();
	loadAssociacoes();
};
const API_URL = "/tasks";
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

