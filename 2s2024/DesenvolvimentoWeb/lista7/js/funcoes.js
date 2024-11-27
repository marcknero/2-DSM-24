function exer1() {
    console.log("Carregou");
  };
  
// exercicio 02
function exer2() {
  // obtém o value do campo entrada
  entrada = document.querySelector("#entrada").value;
  // seta o corpo da div saida
  document.querySelector("#saida").innerText = entrada;
};

// exercicio 03
function exer3(){
  entrada = document.querySelector("#entrada").value;
  document.querySelector("#saida").value = entrada;
};

//exercicio 04
function exer4(){
  const p = document.createElement('p');
  const paragrafo = document.createTextNode("Marcos Vincius");
  document.querySelector('#saida').appendChild(p)
  p.appendChild(paragrafo)
};

// exercicio 05
    //função alternativa, feita sem o createTextNode()
    function exer5s(){
      const paragrafo = document.createElement('p');
      paragrafo.textContent = document.querySelector('#entrada').value;
      

      document.querySelector('#saida').appendChild(paragrafo)
    };

// exercicio 05
    function exer5(){
  entrada = document.querySelector('#entrada').value;
  const p = document.createElement('p');
  const paragrafo = document.createTextNode(entrada);
  document.querySelector('#saida').appendChild(p)
  p.appendChild(paragrafo)
  document.querySelector('#entrada').value = '';
  document.getElementById('entrada').focus()
};

//exercicio 06
function exer6(){
  var entrada = document.querySelector('#entrada').value;
  const p = document.createElement('p');
  const paragrafo = document.createTextNode(entrada);
  document.querySelector('#saida').appendChild(p);
  
  p.appendChild(paragrafo);

  document.querySelector('#entrada').value = '';
  document.getElementById('entrada').focus();
};