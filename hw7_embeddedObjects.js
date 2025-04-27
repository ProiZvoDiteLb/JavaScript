// function findWeekdayAndWeekendNextMonth() {
//   const date = new Date(); //Определяем текущую дату
//   const year = date.getFullYear(); //Определяем текущий год
//   const month = date.getMonth() + 1; //Определяем текущий месяц
//   const firstDayNextMonth = new Date(year, month, 1); //Определяем первый день следующего месяца
//   const nextInNextMonth = new Date(year, month + 1, 0).getDate(); //Определяем последний день следующего месяца

//   //Инициализируем переменные для буднего и выходного дня
//   let weekday, weekend;

//   //Инициализируем флаги, которые будут определять, был ли найден будний день или выходной
//   let foundWeekday = false;
//   let foundWeekend = false;

//   while (!foundWeekday || !foundWeekend) {
//     //генерируем случайный день в следующем месяце
//     let randomDay = Math.floor(Math.random() * nextInNextMonth) + 1;
//     //создаем объект Date для этого случайного дня
//     const date = new Date(year, month, randomDay);
//     //получаем день для этой даты (0 - воскресенье, 6 - суббота)
//     const day = date.getDay();

//     //Проверяем, является ли день будним (понедельник-пятница)
//     if (!foundWeekday && day >= 1 && day <= 5) {
//       weekday = date; //Сохраняем дату как будний день
//       foundWeekday = true; //Устанавливаем флаг, что был найден будний день
//     }

//     //Проверяем, является ли день выходным (суббота или воскресенье)
//     if (!foundWeekend && (day === 0 || day === 6)) {
//       weekend = date; //Сохраняем дату как выходной день
//       foundWeekend = true; //Устанавливаем флаг, что был найден выходной день
//     }
//   }

//   //Выводим результаты в консоль : даты буднего и выходного дня
//   console.log(`Будний день: ${weekday.toLocaleDateString()}`); //Выводим дату буднего дня
//   console.log(`Выходной день: ${weekend.toLocaleDateString()}`); //Выводим дату выходного дня
// }
// //Вызываем функцию для демонстрации работы
// findWeekdayAndWeekendNextMonth();

// Основное задание по верстке макета Реализуйте связь с сайтом для третьей и четвертой игр.

// Игра «Переверни текст» Описание создайте игру, где пользователю нужно ввести текст, который будет перевернут.

// Требования: Сайт запрашивает у пользователя текст. Сайт переворачивает введенный текст. Сайт выводит перевернутый текст.

// function reverseText() {
//   let text = prompt("Введите текст");
//   let words = text.split(" "); // Разбиваем текст на слова
//   let reversedWords = words.map((word) => word.split("").reverse().join("")); // Переворачиваем каждое слово
//   alert(reversedWords.join(" ")); // Объединяем перевернутые слова обратно в строку
// }
