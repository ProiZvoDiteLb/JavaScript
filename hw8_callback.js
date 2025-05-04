// const fibonacci = [1, 1, 2, 3, 5, 8];
// const multipleByTwoFib = fibonacci.map((num) => num * 2);
// const plusTenFib = fibonacci.map((num) => num + 10);
// const onlyBigFib = fibonacci.filter((num) => num > 3);

// console.log(multipleByTwoFib); // [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // [5, 8]

// /////////////////////////////////
// ///////////////////
// /////////////////////
// ///////////////////////////////////////////////////////////
// // Создайте цикл, который выполняется от 0 до 9.

// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// function callbackWithArrayLength(arr, callback) {
//   // console.log(arr);
//   callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//   console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//   console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//   console.log(l);
// });

// // Повторить с интервалом 2 секунды
// // вместо:
// let timerId = setInterval(() => alert("tick"), 2000);
// clearInterval(timerId);

// ////////////////////////////////////////////////////////
// /////////////////////////////////
// ////////////////////

// function uploadCompleted() {
//   console.log("Загрузка файла успешно завершена");

//   //Имитация обработки файла
//   console.log("Обработка файла...");
//   setTimeout(() => {
//     console.log("Файл обработан.");

//     //Имитация сохранения файла
//     console.log("Сохранение файла...");
//     setTimeout(() => {
//       console.log("Файл сохранён. Файл готов к использованию!");
//     }, 1000); //Имитация задержки сохранения файла
//   }, 2000); //Имитация задержки обработки файла
// }

// function startUpload(callback) {
//   console.log("Начало загрузки файла...");

//   let progress = 0;
//   const intervalId = setInterval(() => {
//     // Имитация процесса загрузки
//     progress += Math.floor(Math.random() * 10) + 5; //Увеличиваем прогресс
//     // на случайное число от 5 до 15
//     console.log(`Прогресс: ${progress}%`);

//     if (progress >= 100) {
//       clearInterval(intervalId); // Останавливаем интервал
//       console.log("Загрузка файла завершена!");
//       if (callback) {
//         callback(); //Вызываем callback после завершения
//       }
//     }
//   }, 2000); // Обновляем прогресс каждые 2 секунды
// }

// //Запуск функции с отдельной функцией обратного вызова
// startUpload(uploadCompleted);

//////////////////////////////////////////////////////////////////////////////////////////////////

//__Задание 1__//

// С помощью метода массива sort отсортируйте массив people
// по возрастанию возраста и выведите результат в консоль.

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];
function compareNumbers(a, b) {
  return a - b;
}

// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(
  people.sort(function (a, b) {
    return a.age - b.age;
  })
);
// код выше должен вывеcти =>
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]

//__Задание 2__//

// Реализуйте функцию filter , которая должна работать аналогично методу массива filter .
// Возьмите за основу функцию map , которую мы реализовывали на уроке.
// Чтобы из функции map сделать filter , нужно,
// в зависимости от результата вызова ruleFunction ,
//  принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

function isPositive(num) {
  return num > 0;
}
function isMale(person) {
  return person.gender === "male";
}
function filter(array, ruleFunction) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peoples = [
  { name: "Глеб", gender: "male" },
  { name: "Анна", gender: "female" },
  { name: "Олег", gender: "male" },
  { name: "Оксана", gender: "female" },
];

console.log(filter(peoples, isMale));

//__Задание 3__//

// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды
// будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение
//  «30 секунд прошло».

const intervalId = setInterval(() => {
  console.log(new Date());
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("30 секунд прошло");
}, 30000);

//__Задание 4__//

// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
//  Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу,
//   а спустя 1 секунду. Используйте setTimeout .

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log("Привет, Глеб!");
});

//__Задание 5__//

//__Задание 6__//

//__Задание 7__//

//__Задание 8__//

//__Задание 9__//

//__Задание 10__//

//__Задание 11__//

//__Задание 12__//

//__Задание 13__//

//__Задание 14__//

//__Задание 15__//

//__Задание 16__//
