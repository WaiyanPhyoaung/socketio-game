import express from "express";
import { createServer } from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

// NOTE: static serve
app.use(express.static(path.join(__dirname, "public")));

const io = new Server(httpServer);

export { httpServer, io };
