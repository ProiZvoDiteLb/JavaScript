//__Задание 1__//

//________//__ПЕРВЫЙ ВАРИАНТ__//________//

// let password = prompt("Введите пароль");

// if (password === "123456") {
//   alert("пароль введен верно");
//   // console.log("пароль введен верно");
// } else {
//   alert("пароль  НЕ верен");
//   // console.log("пароль  НЕ верен");
// }

//________//__ВТОРОЙ ВАРИАНТ__//________//

// let password = prompt("Введите пароль");
// switch (password) {
//   case "123456":
//     alert("пароль введен верно");
//     // console.log("пароль введен верно");
//     break;
//   default:
//     alert("пароль  НЕ верен");
//   // console.log("пароль  НЕ верен");
// }

//________//__ТРЕТИЙ ВАРИАНТ__//________//

// let password;
// do {
//   password = prompt("Введите пароль:");

//   if (password === "123456") {
//     alert("Пароль введен верно");
//   } else {
//     alert("Пароль НЕ верен");
//   }
// } while (password !== "123456");

//________//__ЧЕТВЕРТЫЙ ВАРИАНТ__//________//

// let password;

// while (true) {
//   password = prompt("Введите пароль");
//   switch (password) {
//     case "123456":
//       alert("Пароль введен верно");
//       break;
//     default:
//       alert("Пароль НЕ верен");
//   }

//   if (password === "123456") {
//     break;
//   }
// }

//__Задание 2__//

// let c = Number(prompt("Введите число"));
// if (c > 0 && c < 10) {
//   alert("верно");
// } else if (c === 0 || c === 10) {
//   alert("неверно, число равно 0 или 10");
// } else if (c < 0) {
//   alert("неверно, число отрицательное");
// }

//упрощеный вид//
// let c = Number(prompt("Введите число"));
// if (c >= 0 && c <= 10) {
//   alert("верно");
// } else {
//   alert("неверно, число отрицательное");
// }

// let c = Number(prompt("Введите число"));
// switch (true) {
//   case c > 0 && c < 10:
//     alert("верно");
//     // console.log("верно");
//     break;
//   case c === 0 || c === 10:
//     alert("неверно, число равно 0 или 10");
//     // console.log("неверно, число равно 0 или 10");
//     break;
//   case c < 0:
//     alert("неверно, число отрицательное");
//     // console.log("неверно, число отрицательное");
//     break;
//   default:
//     alert(" неверено");
//   // console.log("неверено");
// }

//__Задание 3__//

// let d = Number(prompt("Введите число d"));
// let e = Number(prompt("Введите число e"));

// if (d > 100 || e > 100) {
//   alert("верно");
//   //   console.log("верно");
// } else {
//   alert("неверно");
//   //   console.log("неверно");
// }

//__Задание 4__//

// let a = "2";
// let b = "3";
// // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
// alert(Number(a) + Number(b));

//__Задание 5__//

// let monthNumber = prompt("Введите номер месяца");

// switch (monthNumber) {
//   case "12":
//   case "1":
//   case "2":
//     alert("Зима");
//     // console.log("Зима");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     alert("Весна");
//     // console.log("Весна");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     alert("Лето");
//     // console.log("Лето");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     alert("Осень");
//     // console.log("Осень");
//     break;
//   default:
//     alert("неверно");
//   // console.log("неверно");
// }

//еще один вариант

// let number = 1;

// while (number <= 12) {
//   if ((number >= 1 && number <= 2) || number === 12) {
//     console.log("Зима");
//   } else if (number >= 3 && number <= 5) {
//     console.log("Весна");
//   } else if (number >= 6 && number <= 8) {
//     console.log("Лето");
//   } else if (number >= 9 && number <= 11) {
//     console.log("Осень");
//   }

//   number++;
// }

//__ДОП Задание 1__//

// let userInput = Number(prompt("Пожалуйста, введите любое число"));
// let number = Number(userInput);
// if (userInput !== number) {
//   alert("Вы ввели не число");
//   // console.log("Вы ввели не число");
// } else {
//   if (number % 2 === 0) {
//     alert("Число " + number + " четное");
//     // console.log("Число " + number + " четное");
//   } else {
//     alert("Число " + number + " не четное");
//     // console.log("Число " + number + "не четное");
//   }
// }

//__ДОП Задание 2__//

// let clientOS = 0;
// if (clientOS === 0) {
//   alert("Установите версию для iOS");
//   // console.log("Установите версию для iOS");
// } else if (clientOS === 1) {
//   alert("Установите версию для Android");
//   // console.log("Установите версию для Android");
// } else {
//   alert("Неизвестная операционная система");
// }

// let clientOS = 0;
// switch (clientOS) {
//   case 0:
//     alert("Установите версию для iOS");
//     // console.log("Установите версию для iOS");
//     break;
//   case 1:
//     alert("Установите версию для Android");
//     // console.log("Установите версию для Android");
//     break;
//   default:
//     alert("Неизвестная операционная система");
// }

//__ДОП Задание 3__//

// let clientOS = 0;
// let clientDeviceYear = 2015;
// if (clientOS === 0) {
//   if (clientDeviceYear < 2015) {
//     alert("Установите облегченную версию приложения для iOS");
//     // console.log("Установите облегченную версию приложения для iOS");
//   } else {
//     alert("Установите версию приложения для iOS");
//     // console.log("Установите версию приложения для iOS");
//   }
// } else if (clientOS === 1) {
//   if (clientDeviceYear < 2015) {
//     alert("Установите облегченную версию приложения для Android");
//     // console.log("Установите облегченную версию приложения для Android");
//   } else {
//     alert("Установите версию приложения для Android");
//     // console.log("Установите версию приложения для Android");
//   }
// } else {
//   alert("Неизвестная операционная система");
// }

// let i = 1;
// let n = Number(prompt("Сколько раз вам сказать привет?"));
// while (i <= n) {
//   alert("Привет");
//   // console.log("Привет");
//   i++;
// }
