// Inicializa el carrito
let cart = [];

// Función para agregar un producto al carrito
function addToCart(productName, price) {
    // Verifica si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // Si ya existe, incrementa la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si no existe, agrégalo al carrito
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Muestra una notificación de que se ha agregado el producto
    alert(`${productName} agregado al carrito.`);
}

// Función para mostrar el carrito
function showCart() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let cartContent = "Productos en el carrito:\n\n";
    let total = 0;

    cart.forEach(item => {
        cartContent += `${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });

    cartContent += `\nTotal: $${total}`;
    alert(cartContent);
}

// Función para eliminar un producto del carrito
function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);

    if (productIndex !== -1) {
        cart[productIndex].quantity -= 1;

        if (cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1); // Elimina el producto si la cantidad es 0
        }

        alert(`${productName} eliminado del carrito.`);
    } else {
        alert(`${productName} no está en el carrito.`);
    }
}

// Función para simular la compra
function checkout() {
    if (cart.length === 0) {
        alert("El carrito está vacío. No puedes realizar la compra.");
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    alert(`Compra realizada. Total a pagar: $${total}`);
    cart = []; // Vacía el carrito después de la compra
}
