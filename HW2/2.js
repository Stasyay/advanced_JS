"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв, как и продукт, должен иметь уникальный id, для упрощения, используем 
функцию `uid()`, она нам будет возвращать случайный id в виде небольшой строки.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

function uid() {
  return Math.random().toString(36).slice(2);
}

const initialData = [
  {
    id: uid(),
    product: "Apple iPhone 13",
    img: "img/iPhone13.jpeg",
    reviews: [
      {
        id: uid(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: uid(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    id: uid(),
    product: "Samsung Galaxy Z Fold 3",
    img: "img/samsungGalaxy.webp",
    reviews: [
      {
        id: uid(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    id: uid(),
    product: "Sony PlayStation 5",
    img: "img/sony.png",
    reviews: [
      {
        id: uid(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const contentEl = document.querySelector('.content');
initialData.forEach((product) => {

  const productEl = document.createElement('div');
  productEl.classList.add('product');
  productEl.dataset.id = product.id;
  console.log(productEl.dataset.id);
  contentEl.append(productEl);

  const imgEl = document.createElement('img');
  imgEl.classList.add('product__img');
  imgEl.src = product.img;
  imgEl.alt = product.product;
  productEl.append(imgEl);

  const h3El = document.createElement('h3');
  h3El.classList.add('product__title');
  h3El.textContent = product.product;
  productEl.append(h3El);

  const reviewsEl = document.createElement('div');
  reviewsEl.classList.add('product__reviews');
  productEl.append(reviewsEl);

  const ulEl = document.createElement('ul');
  ulEl.classList.add('product__reviews-list');
  reviewsEl.append(ulEl);

  for (let i = 0; i < product.reviews.length; i++) {
    const liEl = document.createElement('li');
    liEl.dataset.id = uid();
    console.log(liEl.dataset.id);
    liEl.textContent = product.reviews[i].text;
    ulEl.append(liEl);
  }

  const inputEl = document.createElement('input');
  inputEl.classList.add('product__review-input');
  inputEl.type = 'text';
  inputEl.placeholder = 'Введите отзыв';
  reviewsEl.append(inputEl);

  const buttonEl = document.createElement('button');
  buttonEl.classList.add('product__add-button');
  buttonEl.textContent = 'Добавить отзыв';
  reviewsEl.append(buttonEl);

  const errorMessageEl = document.createElement('p');
  errorMessageEl.classList.add('product__error-message');
  reviewsEl.append(errorMessageEl);
})

const reviewsEl = document.querySelectorAll('.product__reviews');
reviewsEl.forEach((el) => {

  const inputEl = el.querySelector('.product__review-input');
  const buttonEl = el.querySelector('.product__add-button');
  const errorMessageEl = el.querySelector('.product__error-message');
  const ulEl = el.querySelector('.product__reviews-list');

  buttonEl.addEventListener('click', () => {
    const userInput = inputEl.value;
    if (userInput.length < 5 || userInput.length > 500) {
      errorMessageEl.textContent = 'Длина введенного значения не соответствует требованиям!';
    } else {
      const liEl = document.createElement('li');
      liEl.textContent = userInput;
      liEl.dataset.id = uid();
      console.log(liEl.dataset.id);
      ulEl.append(liEl);
      inputEl.value = '';
      errorMessageEl.textContent = '';
    }
  })
})
