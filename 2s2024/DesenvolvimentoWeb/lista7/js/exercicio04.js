function exer4s(){
    const paragrafo = document.createElement('p');
    paragrafo.textContent = document.querySelector('#entrada').value;
    

    document.querySelector('#saida').appendChild(paragrafo)
}

function exer4(){
    entrada = document.querySelector('#entrada').value;
    const p = document.createElement('p');
    const paragrafo = document.createTextNode(entrada);
    document.querySelector('#saida').appendChild(p)
    p.appendChild(paragrafo)
}