// DOM(Document Object Model) — это объектная модель документа.
// Она представляет HTML - документ как дерево объектов.

/*
Методы доступа к элементам DOM

// querySelector() // - возвращает первый элемент, соответствующий указанному CSS-селектору.

const element = document.querySelector('.description');
создается - const - с ее именем element = document.querySelector- обращение к документу 
с использованием метода ('.description')- это имя class который в HTML, ID ищем по # ;

// getElementById() //- возвращает элемент с заданным атрибутом id

Поскольку идентификаторы уникальны на странице, getElementById() всегда возвращает один элемент.


// getElementsByClassName() // -Чтобы найти все элементы по имени класса, используйте метод

// querySelectorAll() // -позволяет найти все элементы, соответствующие заданному CSS-селектору, 
//                          и возвращает статическую коллекцию.
*/

/* 
Понимание событий и их обработка

addEventListener() - button.addEventListener('click', function() {
   // ... Код, который будет выполнен при клике на кнопку
});
*/

const openClosed_h1El = document.querySelector(".openClosed_h1");
const openClosed_btnEl = document.querySelector(".openClosed_btn");

console.log(openClosed_h1El);
console.log(openClosed_btnEl);
