// Express Server
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    //http Server
    this.server = http.createServer(this.app);

    //Configuraciones de sockets
    this.io = socketio(this.server, {
      /* Config */
    });
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    //Inicializar middlewares
    this.middlewares();

    //Inicializar Sockets
    this.configurarSockets();

    //Inicializar Server
    this.server.listen(this.port, () => {
      console.log(`Corriendo en http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
