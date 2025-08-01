let inventory = [];

function addItem() {
  const name = document.getElementById("name").value;
  const qty = parseInt(document.getElementById("qty").value);
  const price = parseFloat(document.getElementById("price").value);

  if (!name || qty <= 0 || price <= 0) {
    alert("Enter valid item, quantity, and price.");
    return;
  }

  const item = { name, qty, price };
  inventory.push(item);
  renderInventory();
  clearFields();
}

function renderInventory() {
  const tbody = document.getElementById("inventoryBody");
  tbody.innerHTML = "";
  inventory.forEach((item, index) => {
    const row = `<tr>
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${item.price}</td>
      <td>${(item.qty * item.price).toFixed(2)}</td>
      <td><button onclick="deleteItem(${index})">Delete</button></td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function deleteItem(index) {
  inventory.splice(index, 1);
  renderInventory();
}

function clearFields() {
  document.getElementById("name").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("price").value = "";
}
