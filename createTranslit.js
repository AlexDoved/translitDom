const createNewItem = (arr, originStr, resultStr) => {
  const count = blockTranslit.childElementCount;

  historyArr.push(`${countItem + 1}. ${originStr} ---> ${resultStr[1]}`);
  countItem++;

  const newDiv = document.createElement("div");
  const leftSection = document.createElement("div");
  const rightSection = document.createElement("div");
  const spanNum = document.createElement("span");
  const toTranslate = document.createElement("span");
  const afterTranslate = document.createElement("span");
  const leftDivHint = document.createElement("div");
  const leftHint = document.createElement("p");
  const rightDivHint = document.createElement("div");
  const rightHint = document.createElement("p");
  const deleteIcon = createSvg();

  newDiv.className = "item-translit";
  leftSection.className = "left-section";
  rightSection.className = "right-section";

  spanNum.className = "num-translit";
  spanNum.innerText = `${count + 1}`;
  toTranslate.className = "text-to-translate";
  toTranslate.innerText = `${arr[0]}`;
  afterTranslate.className = "text-after-translation";
  afterTranslate.innerText = `${arr[1]}`;

  leftDivHint.className = "hint-block-left";
  leftHint.className = "hint-text-left";
  rightDivHint.className = "hint-block-right";
  rightHint.className = "hint-text-right";

  leftDivHint.append(leftHint);
  rightDivHint.append(rightHint);

  forHint.prepend(leftDivHint, rightDivHint);

  (function events() {
    toTranslate.addEventListener("mouseover", function (event) {
      event.preventDefault();
      if (arr[0].slice(10, 14) == "...") {
        leftHint.innerText = `${originStr}`;
        leftDivHint.style.display = "flex";
      }
    });

    toTranslate.addEventListener("mouseout", function (event) {
      event.preventDefault();
      leftDivHint.style.display = "none";
    });

    afterTranslate.addEventListener("mouseover", function (event) {
      event.preventDefault();
      if (arr[1].slice(10, 14) == "...") {
        rightHint.innerText = `${resultStr[1]}`;
        rightDivHint.style.display = "flex";
      }
    });

    afterTranslate.addEventListener("mouseout", function (event) {
      event.preventDefault();
      rightDivHint.style.display = "none";
    });
  })();

  deleteIcon.setAttribute("class", `delete-icon delete-item-${count + 1}`);
  deleteIcon.addEventListener("click", function () {
    newDiv.remove();
    const numbers = document.querySelectorAll(".num-translit");
    numbers.forEach((item, index) => {
      item.innerHTML = index + 1;
    });
  });

  leftSection.append(spanNum, toTranslate);
  rightSection.append(afterTranslate, deleteIcon);
  newDiv.append(leftSection, rightSection);
  blockTranslit.append(newDiv);
};

const addNewItem = () => {
  const originInputStr = inputTranslit.value;
  const resultTranslit = transliterate(originInputStr);
  const truncatedStr = truncateStr(resultTranslit);
  createNewItem(truncatedStr, originInputStr, resultTranslit);
};

const countChar = (str) => {
  if (str.length > 10) {
    return str.slice(0, 10) + "...";
  } else return str;
};

const truncateStr = (arr) => {
  const newTextToTranslate = arr[0];
  const newTextAfterTranslation = arr[1];

  const firstTruncatedStr = countChar(newTextToTranslate);
  const secondTruncatedStr = countChar(newTextAfterTranslation);

  return [firstTruncatedStr, secondTruncatedStr];
};
