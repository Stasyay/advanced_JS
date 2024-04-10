"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];
    constructor(books) {
        this.#books = books;
        books.filter((book, i, a) => {
            if (a.indexOf(book) !== i) {
                throw new Error('Books should not be repeated');
            }
        })
    }

    getAllBooks() {
        return this.#books;
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('Book already exists');
        }
        this.#books.push(title);
    }
    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error('Book does not exist');
        }
        this.#books = this.#books.filter((book) => book !== title);
    }
    hasBook(title) {
        return this.#books.includes(title);
    }
}

const library = new Library(['Остров сокровищ', 'Оно', 'Мизери']);

console.log(library.getAllBooks());

library.addBook('Остров сокровищ 2');
console.log(library.getAllBooks());
library.removeBook('Остров сокрови');
console.log(library.getAllBooks());
console.log(library.hasBook('Остров сокровищ'));

