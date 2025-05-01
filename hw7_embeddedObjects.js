function findWeekdayAndWeekendNextMonth() {
  const date = new Date(); //Определяем текущую дату
  const year = date.getFullYear(); //Определяем текущий год
  const month = date.getMonth() + 1; //Определяем текущий месяц
  const firstDayNextMonth = new Date(year, month, 1); //Определяем первый день следующего месяца
  const nextInNextMonth = new Date(year, month + 1, 0).getDate(); //Определяем последний день следующего месяца

  //Инициализируем переменные для буднего и выходного дня
  let weekday, weekend;

  //Инициализируем флаги, которые будут определять, был ли найден будний день или выходной
  let foundWeekday = false;
  let foundWeekend = false;

  while (!foundWeekday || !foundWeekend) {
    //генерируем случайный день в следующем месяце
    let randomDay = Math.floor(Math.random() * nextInNextMonth) + 1;
    //создаем объект Date для этого случайного дня
    const date = new Date(year, month, randomDay);
    //получаем день для этой даты (0 - воскресенье, 6 - суббота)
    const day = date.getDay();

    //Проверяем, является ли день будним (понедельник-пятница)
    if (!foundWeekday && day >= 1 && day <= 5) {
      weekday = date; //Сохраняем дату как будний день
      foundWeekday = true; //Устанавливаем флаг, что был найден будний день
    }

    //Проверяем, является ли день выходным (суббота или воскресенье)
    if (!foundWeekend && (day === 0 || day === 6)) {
      weekend = date; //Сохраняем дату как выходной день
      foundWeekend = true; //Устанавливаем флаг, что был найден выходной день
    }
  }

  //Выводим результаты в консоль : даты буднего и выходного дня
  console.log(`Будний день: ${weekday.toLocaleDateString()}`); //Выводим дату буднего дня
  console.log(`Выходной день: ${weekend.toLocaleDateString()}`); //Выводим дату выходного дня
}
//Вызываем функцию для демонстрации работы
findWeekdayAndWeekendNextMonth();

//__Задание 1__//

// Преобразовать строку 'js' в верхний регистр.

const answerUser = prompt(
  "Введите ваше имя...\nP.S. преобразую в верхний регистр"
);
const upperCaseAnswerUser = answerUser.toUpperCase();
alert("Привет " + upperCaseAnswerUser);

//__Задание 2__//

// Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, содержащий только те элементы первого массива,
// которые начинаются со второй строки. Регистр символов не влияет на результат.

const array = ["Белый хлеб", "Молоко Белое", "Белый снег", "Мел Белый"];
const search = "белый";
const result = []; // Создаем новый массив для результатов
array.forEach((color) => {
  // Проходимся по массиву array и проверяем каждый элемент на наличие
  // подстроки 'белый' в начале названия, не забыв привести элемент
  // и искомую подстроку к одному регистру
  if (color.toLowerCase().startsWith(search.toLowerCase())) {
    result.push(color); // Добавляем найденный элемент в массив результата
  }
});
console.log(result); // Выводим массив результатов

//__Задание 3__//

// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

const num = 32.58884;
const numMathFloor = Math.floor(num); //До меньшего целого.
console.log(numMathFloor);

const num1 = 32.58884;
const numMathCeil = Math.ceil(num1); //До большего целого.
console.log(numMathCeil);

const num2 = 32.58884;
const numMathRoundMax = Math.round(num2); //До большего целого, если десятые = или < 0,5
console.log(numMathRoundMax);

const num3 = 32.48884; // 32.49999 Максимальное число до округления в меньшую сторону
const numMathRoundMin = Math.round(num3); //До большего целого, если десятые > 0,5
console.log(numMathRoundMin);

//__Задание 4__//

// Найти минимальное и максимальное значения из чисел
// 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const arrayNum = [52, 53, 49, 77, 21, 32];
// Находим минимальное значение
const numMin = Math.min(...arrayNum); // Распаковываем массив и передаем его элементы в Math.min
// Находим максимальное значение
const numMax = Math.max(...arrayNum); // Распаковываем массив и передаем его элементы в Math.max
// Выводим результаты в консоль
console.log("Минимальное значение:", numMin); // Выводит 21
console.log("Максимальное значение:", numMax); // Выводит 77

