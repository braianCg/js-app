let cart = [];

let productosDelLS = localStorage.getItem('productosCarrito') || [];

if(productosDelLS.length >= 1){
    alert("HEY! tu carrito tiene elementos");
}

let total = 0;

function addToCart(productName = "", productPrice = 0) {
    const producto = { 
        name: productName,
        price: productPrice
    }
    guardarLocalStorage(producto);
    cart.push(producto);
    total += productPrice;
    updateCart();
}

function guardarLocalStorage(producto) {
    localStorage.setItem('productosCarrito', JSON.stringify(producto));
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}  