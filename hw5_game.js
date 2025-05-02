function handleClick() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guessed = false;

  while (!guessed) {
    const input = prompt(
      "Угадай число от 1 до 100 или нажмите 'Отмена' для выхода"
    );

    if (input === null) {
      alert("Игра остановлена.");
      break;
    }

    const number = Number(input);

    if (isNaN(number) || number < 1 || number > 100) {
      alert("Вы ввели не число или число вне диапазона");
      continue;
    }

    switch (true) {
      case number === randomNumber:
        alert("Вы угадали! Игра окончена.");
        guessed = true;
        break;
      case number < randomNumber:
        alert("Ваше число меньше загаданного");
        break;
      case number > randomNumber:
        alert("Ваше число больше загаданного");
        break;
    }
  }
}
