function addItem() {
    const itemInput = document.getElementById('item-input');
    const shoppingList = document.getElementById('shopping-list');
    const itemText = itemInput.value.trim();



    if (itemText !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const btn = document.createElement('button');
        const txtQuantity = document.createElement('span');
        btn.textContent = 'X';
        btn.onclick = function () {
            shoppingList.removeChild(li);
        };

        p.textContent = itemText;
        txtQuantity.textContent = `Quantidade: ${0}`;
        li.appendChild(p);
        li.appendChild(txtQuantity);
        li.appendChild(btn);
        shoppingList.appendChild(li);
        itemInput.value = '';
    }
}