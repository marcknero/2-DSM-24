// Frontend adapted to "Eventos" (campos: title, description, location, value, date).
const API_BASE = '/items/'; // usa as rotas definidas em src/controllers/itemsController.ts
const form = document.getElementById('eventForm');
const titleInput = document.getElementById('title');
const descInput = document.getElementById('description');
const valueInput = document.getElementById('value');
const dateInput = document.getElementById('date');
const locationInput = document.getElementById('location');
const eventsList = document.getElementById('eventsList');
const totalEl = document.getElementById('total');
const loadingEl = document.getElementById('loading');
const emptyEl = document.getElementById('empty');

function showLoading(show){
  loadingEl.classList.toggle('hidden', !show);
}

function formatCurrency(value){
  return new Intl.NumberFormat('pt-BR', { style:'currency', currency:'BRL' }).format(value || 0);
}

async function api(path, opts){
  try {
    const res = await fetch(path, opts);
    if(!res.ok) throw new Error('status ' + res.status);
    return await res.json();
  } catch (e) {
    console.error('API error', e);
    throw e;
  }
}

async function fetchEvents(){
  return api(API_BASE);
}

function computeTotal(items){
  return (items || []).reduce((s, it) => s + (parseFloat(it.value) || 0), 0);
}

function renderEmpty(show){
  emptyEl.classList.toggle('hidden', !show);
}

function renderEvents(items){
  eventsList.innerHTML = '';
  if(!items || items.length === 0) { renderEmpty(true); return; }
  renderEmpty(false);

  items.forEach(it=>{
    const li = document.createElement('li');
    li.className = 'expense-item';

    const left = document.createElement('div');
    left.className = 'expense-left';
    const title = document.createElement('div');
    title.className = 'expense-desc';
    title.textContent = it.title || '(sem título)';

    const desc = document.createElement('div');
    desc.className = 'expense-desc-detail';
    desc.textContent = it.description || '';

    const meta = document.createElement('div');
    meta.className = 'expense-meta';
    const dateStr = it.date ? new Date(it.date).toLocaleDateString() : '';
    meta.textContent = `${it.location || ''} ${dateStr ? '• ' + dateStr : ''}`;

    left.appendChild(title);
    if(desc.textContent) left.appendChild(desc);
    left.appendChild(meta);

    const right = document.createElement('div');
    right.className = 'expense-right';
    const amount = document.createElement('div');
    amount.className = 'expense-amount';
    amount.textContent = formatCurrency(parseFloat(it.value) || 0);

    const btnEdit = document.createElement('button');
    btnEdit.className = 'small-btn btn-blue';
    btnEdit.textContent = 'Alterar';
    btnEdit.onclick = ()=> editEvent(it);

    const btnDel = document.createElement('button');
    btnDel.className = 'small-btn btn-red';
    btnDel.textContent = 'Excluir';
    btnDel.onclick = ()=> deleteEvent(it._id);

    right.appendChild(amount);
    right.appendChild(btnEdit);
    right.appendChild(btnDel);

    li.appendChild(left);
    li.appendChild(right);
    eventsList.appendChild(li);
  });
}

async function load(){
  showLoading(true);
  try {
    const items = await fetchEvents();
    renderEvents(items);
    const total = computeTotal(items);
    totalEl.textContent = formatCurrency(total || 0);
  } catch (e){
    console.error(e);
  } finally {
    showLoading(false);
  }
}

form.addEventListener('submit', async (ev)=>{
  ev.preventDefault();
  const payload = {
    title: titleInput.value.trim(),
    description: descInput.value.trim(),
    value: parseFloat(valueInput.value) || 0,
    date: dateInput.value ? new Date(dateInput.value).toISOString() : new Date().toISOString(),
    location: locationInput.value.trim()
  };
  try {
    await api(API_BASE, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    form.reset();
    titleInput.focus();
    await load();
    alert('Evento cadastrado com sucesso');
  } catch {
    alert('Erro ao cadastrar evento');
  }
});

async function deleteEvent(id){
  if(!confirm('Confirmar exclusão?')) return;
  try {
    await api(`${API_BASE}${id}`, { method: 'DELETE' });
    await load();
    alert('Evento excluido com sucesso');
  } catch {
    alert('Erro ao excluir');
  }
}

async function editEvent(item){
  const newTitle = prompt('Título', item.title);
  if(newTitle === null) return;
  const newDesc = prompt('Descrição', item.description);
  if(newDesc === null) return;
  const newLocation = prompt('Local', item.location);
  if(newLocation === null) return;
  const newValue = prompt('Valor (R$)', item.value);
  if(newValue === null) return;
  const newDate = prompt('Data (YYYY-MM-DD)', item.date ? item.date.slice(0,10) : '');

  const payload = {
    title: newTitle,
    description: newDesc,
    location: newLocation,
    value: parseFloat(newValue) || 0,
    date: newDate ? new Date(newDate).toISOString() : item.date
  };

  try {
    await api(`${API_BASE}${item._id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    await load();
    alert('Evento atualizado com sucesso');
  } catch {
    alert('Erro ao atualizar');
  }
}

// inicial
load();