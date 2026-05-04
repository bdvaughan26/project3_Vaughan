function displayProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    let html = '';
    products.forEach(product => {
        html += `<div class="product-card">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <label>Quantity</label>${buildSelect(product.quantities, 'qty-' + product.id, 1)}
            <button class="action-button primary-button" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
    productList.innerHTML = html;
}

function addToCart(productId) {
    const product = findProduct(productId);
    const quantity = parseInt(document.getElementById('qty-' + productId).value);

    const cart = getCart();
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, name: product.name, price: product.price, quantity });
    }

    saveCart(cart);
    alert(`${product.name} added to cart.`);
}

displayProducts();