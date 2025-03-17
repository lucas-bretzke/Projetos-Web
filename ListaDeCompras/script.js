const itemInput = document.getElementById('item-input');
const shoppingList = document.getElementById('shopping-list');
const alreadyPurchased = document.getElementById('already-purchased');

function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const btnRemoveItem = document.createElement('button');
        const txtQuantity = document.createElement('p');
        const btnIncrement = document.createElement('button');
        const btnDecrement = document.createElement('button');
        const confirmationButton = document.createElement('button');

        btnIncrement.textContent = '+';
        btnDecrement.textContent = '-';
        btnRemoveItem.textContent = 'X';
        confirmationButton.textContent = '✅';
        txtQuantity.textContent = `Quantidade: ${1}`;

        btnIncrement.onclick = () => txtQuantity.textContent = `Quantidade: ${parseInt(txtQuantity.textContent.split(': ')[1]) + 1}`;
        btnDecrement.onclick = () => {
            txtQuantity.textContent = `Quantidade: ${parseInt(txtQuantity.textContent.split(': ')[1]) - 1}`;
            if (parseInt(txtQuantity.textContent.split(': ')[1]) <= 0) {
                shoppingList.removeChild(li);
            }
        };
        btnRemoveItem.onclick = () => shoppingList.removeChild(li);

        p.textContent = itemText;
        li.append(p, txtQuantity, btnIncrement, btnDecrement, btnRemoveItem, confirmationButton);
        shoppingList.appendChild(li);
        itemInput.value = '';
    }
}