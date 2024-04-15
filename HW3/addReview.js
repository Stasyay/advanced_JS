import { getReviews } from './storage.js';

const productEl = document.querySelector('.product');
const productReviewEl = document.querySelector('.product-review');
const btnAddReview = document.querySelector('.btn-add-review');
const errorMessageEl = document.querySelector('.error-message');

btnAddReview.addEventListener('click', () => {
    const product = productEl.value;
    const review = productReviewEl.value;

    const reviews = getReviews(product);

    if (product === '' || review === '') {
        errorMessageEl.textContent = 'Не все поля заполнены!';
        return;
    }
    reviews.push(review);
    localStorage.setItem(product, JSON.stringify(reviews));
    errorMessageEl.textContent = '';
});


