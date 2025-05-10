const paragraphEl = document.querySelector(".section__paragraph");
paragraphEl.style.backgroundColor = "red";
paragraphEl.style.borderRadius = "20px";
paragraphEl.addEventListener("click", function (e) {
  console.log("НАЖАЛ");
  paragraphEl.textContent = "Изменил";
  paragraphEl.style.color = "blue";
  paragraphEl.style.backgroundColor = "none";
  paragraphEl.innerHTML = `<h2> lorem lorem</h2>
                            <p>Проверяю</p>
                            <button>Кнопка</button>`;
});
