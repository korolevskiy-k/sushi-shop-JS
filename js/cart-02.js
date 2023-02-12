const cartWrapper = document.querySelector('.cart-wrapper');
window.addEventListener('click', function(event) {
    // Если такой атрибут есть у объекта по которому кликнули
    if (event.target.hasAttribute('data-cart')) {
        // Ищем родителя карточку
        const card = event.target.closest('.card');
        // Собираем данные о карточке через атрибуты в объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
        // Проверяем есть ли товар в корзине: добавляем шаблон если нет, суммируем к существующему если есть
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]');
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
        } else {
            // Товара нет в корзине        
            // Подстановка данных в шаблон
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                    <div class="cart-item__top">
                                        <div class="cart-item__img">
                                            <img src="${productInfo.imgSrc}" alt="">
                                        </div>
                                        <div class="cart-item__desc">
                                            <div class="cart-item__title">${productInfo.title}</div>
                                            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                            <!-- cart-item__details -->
                                            <div class="cart-item__details">

                                                <div class="items items--small counter-wrapper">
                                                    <div class="items__control" data-action="minus">-</div>
                                                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                                                    <div class="items__control" data-action="plus">+</div>
                                                </div>

                                                <div class="price">
                                                    <div class="price__currency">${productInfo.price}</div>
                                                </div>

                                            </div>
                                            <!-- // cart-item__details -->

                                        </div>
                                    </div>
                                </div>`;
            // Отобразим товар в корзине 
            // Метод позволяет вставить разметку в элемент
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);                      
        }
        // Сброс счетчика после добавления в корзину
        card.querySelector('[data-counter]').innerText = 1;
        // Удаляем плашку "Корзина пуста"
        toggleCartStatus();  
        // Пересчет корзины
        calcCartPrice();
    }
})