//__Задание 5__//

// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomInt() {
  const randomNumber = Math.floor(Math.random() * 10) + 1; // Генерируем случайное число от 1 до 10
  console.log(randomNumber); // Выводим число в консоль
}
// Вызов функции
getRandomInt();

//__Задание 6__//

// Написать функцию, которая принимает целое число и возвращает массив случайных чисел
// от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function getRandomInt(num) {
  // Проверка, что переданное число является целым положительным
  if (!Number.isInteger(num) || num <= 0) {
    return []; // Возвращаем пустой массив, если число невалидно
  }

  const length = Math.floor(num / 2); // Длина массива в два раза меньше переданного числа
  const result = []; // Инициализация массива для случайных чисел

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (num + 1)); // Генерация случайного числа от 0 до num
    result.push(randomNumber); // Добавление случайного числа в массив
  }

  return result; // Возвращаем массив случайных чисел
}
// Пример использования функции
const randomArray = getRandomInt(12); //Переданное число, относительно которого длина массива будет в два раза меньше
console.log(randomArray); // Выводим массив случайных чисел

//__Задание 7__//

// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function getNum(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log(getNum(1, 6));

//__Задание 8__//

// Вывести в консоль текущую дату.

let currentDateDay = new Date();
alert(currentDateDay);
console.log(currentDateDay);

//__Задание 9__//

// Создать переменную currentDate , хранящую текущую дату.
// Вывести дату, которая наступит через 73 дня после текущей.

let currentDateAfter = new Date(); // Создаем переменную с текущей датой
let futureDate = new Date(currentDateAfter); // Копируем текущую дату в новую переменную
futureDate.setDate(currentDateAfter.getDate() + 73); // Добавляем 73 дня к текущей дате
console.log(currentDateAfter); // Выводим дату
console.log(futureDate.toLocaleDateString("ru-RU")); // Выводим дату в формате для России

//__Задание 10__//

// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//  Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
  // Массив с названиями месяцев на русском
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  // Массив с названиями дней недели на русском
  const weekdays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  // Получаем компоненты даты
  const day = date.getDate(); // Число месяца
  const month = months[date.getMonth()]; // Месяц
  const year = date.getFullYear(); // Год
  const weekday = weekdays[date.getDay()]; // День недели

  // Получаем компоненты времени
  const hours = String(date.getHours()).padStart(2, "0"); // Часы
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Минуты
  const seconds = String(date.getSeconds()).padStart(2, "0"); // Секунды

  // Формируем строку с датой и временем
  return `Дата: ${day} ${month} ${year} — это ${weekday}. \nВремя: ${hours}:${minutes}:${seconds}`;
}

// Пример использования
const currentDate = new Date();
console.log(formatDate(currentDate));

// Объяснение

// 1. Определение функции:
//    - Функция formatDate(date) принимает один аргумент date, который должен быть объектом Date.

// 2. Массивы с месяцами и днями недели:
//    - Мы создаем два массива:
//      - months — содержит названия месяцев на русском.
//      - weekdays — содержит названия дней недели на русском.

// 3. Получение компонентов даты:
//    - date.getDate() возвращает число месяца (от 1 до 31).
//    - date.getMonth() возвращает номер месяца (от 0 до 11). Мы используем это значение для доступа к элементам массива months.
//    - date.getFullYear() возвращает полный год (например, 2023).
//    - date.getDay() возвращает номер дня недели (от 0 до 6). Мы используем это значение для доступа к элементам массива weekdays.

// 4. Получение компонентов времени:
//    - date.getHours(), date.getMinutes(), date.getSeconds() возвращают текущие часы, минуты и секунды .
//    - Используем String(...).padStart(2, '0'), чтобы добавить ведущий ноль, если значение меньше 10.

// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//  Время: [часы]:[минуты]:[секунды]
