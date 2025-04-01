import { io } from "../../server";

import Orb from "./classes/Orb";

const orbs = [];

const gameSettings = {
  numberOfOrbs: 500,
  defaultSpeed: 6,
  defaultSize: 6,
  defaultZoom: 1.5,
  worldWidth: 500,
  worldHeight: 500,
  genericOrbSize: 5,
};

initGame();

io.on("connect", (socket) => {
  console.log("socket is connected");
  socket.on("init", (player, ackCb) => {
    console.log("player", player);
    ackCb(orbs);
  });
});

function initGame() {
  for (let i = 0; i < gameSettings.numberOfOrbs; i++) {
    orbs.push(new Orb(gameSettings));
  }
}
