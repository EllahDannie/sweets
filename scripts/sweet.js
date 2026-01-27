let cartCount = 0;

function addToCart(button) {
    button.textContent = 'Added ✓';
    alert('Item added to cart!');

    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';

    button.disabled = true;

    cartCount++;
    const cartQuantityElement = document.querySelector('.js-cart-quantity');
    if (cartQuantityElement) {
        cartQuantityElement.textContent = cartCount;
    }


}

