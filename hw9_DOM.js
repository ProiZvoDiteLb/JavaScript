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
/*
//__Задание 1__//

 Скрытие и показ текста Задача: cоздайте кнопку,
  которая будет скрывать и показывать текст в заголовке < h1 > .
  Инструкция: В HTML создайте заголовок < h1 > с текстом и кнопку.
  Используйте метод querySelector для получения ссылок на заголовок и кнопку.
  Используйте событие click и метод addEventListener, чтобы скрывать и показывать заголовок
   при нажатии на кнопку.Как должно работать: нажатие на кнопку «Скрыть» скрывает текст заголовка.
   Повторное нажатие показывает текст снова.
*/

const openClosed__h1El = document.querySelector(".openClosed__h1");
const openClosed__btnEl = document.querySelector(".openClosed__btn");
openClosed__btnEl.addEventListener("click", function (e) {
  if (openClosed__h1El.style.display === "none") {
    openClosed__h1El.style.display = "block";
  } else {
    openClosed__h1El.style.display = "none";
  }
});

/*
//__Задание 2__//

  Изменение стиля элемента Задача: создайте кнопку,
  которая изменяет цвет текста в элементе < p > .Инструкция:
   В HTML создайте абзац < p > и кнопку.Используйте метод querySelector 
   для получения ссылки на абзац и кнопку.Используйте событие click и метод addEventListener,
  чтобы изменить стиль элемента, например его цвет.Как должно работать: 
  нажатие на кнопку «Изменить цвет» делает текст абзаца синим.
  */

const color__pEl = document.querySelector(".color__p");
const color__btnEl = document.querySelector(".color__btn");

color__btnEl.addEventListener("click", function (e) {
  if (color__pEl.style.color === "blue") {
    color__pEl.style.color = "";
  } else {
    color__pEl.style.color = "blue";
  }
});

/*
//__Задание 3__//
Динамическое изменение текста Задача: создайте кнопку, которая меняет текст в заголовке < h1 > .
  Инструкция: В HTML создайте заголовок < h1 > с текстом и кнопку.
  Используйте метод querySelector для получения ссылки на заголовок и кнопку.
  Используйте событие click и метод addEventListener, чтобы изменить текст заголовка 
  при нажатии на кнопку.Как должно работать: нажатие на кнопку «Изменить текст» 
  меняет текст заголовка на «Привет, мир!».
  */

const changingText__h1El = document.querySelector(".changingText__h1");
const changingText__btnEl = document.querySelector(".changingText__btn");
const originalText = changingText__h1El.textContent; // Сохраняем оригинальный текст

changingText__btnEl.addEventListener("click", function (e) {
  if (changingText__h1El.textContent === originalText) {
    changingText__h1El.textContent = "Привет мир!"; // Меняем текст на новый
  } else {
    changingText__h1El.textContent = originalText; // Возвращаем оригинальный текст
  }
});

//__Задание 4__//

//__Задание 5__//

//__Задание 6__//

//__Задание 7__//
