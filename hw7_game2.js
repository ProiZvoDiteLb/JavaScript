// Игра «Викторина»
//  Описание создайте простую викторину с несколькими вопросами и вариантами ответов.
// Требования: Сайт предлагает несколько вопросов и вариантов ответов.
// Запрашивает у пользователя ответы на каждый вопрос.
// Подсчитывает и выводит количество правильных ответов.
// Последовательность создания игры Викторина: Используйте предоставленный массив вопросов:

// Массив quiz содержит три вопроса с вариантами ответов и правильными ответами.
// Массив вопросов и правильных ответов
// const quiz = [
//   {
//     question: "Какой цвет небо?",
//     options: ["1. Красный", "2. Синий", "3. Зеленый"],
//     correctAnswer: 2, // номер правильного ответа
//   },
//   {
//     question: "Сколько дней в неделе?",
//     options: ["1. Шесть", "2. Семь", "3. Восемь"],
//     correctAnswer: 2,
//   },
//   {
//     question: "Сколько у человека пальцев на одной руке?",
//     options: ["1. Четыре", "2. Пять", "3. Шесть"],
//     correctAnswer: 2,
//   },
// ];

// Запросите у пользователя ответы. Используйте функцию prompt() для получения ответа пользователя
//  на каждый вопрос. Проверьте ответы и подсчитайте правильные:
//   Сравните ответ пользователя с правильным ответом и увеличьте счетчик правильных ответов,
//    если ответ верный. Выведите результат: В конце игры выведите количество правильных ответов
//    с помощью alert() .

// const quiz = [
//   {
//     question: "Какого цвета небо?",
//     options: ["1. Красное", "2. Синее", "3. Зеленое"],
//     correctAnswer: 2, // номер правильного ответа
//   },
//   {
//     question: "Сколько дней в неделе?",
//     options: ["1. Шесть", "2. Семь", "3. Восемь"],
//     correctAnswer: 2,
//   },
//   {
//     question: "Сколько у человека пальцев на одной руке?",
//     options: ["1. Четыре", "2. Пять", "3. Шесть"],
//     correctAnswer: 2,
//   },
// ];

// function startQuiz() {
//   let correctCount = 0;

//   for (let i = 0; i < quiz.length; i++) {
//     const currentQuestion = quiz[i];
//     let optionsText = currentQuestion.options.join("\n");
//     const userAnswer = prompt(
//       `${currentQuestion.question}\n${optionsText}\nВведите номер ответа:`
//     );

//     // Проверка на правильный ответ
//     if (userAnswer && parseInt(userAnswer) === currentQuestion.correctAnswer) {
//       correctCount++;
//     }
//   }

//   alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
// }

const quiz = [
  {
    question: "Какого цвета небо?",
    options: ["1. Красного", "2. Синего", "3. Зеленого"],
    correctAnswer: 2, // номер правильного ответа
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2,
  },
];

function startQuiz() {
  let correctCount = 0;

  for (let i = 0; i < quiz.length; i++) {
    const currentQuestion = quiz[i];
    let optionsText = currentQuestion.options.join("\n");
    const userAnswer = prompt(
      `${currentQuestion.question}\n${optionsText}\nВведите номер ответа:`
    );

    // Проверка на правильный ответ
    if (userAnswer && parseInt(userAnswer) === currentQuestion.correctAnswer) {
      correctCount++;
    }
  }

  alert(`Вы ответили правильно на ${correctCount} из ${quiz.length} вопросов.`);
}
