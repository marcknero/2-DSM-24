//add product
async function productAdd(event) {
  event.preventDefault();
 // console.log('chamando a função productAdd');
  
  const product = {
    formato: document.getElementById('formato').value,
    titulo: document.getElementById('titulo').value,
    artista: document.getElementById('artista').value,
    ano: document.getElementById('ano').value,
    genero: document.getElementById('genero').value,
    preco: document.getElementById('preco').value,
  };

  const response = await fetch('http://localhost:3000/products',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });

  const data = await response.json();
  //console.log('Livro cadastrado',data);

   //form cleaning if succeded
  document.getElementById('formProduct').reset();

  updateProductList();

}


//update product list
async function updateProductList() {
  
  const response = await fetch('http://localhost:3000/products');
  const products = await response.json();

  const list = document.getElementById('productsList');

  list.innerHTML = ''; //to clean the list

  products.forEach(product=>{
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      ${product.formato} - <strong>${product.titulo}</strong> - ${product.artista} - ${product.genero} - ${product.ano} - R$:${product.preco.toFixed(2)}
      <button class="btn btn-editar" onclick="updateProduct('${product._id}')">Editar</button>
      <button class="btn btn-excluir" onclick="deleteProduct('${product._id}')">Excluir</button>
    `;
    list.appendChild(div);
  });
};

//update Product
async function updateProduct(id) {
  const newFormato = prompt('insira o formato');
  const newAno = prompt('insira o novo ano de lancamneto');
  const newGenero = prompt('insira o novo Genero para este titulo');
  const newPreco = prompt('insira o novo preço para o produto');

  if(newFormato&&newGenero&&newAno&&newPreco){
    const updatedProduct = {
      formato: newFormato,
      ano: parseFloat(newAno),
      genero: newGenero,
      preco: parseFloat(newPreco)
    };

    await fetch(`http://localhost:3000/products/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });
    updateProductList();
  };
  };

  //delete Product
  async function deleteProduct(id) {
    if(confirm('Excluir este produto?')){
      await fetch(`http://localhost:3000/products/${id}`,{
        method: 'DELETE'
      });
      updateProductList();
    }
    
  };

//add event to the form
document.getElementById('formProduct').addEventListener('submit',productAdd);

window.onload = updateProductList;

