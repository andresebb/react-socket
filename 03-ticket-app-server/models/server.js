// Express Server
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //http Server
    this.server = http.createServer(this.app);

    //Configuraciones de sockets
    this.io = socketio(this.server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
      },
    });

    this.sockets = new Sockets(this.io);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    //CORS
    this.app.use(cors());

    // Get de los ultimos tickets con res
    this.app.use("/ultimos", (req, res) => {
      res.json({
        ok: true,
        ultimos: this.sockets.ticketList.ultimos12,
      });
    });
  }

  // configurarSockets() {
  //   new Sockets(this.io);
  // }

  execute() {
    //Inicializar middlewares
    this.middlewares();

    // //Inicializar Sockets
    // this.configurarSockets();

    //Inicializar Server
    this.server.listen(this.port, () => {
      console.log(`Corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
