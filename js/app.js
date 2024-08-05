let cart = [];  
    let total = 0;  

    function addToCart(productName, productPrice) {  
        cart.push({ name: productName, price: productPrice });  
        total += productPrice;  
        updateCart();  
    }  

    function updateCart() {  
        const cartItems = document.getElementById('cart-items');  
        const totalElement = document.getElementById('total');  

        // Limpiar la lista de productos en el carrito  
        cartItems.innerHTML = '';  

        // Agregar cada producto al carrito  
        cart.forEach(item => {  
            const li = document.createElement('li');  
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;  
            cartItems.appendChild(li);  
        });  

        // Actualizar el total  
        totalElement.textContent = `Total: $${total.toFixed(2)}`;  
    }  