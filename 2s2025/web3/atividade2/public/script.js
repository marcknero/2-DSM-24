const API_URL = "http://localhost:3000/items";
const form = document.getElementById("form-items");
form.addEventListener("submit", saveItem)

//carregar clientes ao abirir a pagina
document.addEventListener("DOMContentLoaded", loadItems)

// Função para carregar clientes
async function loadItems() {
    const resp = await fetch(API_URL);
    const items = await resp.json();

    const list = document.getElementById("list-items");
    list.innerHTML = ""; // limpa list
    items.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
    <td>${item.name}</td>
    <td>R$${Number(item.price).toLocaleString('pt-br', { minimumFractionDigits: 2 })}</td>
    <td>
    <button onclick="updateItem('${item._id}','${item.name}','${item.price}')">Editar</button>
    <button onclick="deleteItem('${item._id}')">Excluir</button>
    </td>
    `
        list.appendChild(tr)
    });

    const total = items.reduce((sum, item) => sum + Number(item.price), 0);
    document.getElementById("total-price").textContent = `R$${total.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
}

//função salvar item ou salvar alterações
async function saveItem(e) {
    e.preventDefault();

    const id = document.getElementById("item-id").value;
    const name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    price = price.replace(',', '.');
    const priceNumber = Number(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
        alert("Por favor, informe um valor válido para o preço");
        return;
    }

    const item = { name, price: priceNumber };
    if (id) {
        //se encontrar o id, alterar o item (PUT)
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
    } else {
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        });
    }
    form.reset();
    loadItems();

}

//preencher formulario para edição do item
function updateItem(id, name, price) {
    document.getElementById("item-id").value = id;
    document.getElementById("name").value = name;
    document.getElementById("price").value = price;
}

//excluir item
async function deleteItem(id) {
    if (confirm("Deseja excluir este item? Esta ação é irreversível!!!")) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        loadItems();
    }
}


