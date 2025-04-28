function reverseText() {
  let text = prompt("Введите текст, чтобы перевернуть его");
  if (text === null) {
    alert("Вы вышли из игры.");
    return; // Выход из функции
  }
  let words = text.split(" "); // Разбиваем текст на слова
  let reversedWords = words.map((word) => word.split("").reverse().join("")); // Переворачиваем каждое слово
  alert(reversedWords.join(" ")); // Объединяем перевернутые слова обратно в строку
}
