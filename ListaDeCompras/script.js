const ShoppingListApp = (() => {
    const itemInput = document.getElementById('item-input');
    const shoppingList = document.getElementById('shopping-list');
    const alreadyPurchased = document.getElementById('already-purchased');
    const modal = document.querySelector('.modal');
    const modalRemoveItem = document.querySelector('.modal-remove-item');

    let itemToRemove = null;

    const createElement = (tag, className, textContent = '') => {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        if (textContent) element.textContent = textContent;
        return element;
    };

    const addItem = () => {
        const itemText = itemInput.value.trim();
        if (!itemText) return;

        const li = createElement('li');
        const p = createElement('p', null, itemText);
        const txtQuantity = createElement('p', 'quantity', '1');
        const btnIncrement = createElement('button', 'increment', '+');
        const btnDecrement = createElement('button', 'decrement', '-');
        const btnRemoveItem = createElement('button', 'remove', 'X');
        const btnConfirmPurchase = createElement('button', 'confirm', '✅');

        // Eventos dos botões
        btnIncrement.onclick = () => updateQuantity(txtQuantity, 1);
        btnDecrement.onclick = () => updateQuantity(txtQuantity, -1, li);
        btnRemoveItem.onclick = () => showModalRemoveItem(li);
        btnConfirmPurchase.onclick = () => confirmPurchase(li, txtQuantity);

        li.append(p, btnDecrement, txtQuantity, btnIncrement, btnRemoveItem, btnConfirmPurchase);
        shoppingList.appendChild(li);

        itemInput.value = '';
    };

    const updateQuantity = (quantityElement, change, listItem = null) => {
        const currentQuantity = parseInt(quantityElement.textContent);
        const newQuantity = currentQuantity + change;

        if (newQuantity > 0) {
            quantityElement.textContent = `${newQuantity}`;
        } else if (listItem) {
            shoppingList.removeChild(listItem);
        }
    };

    const confirmPurchase = (listItem, quantityElement) => {
        shoppingList.removeChild(listItem);
        alreadyPurchased.appendChild(listItem);

        quantityElement.textContent = `Quantidade: ${quantityElement.textContent}`;
        listItem.querySelectorAll('button').forEach(button => button.remove());
    };

    const removeItem = () => {
        if (itemToRemove) {
            shoppingList.removeChild(itemToRemove);
            itemToRemove = null;
        }
        closeModalRemoveItem();
    };

    const showModalRemoveItem = (item) => {
        itemToRemove = item;
        toggleModal(modalRemoveItem, true);
    };

    const closeModalRemoveItem = () => {
        toggleModal(modalRemoveItem, false);
        itemToRemove = null;
    };

    const clearLists = () => {
        shoppingList.innerHTML = '';
        alreadyPurchased.innerHTML = '';
        toggleModal(modal, false);
    };

    const toggleModal = (modalElement, isVisible) => {
        modalElement.style.opacity = isVisible ? '1' : '0';
        modalElement.style.visibility = isVisible ? 'visible' : 'hidden';
    };

    return {
        addItem,
        removeItem,
        clearLists,
        showModal: () => toggleModal(modal, true),
        closeModal: () => toggleModal(modal, false),
        closeModalRemoveItem,
    };
})();

// Eventos globais
document.querySelector('.add-item button').onclick = ShoppingListApp.addItem;
document.querySelector('.modal .close').onclick = ShoppingListApp.closeModal;
document.querySelector('.modal-remove-item .close').onclick = ShoppingListApp.closeModalRemoveItem;
document.querySelector('footer button').onclick = ShoppingListApp.showModal;