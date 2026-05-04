const products = [
    { id: 1, name: 'Logo Suite', price: 400.00,  quantities: [1, 2, 3, 4, 5] },
    { id: 2, name: 'Brand Package', price: 800.00, quantities: [1, 2, 3, 4, 5] },
    { id: 3, name: 'Basic Website', price: 1000.00, quantities: [1, 2, 3, 4, 5] },
    { id: 4, name: 'Social Media Graphics Package:', price: 300.00, quantities: [1, 2, 3, 4, 5] },
    { id: 5, name: 'Print Design Package', price: 250.00, quantities: [1, 2, 3, 4, 5] },
];
//     { id: 4, name: 'Backpack', price: 39.00, colors: ['Black', 'Olive', 'Tan'], sizes: ['Standard'], quantities: [1, 2, 3, 4, 5] },
//     { id: 5, name: 'Water Bottle', price: 16.00, colors: ['Silver', 'Blue', 'Purple'], sizes: ['20 oz', '32 oz'], quantities: [1, 2, 3, 4, 5] },
// 	{ id: 6, name: 'Mug', price: 15.99, colors: ['Black', 'Maroon'], sizes: ['16 oz'], quantities:[1, 2, 3, 4, 5] }
// ];

function getCart() {
    const cartText = localStorage.getItem('cart');
    return cartText ? JSON.parse(cartText) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function findProduct(productId) {
    return products.find(p => p.id === productId);
}

function getCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function buildSelect(options, id, selectedValue) {
    let html = `<select id="${id}">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}

function buildCartSelect(options, selectedValue, index, fieldName) {
    let html = `<select onchange="changeOption(${index}, '${fieldName}', this.value)">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}