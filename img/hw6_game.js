// function simpleArithmetic() {
//   const min = 0;
//   const max = 100;
//   const operator = ["+", "-", "*", "/"];

//   const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
//   const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
//   const op = operator[Math.floor(Math.random() * operator.length)];

//   let task, answer;

//   switch (op) {
//     case "+":
//       task = `${num1} + ${num2}`;
//       answer = num1 + num2;

//       break;
//     case "-":
//       task = `${num1} - ${num2}`;
//       answer = num1 - num2;
//       break;
//     case "*":
//       task = `${num1} * ${num2}`;
//       answer = num1 * num2;
//       break;
//     case "/":
//       if (num2 === 0) {
//         num2 = 1; // Если делитель 0, заменим его на 1
//       }

//       task = `${num1} / ${num2}`;
//       answer = num1 / num2;
//       break;
//   }

//   return { task, answer };
// }

// function startGame() {
//   let keepPlaying = true;

//   while (keepPlaying) {
//     const { task, answer } = simpleArithmetic();

//     const userResponse = prompt(
//       `Решите задачу: ${task}\nВведите ваш ответ или нажмите Отмена (Cancel), чтобы выйти:`
//     );

//     // Проверка на нажатие Cancel
//     if (userResponse === null) {
//       keepPlaying = false; // Завершаем цикл, если пользователь нажал Cancel
//       alert("Вы вышли из игры.");
//     } else {
//       const userAnswer = Number(userResponse); // Преобразуем ответ в число

//       if (userAnswer === answer) {
//         alert("Правильно!");
//       } else {
//         alert(`Неправильно! Правильный ответ: ${answer}`);
//       }
//     }
//   }
// }

function arithmeticGame() {
  const min = 0;
  const max = 100;
  const operator = ["+", "-", "*", "/"];
  let keepPlaying = true;

  while (keepPlaying) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const op = operator[Math.floor(Math.random() * operator.length)];

    let task, answer;

    switch (op) {
      case "+":
        task = `${num1} + ${num2}`;
        answer = num1 + num2;
        break;
      case "-":
        task = `${num1} - ${num2}`;
        answer = num1 - num2;
        break;
      case "*":
        task = `${num1} * ${num2}`;
        answer = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          num2 = 1; // Если делитель 0, заменим его на 1
        }
        task = `${num1} / ${num2}`;
        answer = num1 / num2;
        break;
    }

    const userResponse = prompt(
      `Решите задачу: ${task}\nВведите ваш ответ или нажмите Отмена (Cancel), чтобы выйти:`
    );

    // Проверка на нажатие Cancel
    if (userResponse === null) {
      keepPlaying = false; // Завершаем цикл, если пользователь нажал Cancel
      alert("Вы вышли из игры.");
    } else {
      const userAnswer = Number(userResponse); // Преобразуем ответ в число

      if (userAnswer === answer) {
        alert("Правильно!");
      } else {
        alert(`Неправильно! Правильный ответ: ${answer}`);
      }
    }
  }
}
