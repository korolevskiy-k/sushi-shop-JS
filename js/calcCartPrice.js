function calcCartPrice() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceText = document.querySelector('.total-price');
    let totalPrice = 0;
    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]').innerText;
        const priceEl = item.querySelector('.price__currency').innerText;
        const currentPrice = parseInt(amountEl) * parseInt(priceEl);
        totalPrice += currentPrice;
    })   
    totalPriceText.innerText = totalPrice;
}