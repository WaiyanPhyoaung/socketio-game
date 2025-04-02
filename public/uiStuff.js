const width = window.innerWidth;
const height = window.innerHeight;

const canvas = document.querySelector("#the-canvas");
const context = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;
const player = {};
let orbs = [];
let players = [];

const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
const spawnModal = new bootstrap.Modal(document.querySelector("#spawnModal"));
const loginForm = document.querySelector("#login-form");
const nameInput = document.querySelector("#name-input");
const playerName = document.querySelector("#player-name");
const startGame = document.querySelector(".start-game");
const hiddenOnStartElArr = document.querySelectorAll(".hiddenOnStart");

window.onload = (_) => {
  loginModal.show();
};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  player.name = nameInput.value;
  loginModal.hide();
  spawnModal.show();
  playerName.textContent = player.name;
});

startGame.addEventListener("click", (_) => {
  spawnModal.hide();
  Array.from(hiddenOnStartElArr).forEach((el) => {
    el.removeAttribute("hidden");
  });
  init();
});
