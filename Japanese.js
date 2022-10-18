// Variables
const prev = {};
var charsAll = [];
var chars = [];
var wrong = [];
var ans = {};
var total = 0;
var count = 0;

// Elements
const elmntStart = document.getElementById("game-start");
const elmntPlay = document.getElementById("game-play");
const elmntAllChars = document.getElementById("game-all-chars");
const elmntAllCharsCol = elmntAllChars.getElementsByTagName("div");
const elmntChar = document.getElementById("game-char");
const elmntQuestion = document.getElementById("game-question");
const elmntAnswer = document.getElementById("game-answer");
const elementInput = document.getElementById("game-input");
const elementSubmit = document.getElementById("game-submit");
const elementTexts = elmntAnswer.getElementsByTagName("p");
const elementNext = document.getElementById("game-next");

// Trigger button click on Enter
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    if (elmntQuestion.style.display === "flex") {
      elementSubmit.click();
    } else if (elmntAnswer.style.display === "flex") {
      elementNext.click();
    }
  }
});

function getType(type) {
  // Get char list
  charsAll = type === 1 ? [...hiragana] : [...katagana];
  charsAll.forEach((elmnt) => {
    if (elmnt.kana !== "") {
      chars.push(elmnt);
    }
  });

  // Count
  count = 0;
  total = chars.length;

  // DOM
  getResult();
  gamePlay("start");
}

function gamePlay(status) {
  if (status === "start") {
    elmntStart.style.display = "none";
    elmntPlay.style.display = "flex";
    getRandomChar();
  } else if (status === "restart") {
    chars = wrong;
    count = 0;
    total = chars.length;
    wrong = [];
    getRandomChar();
  } else {
    elmntStart.style.display = "flex";
    elmntPlay.style.display = "none";
  }
}

function getRandomChar() {
  // Get random number
  const num = Math.floor(Math.random() * chars.length);

  // Store answer
  ans = chars[num];

  // Get question number
  count++;

  // DOM
  elmntChar.innerHTML = `${chars[num].kana} - [${count}/${total}]`;
  elmntQuestion.style.display = "flex";
  elmntAnswer.style.display = "none";
  elementInput.focus();

  // Remove char from list
  chars.splice(num, 1);
}

function getAnswer() {
  // Get answer
  const value = elementInput.value;

  // Update previous correct answer color
  if (prev.row) {
    const texts = elmntAllCharsCol[prev.row].getElementsByTagName("a");
    texts[prev.col].style.color = "var(--white)";
  }

  // Record wrong answer
  if (value !== ans.roman) {
    wrong.push(ans);
  } else {
    if (ans.index === 112 || ans.index === 113) {
      // Special case: n & (pause)
      const texts =
        elmntAllCharsCol[
          elmntAllCharsCol.length - (114 - ans.index)
        ].getElementsByTagName("a");
      texts[1].innerHTML = ans.kana;
      texts[1].style.color = "var(--red)";
      prev.row = elmntAllCharsCol.length - (114 - ans.index);
      prev.col = 1;
    } else {
      const row = Math.floor(ans.index / 8);
      const texts =
        elmntAllCharsCol[(ans.index % 8) + 1].getElementsByTagName("a");
      texts[row + 1].innerHTML = ans.kana;
      texts[row + 1].style.color = "var(--red)";
      prev.row = (ans.index % 8) + 1;
      prev.col = row + 1;
    }
  }

  // DOM
  elmntQuestion.style.display = "none";
  elmntAnswer.style.display = "flex";
  elementTexts[0].innerHTML =
    value === ans.roman ? "Correct Answer" : "Wrong Answer";
  elementTexts[1].innerHTML = `${ans.kana} [${ans.roman}]`;
  elementNext.innerHTML =
    chars.length > 0 || wrong.length > 0 ? "Next Question" : "Start Again";
  elementInput.value = "";
}

function getNextQuestion() {
  if (chars.length > 0) {
    getRandomChar();
  } else {
    if (wrong.length > 0) {
      gamePlay("restart");
    } else {
      gamePlay("end");
    }
  }
}

function getResult() {
  for (let i = 1; i < elmntAllCharsCol.length; i++) {
    const texts = elmntAllCharsCol[i].getElementsByTagName("a");

    for (let j = 1; j < texts.length; j++) {
      const index = i - 1 + (j - 1) * 8;

      if (
        ((i === elmntAllCharsCol.length - 1 ||
          i === elmntAllCharsCol.length - 2) &&
          j !== 1) ||
        charsAll[index].roman.length === 0
      ) {
        texts[j].innerHTML = "X";
        texts[j].style.color = "var(--white-8)";
      } else {
        texts[j].innerHTML = "";
      }
    }
  }
}
