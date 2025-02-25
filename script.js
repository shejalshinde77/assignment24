const decrementBtn = document.querySelector('.decrement-btn');
const incrementBtn = document.querySelector('.increment-btn');
const quantityInput = document.querySelector('.quantity-input');

let quantity = 1;

decrementBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
    }
});

incrementBtn.addEventListener('click', () => {
    quantity++;
    quantityInput.value = quantity;
});
