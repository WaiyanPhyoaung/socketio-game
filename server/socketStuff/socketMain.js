import { log } from "console";
import { io } from "../../server";

import Orb from "./classes/Orb";
import PlayerConfig from "./classes/PlayerConfig";
import PlayerData from "./classes/PlayerData";
import Player from "./classes/Plyer";
import { disconnect } from "process";

const orbs = [];
let players = [];
let tickInterval;
const intervalDuration = 1000;

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
  socket.on("init", (clientPlayer, ackCb) => {
    // Server emit not only one socket all the sockets inside game room.
    // if we don't check there will be many emiiters whenever new player(socket) join
    if (!players.length) {
      tickInterval = setInterval(() => {
        io.to("game").emit("tick", players);
      }, intervalDuration);
    }
    socket.join("game");
    const playerData = new PlayerData(clientPlayer.name, gameSettings);
    const playerCofig = new PlayerConfig(gameSettings);
    const player = new Player(socket.id, playerData, playerCofig);
    players.push(player);
    ackCb(orbs);

    socket.on("disconnect", () => {
      console.log(socket.id, " is disconnected");

      players = players.filter((player) => player.socketId !== socket.id);

      if (!players.length) {
        clearInterval(tickInterval);
      }
    });
  });
});

function initGame() {
  for (let i = 0; i < gameSettings.numberOfOrbs; i++) {
    orbs.push(new Orb(gameSettings));
  }
}
