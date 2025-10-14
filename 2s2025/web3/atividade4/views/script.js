const el = id => document.getElementById(id);

async function searchCity() {
  const city = el('cityInput').value.trim();
  el('status').textContent = '';
  el('result').innerHTML = '';
  if (!city) { el('status').textContent = 'Digite uma cidade.'; return; }

  el('status').textContent = 'Buscando previsão...';
  try {
    const wRes = await fetch(`/consult?city=${encodeURIComponent(city)}`);
    if (!wRes.ok) {
      const err = await wRes.json();
      el('status').textContent = err.error || 'Erro ao buscar previsão';
      return;
    }
    const data = await wRes.json();
    renderResult(data);
    el('status').textContent = '';
  } catch (e) {
    console.error(e);
    el('status').textContent = 'Erro de rede ou servidor.';
  }
}

function renderResult(data) {
  const w = data.weather && data.weather[0] ? data.weather[0] : null;
  const icon = w ? `https://openweathermap.org/img/wn/${w.icon}@4x.png` : '';
  const name = data.name || '';
  const country = data.sys && data.sys.country ? data.sys.country : '';

  const card = document.createElement('div');
  card.className = 'card';

  const left = document.createElement('div');
  left.style.width = '120px';
  left.style.textAlign = 'center';
  if (icon) {
    const img = document.createElement('img');
    img.src = icon;
    img.alt = w ? w.description : '';
    left.appendChild(img);
  }

  const main = document.createElement('div');
  const h = document.createElement('h2');
  h.textContent = `${name}${country ? ', ' + country : ''}`;
  const temp = document.createElement('div');
  temp.style.fontSize = '28px';
  temp.style.fontWeight = '700';
  temp.textContent = data.main ? `${Math.round(data.main.temp)}°C` : '';
  const desc = document.createElement('div');
  desc.textContent = w ? w.description : '';

  main.appendChild(h);
  main.appendChild(temp);
  main.appendChild(desc);

  const details = document.createElement('div');
  details.className = 'details';
  details.innerHTML = `
    <div>Sensação: ${data.main ? data.main.feels_like + '°C' : ''}</div>
    <div>Umidade: ${data.main ? data.main.humidity + '%' : ''}</div>
    <div>Vento: ${data.wind ? data.wind.speed + ' m/s' : ''}</div>
  `;

  card.appendChild(left);
  card.appendChild(main);
  card.appendChild(details);

  el('result').appendChild(card);
}

function init() {
  el('searchBtn').addEventListener('click', searchCity);
  el('cityInput').addEventListener('keypress', e => { if (e.key === 'Enter') searchCity(); });
}

window.addEventListener('DOMContentLoaded', init);
