let cart = [];

// Función para añadir productos al carrito
function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCartDisplay();
}

// Función para redirigir a la página del carrito
function redirectToCart() {
    window.location.href = "cart.html";
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.innerHTML = ''; // Limpia el contenido actual del carrito

    let totalItems = 0;
    let totalAmount = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalAmount += item.quantity * item.price;

        // Crear el elemento de cada producto en el carrito
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} x ${item.quantity} - $${(item.quantity * item.price).toFixed(2)}</span>
            <button onclick="decreaseQuantity('${item.name}')">-</button>
            <button onclick="increaseQuantity('${item.name}')">+</button>
            <button onclick="removeFromCart('${item.name}')">Eliminar</button>
        `;

        cartDropdown.appendChild(cartItem);
    });

    cartCount.innerText = totalItems;
    const cartTotal = document.createElement('div');
    cartTotal.classList.add('cart-total');
    cartTotal.innerHTML = `Total: $${totalAmount.toFixed(2)}`;
    cartDropdown.appendChild(cartTotal);
}

// Función para mostrar/ocultar el dropdown del carrito
function toggleCart() {
    const cartDropdown = document.getElementById('cartDropdown');
    cartDropdown.classList.toggle('active');
}

// Función para aumentar la cantidad de un producto
function increaseQuantity(name) {
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity++;
    }
    updateCartDisplay();
}

// Función para disminuir la cantidad de un producto
function decreaseQuantity(name) {
    const product = cart.find(item => item.name === name);
    if (product) {
        if (product.quantity > 1) {
            product.quantity--;
        } else {
            removeFromCart(name);
        }
    }
    updateCartDisplay();
}

// Función para eliminar un producto del carrito
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartDisplay();
}
