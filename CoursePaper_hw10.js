const gamess__btnEl = document.querySelector("#games__btn");
gamess__btnEl.addEventListener("click", function (e) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
