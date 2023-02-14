function calcCartPriceAndDelivery() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceText = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartdeliveryEl = document.querySelector('[data-cart-delivery]');
    let totalPrice = 0;
    cartItems.forEach(function(item) {
        const amountEl = item.querySelector('[data-counter]').innerText;
        const priceEl = item.querySelector('.price__currency').innerText;
        const currentPrice = parseInt(amountEl) * parseInt(priceEl);
        totalPrice += currentPrice;
    })   
    totalPriceText.innerText = totalPrice;
    if (totalPrice > 0) {
        cartdeliveryEl.classList.remove('none');
    } else {
        cartdeliveryEl.classList.add('none');
    }
    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
}