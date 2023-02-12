let minus = document.querySelector('[data-action="minus"]');
let plus = document.querySelector('[data-action="plus"]');
let counter = document.querySelector('[data-counter]');

minus.addEventListener('click', function(){
    if (parseInt(counter.innerText) > 1) {
        counter.innerText--;
    } else return;
}) 
plus.addEventListener('click', function(){
    counter.innerText++;
}) 