// Задание 1 //
let a = 10;
alert(a);
// console.log(a);
a = 20;
alert(a);
// console.log(a);

// Задание 2 //
let releaseYear = 2007;
alert("Дата выхода первого iphone: " + releaseYear + " год");
// console.log(releaseYear);

// Задание 3 //
let creatorName = "Брендан Эйх";
alert("Именя создателя языка JavaScript: " + creatorName);
// console.log(creatorName);

// Задание 4 //
let num1 = 10;
let num2 = 2;
alert("sum: " + (num1 + num2)); // Сумма
alert("difference: " + (num1 - num2)); // Разность
alert("product: " + num1 * num2); // Произведение
alert("quotient: " + num1 / num2); // Частное
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// Задание 5 //
let result = 2;
result = 2 ** 5;
alert(result);
// console.log(result);

// Задание 6 //
let c = 9;
let b = 2;
alert(c % b);
// console.log(c % b);

// Задание 7 //
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
// console.log(num);

// Задание 8 //
let age = prompt("Сколько вам лет?");
alert(age);
// console.log(age);

// Задание 9 //
let user = {
  name: "Игорь",
  age: 34,
  isAdmin: true,
};
alert(
  "Имя: " +
    user.name +
    ", возраст: " +
    user.age +
    " года," +
    " администратор: " +
    user.isAdmin
);

// Задание 10 //
let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);
// alert("Привет, " + userName);

// Задание доп //
let number = prompt("Загадай число");
number = Number(number); // Преобразуем строку в число
let doubledNumber = number * 2; // Удваиваем число
alert(`Удвоенное число: ${doubledNumber}`);

let sumDoubledNumber = doubledNumber + 10; // Прибавляем 10
alert(`Увеличенное на 10: ${sumDoubledNumber}`);

let quotientNumber = sumDoubledNumber / 2; // Делим на 2
alert(`Половина: ${quotientNumber}`);

let differenceNumber = quotientNumber - number; // Вычитаем первоначальное загаданное число
alert(`Ответ равен: ${differenceNumber}`);
