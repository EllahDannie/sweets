let cartCount = 0;
function addToCart(button) {
    // Change button text
    button.textContent = 'Added ✓';
    alert('Item added to cart!');
    // Add success styling
    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';
    // Disable the button to prevent multiple clicks
    button.disabled = true;
    // Update cart count
    cartCount++;
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.textContent = cartCount;
    }
}

