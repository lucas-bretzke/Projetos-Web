const itemInput = document.getElementById('item-input');
const shoppingList = document.getElementById('shopping-list');
const alreadyPurchased = document.getElementById('already-purchased');
const modal = document.querySelector('.modal');
const modalRemoveItem = document.querySelector('.modal-remove-item');

let itemToRemove = null;

function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const txtQuantity = document.createElement('p');
        const btnIncrement = document.createElement('button');
        const btnDecrement = document.createElement('button');
        const btnRemoveItem = document.createElement('button');
        const btnConfirmPurchase = document.createElement('button');

        p.textContent = itemText;
        txtQuantity.textContent = `1`;
        btnIncrement.textContent = '+';
        btnDecrement.textContent = '-';
        btnRemoveItem.textContent = 'X';
        btnConfirmPurchase.textContent = '✅';

        btnIncrement.classList.add('increment');
        btnDecrement.classList.add('decrement');
        btnRemoveItem.classList.add('remove');
        btnConfirmPurchase.classList.add('confirm');

        btnIncrement.onclick = () => {
            const currentQuantity = parseInt(txtQuantity.textContent);
            txtQuantity.textContent = `${currentQuantity + 1}`;
        };

        btnDecrement.onclick = () => {
            const currentQuantity = parseInt(txtQuantity.textContent);
            if (currentQuantity > 1) {
                txtQuantity.textContent = `${currentQuantity - 1}`;
            } else {
                shoppingList.removeChild(li);
            }
        };

        btnRemoveItem.onclick = () => showModalRemoveItem(li);

        btnConfirmPurchase.onclick = () => {
            shoppingList.removeChild(li);
            alreadyPurchased.appendChild(li);

            txtQuantity.textContent = `Quantidade: ${txtQuantity.textContent}`;
            li.removeChild(btnConfirmPurchase);
            li.removeChild(btnDecrement);
            li.removeChild(btnIncrement);
        };

        li.append(p, btnDecrement, txtQuantity, btnIncrement, btnRemoveItem, btnConfirmPurchase);

        shoppingList.appendChild(li);

        itemInput.value = '';
    }
}

function removeItem() {
    if (itemToRemove) {
        shoppingList.removeChild(itemToRemove);
        itemToRemove = null;
    }
    closeModalRemoveItem();
}

function showModalRemoveItem(item) {
    itemToRemove = item;
    modalRemoveItem.style.opacity = '1';
    modalRemoveItem.style.visibility = 'visible';
}

function closeModalRemoveItem() {
    modalRemoveItem.style.opacity = '0';
    modalRemoveItem.style.visibility = 'hidden';
    itemToRemove = null;
}

function clearlists() {
    shoppingList.innerHTML = '';
    alreadyPurchased.innerHTML = '';
    closeModal();
}

function showModal() {
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
}

function closeModal() {
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}