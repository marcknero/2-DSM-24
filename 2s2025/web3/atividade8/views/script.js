const $ = id => document.getElementById(id);
const API = '/items/';
const els = {
  form: $('orderForm'),
  title: $('title'),
  desc: $('description'),
  value: $('value'),
  assignedTo: $('assignedTo'),
  sector: $('sector'),
  estComp: $('estimatedCompletionDate'),
  status: $('status'),
  priority: $('priority'),
  list: $('ordersList'),
  loading: $('loading'),
  empty: $('empty'),
  submitBtn: document.querySelector('#orderForm button[type="submit"]'),
  formTitle: document.querySelector('.form-panel h2')
};

let editingId = null, originalDate = null;

const show = v => els.loading && els.loading.classList.toggle('hidden', !v);
const fmt = v => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v||0);

async function req(path, opts){
  const r = await fetch(path, opts);
  if(!r.ok) throw new Error(r.statusText||r.status);
  return r.json();
}

function render(items){
  els.list.innerHTML = '';
  if(!items || items.length===0){ els.empty?.classList.remove('hidden'); return }
  els.empty?.classList.add('hidden');
  items.forEach(it=>{
    const setor = it.sector||it.setor||'';
    const created = it.date? new Date(it.date).toLocaleDateString() : '';
    const est = it.estimatedCompletionDate? new Date(it.estimatedCompletionDate).toLocaleDateString():'';
    const li = document.createElement('li');
    li.className='order-item';
    li.innerHTML = `
      <div class="order-left">
        <div class="order-desc">${(it.title||'(sem título)')}</div>
        ${it.description?`<div class="order-desc-detail">${it.description}</div>`:''}
        <div class="order-meta">${[it.assignedTo, setor, est?('Prazo: '+est):'', created?('Criada: '+created):''].filter(Boolean).join(' • ')}</div>
      </div>
      <div class="order-right">
        <div class="order-amount">${fmt(parseFloat(it.value)||0)}</div>
        <button class="small-btn btn-blue">Editar</button>
        <button class="small-btn btn-red">Excluir</button>
      </div>`;
    const [btnEdit, btnDel] = li.querySelectorAll('button');
    btnEdit.onclick = () => loadIntoForm(it);
    btnDel.onclick = () => del(it._id);
    els.list.appendChild(li);
  });
}

async function load(){ show(true); try{ render(await req(API)); }catch(e){console.error(e)} finally{ show(false) } }

function reset(){ els.form.reset(); editingId=null; originalDate=null; if(els.submitBtn) els.submitBtn.textContent='Criar OS'; if(els.formTitle) els.formTitle.textContent='Criar OS' }

function loadIntoForm(it){
  els.title.value = it.title||'';
  els.desc.value = it.description||'';
  els.value.value = it.value!=null?it.value:'';
  els.assignedTo.value = it.assignedTo||'';
  els.sector.value = it.sector||it.setor||'';
  els.status.value = it.status||'';
  els.priority.value = it.priority||'';
  els.estComp.value = it.estimatedCompletionDate? it.estimatedCompletionDate.slice(0,10):'';
  editingId = it._id; originalDate = it.date;
  els.submitBtn.textContent='Atualizar OS'; if(els.formTitle) els.formTitle.textContent='Editar OS'; window.scrollTo({top:0,behavior:'smooth'});
}

els.form?.addEventListener('submit', async e=>{
  e.preventDefault();
  const payload = {
    title: els.title.value.trim(),
    description: els.desc.value.trim(),
    status: els.status.value,
    priority: els.priority.value,
    assignedTo: els.assignedTo.value.trim(),
    sector: els.sector.value.trim(),
    estimatedCompletionDate: els.estComp.value? new Date(els.estComp.value).toISOString():undefined,
    value: parseFloat(els.value.value)||0
  };
  try{
    if(editingId){ if(originalDate) payload.date = originalDate; await req(API+editingId,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); alert('Ordem atualizada com sucesso') }
    else { await req(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}); alert('Ordem criada com sucesso') }
    reset(); await load();
  }catch(err){ console.error(err); alert('Erro ao salvar ordem') }
});

async function del(id){ if(!confirm('Confirmar exclusão?')) return; try{ await req(API+id,{method:'DELETE'}); await load(); alert('Ordem excluída com sucesso') }catch(e){console.error(e);alert('Erro ao excluir ordem')} }

load();