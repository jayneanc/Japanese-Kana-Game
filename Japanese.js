var chars = null;
var ans = null;
var wrong = [];
var total = 0;
var count = 0;
const elmntStart = document.getElementById("game-start");
const elmntPlay = document.getElementById("game-play");
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
  chars = type === 1 ? [...hiragana] : [...katagana];
  count = 0;
  total = chars.length;
  gamePlay("start");
}

function gamePlay(status) {
  if (status === "start") {
    elmntStart.style.display = "none";
    elmntPlay.style.display = "block";
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

  // Record wrong answer
  if (value !== ans.roman) {
    wrong.push(ans);
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
