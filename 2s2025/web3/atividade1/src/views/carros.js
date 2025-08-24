// carros.js
async function fetchJSON(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

const formCarro = document.getElementById('formCarro');
const listaCarros = document.getElementById('listaCarros');
const searchCarroId = document.getElementById('searchCarroId');
const searchCarroResult = document.getElementById('searchCarroResult');

let listaVisivel = false;

async function loadCarros() {
  const carros = await fetchJSON('/carros');
  listaCarros.innerHTML = '';
  carros.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.modelo} (${c.marca}, ${c.ano}) [ID: ${c.idCarro}]`;
    li.innerHTML += ` <button onclick="deleteCarro(${c.idCarro})">Excluir</button>`;
    li.innerHTML += ` <button onclick="showUpdateCarro(${c.idCarro}, '${c.modelo}', '${c.marca}', ${c.ano})">Atualizar</button>`;
    listaCarros.appendChild(li);
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
  if (listaVisivel) loadCarros();
};

async function deleteCarro(id) {
  await fetch(`/carros/${id}`, { method: 'DELETE' });
  if (listaVisivel) loadCarros();
}

async function searchCarro() {
  const id = searchCarroId.value;
  if (!id) return;
  try {
    const carro = await fetchJSON(`/carros/${id}`);
    searchCarroResult.innerHTML = `<strong>${carro.modelo}</strong> (${carro.marca}, ${carro.ano}) [ID: ${carro.idCarro}]`;
    searchCarroResult.innerHTML += ` <button onclick="showUpdateCarro(${carro.idCarro}, '${carro.modelo}', '${carro.marca}', ${carro.ano})">Atualizar</button>`;
  } catch (err) {
    searchCarroResult.textContent = 'Carro não encontrado.';
  }
} // <-- This closing brace should be here

function showUpdateCarro(id, modelo, marca, ano) {
  document.getElementById('formUpdateCarro').style.display = '';
  document.getElementById('updateCarroId').value = id;
  document.getElementById('updateModelo').value = modelo;
  document.getElementById('updateMarca').value = marca;
  document.getElementById('updateAno').value = ano;
}
window.showUpdateCarro = showUpdateCarro;

document.getElementById('formUpdateCarro').onsubmit = async function(e) {
  e.preventDefault();
  const id = document.getElementById('updateCarroId').value;
  const modelo = document.getElementById('updateModelo').value;
  const marca = document.getElementById('updateMarca').value;
  const ano = parseInt(document.getElementById('updateAno').value);
  await fetchJSON(`/carros/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ modelo, marca, ano })
  });
  document.getElementById('formUpdateCarro').style.display = 'none';
  loadCarros();
};

document.getElementById('cancelUpdateCarro').onclick = function() {
  document.getElementById('formUpdateCarro').style.display = 'none';
};

document.getElementById('toggleListaCarros').onclick = () => {
  listaVisivel = !listaVisivel;
  listaCarros.style.display = listaVisivel ? '' : 'none';
  if (listaVisivel) loadCarros();
};
