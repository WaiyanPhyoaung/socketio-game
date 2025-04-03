import { setInterval } from "timers/promises";

const socket = io.connect("http://localhost:8000");

socket.on("connect", () => {
  console.log("Connected to socket server");
});

socket.on("tick", (playerArr) => {
  console.log("players", playerArr);
  players = playerArr;
});

async function initSocketStuff() {
  const serverOrbs = await socket.emitWithAck("init", player);
  setInterval(() => {
    socket.emit("tock", { xVector: player.xVector, yVector: player.yVector });
  }, 1000);
  orbs = serverOrbs;
  console.log("orbs", orbs);
}
