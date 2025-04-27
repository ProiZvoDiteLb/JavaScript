function reverseText() {
  let text = prompt("Введите текст");
  let words = text.split(" "); // Разбиваем текст на слова
  let reversedWords = words.map((word) => word.split("").reverse().join("")); // Переворачиваем каждое слово
  alert(reversedWords.join(" ")); // Объединяем перевернутые слова обратно в строку
}
