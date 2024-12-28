let roundsSelect = document.querySelector("#roundsSelect");
let roundsSelectContainer = document.querySelector("#roundsSelectContainer");

let errorMessagePara = document.querySelector("#errorMessagePara");

let popup = document.querySelector("#popup");
let closeButton = document.querySelector("#closeButton");

let playButton = document.querySelector("#playButton");
let nextRoundButton = document.querySelector("#nextRoundButton");
let initButton = document.querySelector("#initButton");

let gameControls = document.querySelectorAll(".gameControls");
let userControls = document.querySelectorAll(".userControls");
let computerControls = document.querySelectorAll(".computerControls");

let roundID = document.querySelector("#roundID");
let roundsSpan = roundID.querySelector("span");

let countDown = document.querySelector("#countDown");

let userScore = document.querySelector("#userScore");
vuserFireWork = document.querySelector("#userFireWork");

let computerScore = document.querySelector("#computerScore");
let computerFireWork = document.querySelector("#computerFireWork");

let isGameStarted = false;
let numberOfRounds = undefined;

let currentRound = undefined;

let isGameControlKeysEnabled = false;

const LONG_DELAY = 1300;
const DELAY = 1000;
const SHORT_DELAY = 300;

init();
setUpKeyDownEvents();

function init() {
  let isGameStarted = false;
  userScore.innerText = "0";
  computerScore.innerText = "0";

  show([roundsSelectContainer, playButton]);
  hide([countDown, roundID, nextRoundButton, initButton]);

  roundsSelect.value = "5";
}

function startGame() {
  if (roundsSelect.value === "") {
    displayError("Choose number of rounds above");
    return;
  }
  numberOfRounds = +roundsSelect.value;
  isGameStarted = true;

  hide([roundsSelectContainer, playButton]);
  show([roundID, countDown]);

  currentRound = 1;
  resetCountDown();
  triggerCountDown();
}

function nextRound() {
  hide([nextRoundButton]);
  show([countDown]);

  resetCountDown();
  triggerCountDown();
}

function resetCountDown() {
  countDown.innerText = "4";
  addClasses([countDown], ["animate-[bounce_1s_ease-in-out_infinite]"]);
}

function triggerCountDown() {
  if (+countDown.innerText > 1) {
    countDown.innerText = +countDown.innerText - 1;
    setTimeout(() => {
      triggerCountDown();
    }, DELAY);
  } else {
    countDown.innerText = "Go!!!";
    removeClasses([countDown], ["animate-[bounce_1s_ease-in-out_infinite]"]);

    enable(gameControls);
    isGameControlKeysEnabled = true;
  }
}

function select(userInput) {
  showSelection(userControls[userInput - 1]);

  let computerInput = Math.floor(Math.random() * 3) + 1;

  showSelection(computerControls[computerInput - 1]);

  disable(gameControls, SHORT_DELAY);
  isGameControlKeysEnabled = false;

  if (userInput === computerInput) {
    countDown.innerText = "Draw!";
  } else if (
    (userInput === 1 && computerInput === 3) ||
    (userInput === 2 && computerInput === 1) ||
    (userInput === 3 && computerInput === 2)
  ) {
    updateScore(userScore);
    show([userFireWork]);
    hide([userFireWork], DELAY);
  } else {
    updateScore(computerScore);
    show([computerFireWork]);
    hide([computerFireWork], DELAY);
  }

  if (currentRound < numberOfRounds) {
    prepareForNextRound();
  } else {
    gameOver();
    show([initButton]);
  }
}

function showSelection(control) {
  addClasses([control], ["bg-green-200", "border-green-600", "shadow-lg"]);
  setTimeout(() => {
    removeClasses([control], ["bg-green-200", "border-green-600", "shadow-lg"]);
  }, SHORT_DELAY);
}

function gameOver() {
  const userScoreValue = +this.userScore.innerText;
  const computerScoreValue = +this.computerScore.innerText;

  if (userScoreValue == computerScoreValue) {
    countDown.innerText = "Game over. It was a Draw!";
  } else if (userScoreValue > computerScoreValue) {
    countDown.innerText = "Game over. You Won!";
  } else {
    countDown.innerText = "Game over. You Lost!";
  }
}

function prepareForNextRound() {
  setTimeout(() => {
    currentRound++;
    roundsSpan.innerText = currentRound;
    show([nextRoundButton]);
  }, DELAY);
}

function updateScore(element) {
  countDown.innerText = "";
  element.innerText = +element.innerText + 1;
}

function enable(elements, delay) {
  setTimeout(
    () => {
      elements.forEach((element) => {
        element.disabled = false;
      });
    },
    delay ? delay : 0
  );
}

function disable(elements, delay) {
  setTimeout(
    () => {
      elements.forEach((element) => {
        element.disabled = true;
      });
    },
    delay ? delay : 0
  );
}

function openPopup() {
  removeClasses([popup], ["hidden"]);
}

function closePopup() {
  addClasses([popup], ["hidden"]);
}

function addClasses(elements, classes) {
  elements.forEach((element) => {
    classes.forEach((className) => {
      element.classList.add(className);
    });
  });
}

function removeClasses(elements, classes) {
  elements.forEach((element) => {
    classes.forEach((className) => {
      element.classList.remove(className);
    });
  });
}

function hide(elements, delay) {
  setTimeout(
    () => {
      elements.forEach((element) => {
        element.classList.add("hidden");
      });
    },
    delay ? delay : 0
  );
}

function show(elements) {
  elements.forEach((element) => {
    element.classList.remove("hidden");
  });
}

function displayError(message) {
  errorMessagePara.innerText = message;
  setTimeout(() => {
    errorMessagePara.innerText = "";
  }, LONG_DELAY);
}

function setUpKeyDownEvents() {
  document.onkeydown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
    } else if (event.key === "Escape") {
      closePopup();
    } else if (event.key.toLowerCase() === "r" && isGameControlKeysEnabled) {
      select(1);
    } else if (event.key.toLowerCase() === "p" && isGameControlKeysEnabled) {
      select(2);
    } else if (event.key.toLowerCase() === "s" && isGameControlKeysEnabled) {
      select(3);
    } else if (event.key === " ") {
      if (!playButton.classList.contains("hidden")) {
        startGame();
      } else if (!nextRoundButton.classList.contains("hidden")) {
        nextRound();
      } else if (!initButton.classList.contains("hidden")) {
        init();
      }
    }
  };
}