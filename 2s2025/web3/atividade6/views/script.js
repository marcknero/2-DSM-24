// Frontend improved: loading, empty state, responsive, nicer UI.

const API_BASE = '/expenses';
const TOTAL_URL = `${API_BASE}/total`;
const form = document.getElementById('expenseForm');
const descInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const expensesList = document.getElementById('expensesList');
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

async function fetchExpenses(){
  return api(API_BASE);
}

async function fetchTotal(){
  try {
    const data = await api(TOTAL_URL);
    return data.total ?? 0;
  } catch {
    const all = await fetchExpenses();
    return all.reduce((s, it) => s + (parseFloat(it.amount) || 0), 0);
  }
}

function renderEmpty(show){
  emptyEl.classList.toggle('hidden', !show);
}

function renderExpenses(items){
  expensesList.innerHTML = '';
  if(!items || items.length === 0) { renderEmpty(true); return; }
  renderEmpty(false);

  items.forEach(it=>{
    const li = document.createElement('li');
    li.className = 'expense-item';

    const left = document.createElement('div');
    left.className = 'expense-left';
    const desc = document.createElement('div');
    desc.className = 'expense-desc';
    desc.textContent = it.description || '(sem descrição)';
    const meta = document.createElement('div');
    meta.className = 'expense-meta';
    meta.textContent = it.date ? new Date(it.date).toLocaleDateString() : '';

    left.appendChild(desc);
    left.appendChild(meta);

    const right = document.createElement('div');
    right.className = 'expense-right';
    const amount = document.createElement('div');
    amount.className = 'expense-amount';
    amount.textContent = formatCurrency(parseFloat(it.amount) || 0);

    const btnEdit = document.createElement('button');
    btnEdit.className = 'small-btn btn-blue';
    btnEdit.textContent = 'Alterar';
    btnEdit.onclick = ()=> editExpense(it);

    const btnDel = document.createElement('button');
    btnDel.className = 'small-btn btn-red';
    btnDel.textContent = 'Excluir';
    btnDel.onclick = ()=> deleteExpense(it._id);

    right.appendChild(amount);
    right.appendChild(btnEdit);
    right.appendChild(btnDel);

    li.appendChild(left);
    li.appendChild(right);
    expensesList.appendChild(li);
  });
}

async function load(){
  showLoading(true);
  try {
    const [items, total] = await Promise.all([fetchExpenses(), fetchTotal()]);
    renderExpenses(items);
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
    description: descInput.value.trim(),
    amount: parseFloat(amountInput.value) || 0,
    date: dateInput.value ? new Date(dateInput.value).toISOString() : new Date().toISOString()
  };
  try {
    await api(API_BASE, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    form.reset();
    descInput.focus();
    await load();
  } catch {
    alert('Erro ao cadastrar despesa');
  }
});

async function deleteExpense(id){
  if(!confirm('Confirmar exclusão?')) return;
  try {
    await api(`${API_BASE}/${id}`, { method: 'DELETE' });
    await load();
  } catch {
    alert('Erro ao excluir');
  }
}

async function editExpense(item){
  const newDesc = prompt('Descrição', item.description);
  if(newDesc === null) return;
  const newAmount = prompt('Valor (R$)', item.amount);
  if(newAmount === null) return;
  const newDate = prompt('Data (YYYY-MM-DD)', item.date ? item.date.slice(0,10) : '');

  const payload = {
    description: newDesc,
    amount: parseFloat(newAmount) || 0,
    date: newDate ? new Date(newDate).toISOString() : item.date
  };

  try {
    await api(`${API_BASE}/${item._id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    await load();
  } catch {
    alert('Erro ao atualizar');
  }
}

// inicial
load();