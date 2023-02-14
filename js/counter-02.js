// Прослушка на клик по всему окну
window.addEventListener('click', function(event) {
    // Проверяем клик строго по кнопке плюс или минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим ближайшего родителя
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Спускаемся вниз, ищем ребенка счетчик
        var counter = counterWrapper.querySelector('[data-counter]');
    }
    // target - элемент по которому прошел клик
    // dataset - работа с data атрибутом
    // action - значение атрибута data-action
    if (event.target.dataset.action === 'plus') {        
        counter.innerText++;
    }
    if (event.target.dataset.action === 'minus') {        
        if (parseInt(counter.innerText) > 1) {
            counter.innerText--;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            event.target.closest('.cart-item').remove();
            // Удаляем плашку "Корзина пуста"
            toggleCartStatus(); 
            // Пересчет корзины для обнуления
            calcCartPriceAndDelivery();
        }        
    }
    // Проверяем клики в корзине
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }


})