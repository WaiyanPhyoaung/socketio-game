import httpServer from "./server/expressStuff/expressMain";
import "./server/socketStuff/socketMain";

try {
  httpServer.listen(8000);
  console.log("Server is listening on port: 8000");
} catch (error) {}
