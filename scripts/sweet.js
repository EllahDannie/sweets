let cartCount = 0;
function addToCart(button) {
    button.textContent = 'Added ✓';
    alert('Item added to cart!');
<<<<<<< HEAD
    // Add success styling
    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';
    // Disable the button to prevent multiple clicks
    button.disabled = true;
    // Update cart count
=======

    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';

    button.disabled = true;

>>>>>>> 510d322664fd59fa31eb938410a95f011e2cd7f1
    cartCount++;
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.textContent = cartCount;
    }
}

