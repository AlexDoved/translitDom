const inputTranslit = document.querySelector(".main-input");
const blockTranslit = document.querySelector(".block-translit-container");
const btnTranslit = document.querySelector(".add-translit");
const btnClearAll = document.querySelector(".clear-all");
const forHint = document.querySelector(".block-translit");
const btnDownload = document.querySelector(".download-txt");

const historyArr = [];
let countItem = 0;

inputTranslit.addEventListener("keyup", function (event) {
  event.preventDefault();

  if (event.keyCode === 13) {
    if (inputTranslit.value === "") {
      alert("Вы не ввели текст для перевода!");
    } else {
      addNewItem();
    }
  }

  btnTranslit.onclick = () => {
    if (inputTranslit.value === "") {
      alert("Вы не ввели текст для перевода!");
    } else {
      addNewItem();
    }
  };
});

btnTranslit.onclick = () => {
  if (inputTranslit.value === "") alert("Вы не ввели текст для перевода!");
};

btnClearAll.onclick = () => {
  let count = blockTranslit.children.length;

  if (count > 1) {
    for (let i = count - 1; i >= 1; --i) {
      blockTranslit.children[i].remove();
    }
  }
};
