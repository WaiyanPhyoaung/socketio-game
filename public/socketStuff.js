const socket = io.connect("http://localhost:8000");

socket.on("connect", () => {
  console.log("Connected to socket server");
});

async function initSocketStuff() {
  const serverOrbs = await socket.emitWithAck("init", player);
  orbs = serverOrbs;
  console.log("orbs", orbs);
}
