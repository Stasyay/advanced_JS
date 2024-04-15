import { getReviews, delReview } from './storage.js';

const listProductsEl = document.querySelector('.list-products');

Object.keys(localStorage).forEach((product) => {

    const productReviewsEl = document.createElement('div');
    productReviewsEl.classList.add('product-reviews');
    listProductsEl.insertAdjacentElement("beforeend", productReviewsEl);

    productReviewsEl.insertAdjacentHTML('beforeend', `<div class="product"> <li class="productLi"> ${product} </li> <button class="btn-show-reviews">Показать отзывы</button></div>`)
      
    const reviewsEl = document.createElement('div');
    reviewsEl.classList.add('reviews');
    productReviewsEl.insertAdjacentElement("beforeend", reviewsEl);

    const allReviews =  getReviews(product);
    allReviews.forEach(review => {
        reviewsEl.insertAdjacentHTML('beforeend', `<div class="review"> <p class="product-review">${review}</p> <button class="btn-del-review"> удалить </button> </div>`)   
    });
});

const productReviewsEl = document.querySelectorAll('.product-reviews');

productReviewsEl.forEach(element => {
    const productLiEl = element.querySelector('.productLi');
    const btnShowReviewEl = element.querySelector('.btn-show-reviews');
    const reviewsEl = element.querySelector('.reviews');
    
    const reviewEl = element.querySelectorAll('.review');

    btnShowReviewEl.addEventListener('click', () => {

        if (btnShowReviewEl.innerHTML === 'Показать отзывы') {
            btnShowReviewEl.innerHTML = 'Скрыть отзывы';
            reviewsEl.style.display = 'block';

            reviewEl.forEach(element => {
                const btnDelReviewEl = element.querySelector('.btn-del-review');                
                let countEl = reviewEl.length

                btnDelReviewEl.addEventListener('click', () =>{
                    const product = productLiEl.textContent.trim()
                    const review = element.children[0].textContent
                    let delEl = delReview(product, review)
                    
                 if (delEl === undefined) {
                    btnShowReviewEl.parentElement.remove();
                    element.remove();
                    } 
                element.remove();                   
                });              
            });
                 
        } else {
            btnShowReviewEl.innerHTML = 'Показать отзывы'
            reviewsEl.style.display = 'none';
        }       
    });
});