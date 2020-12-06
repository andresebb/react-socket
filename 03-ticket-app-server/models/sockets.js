class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      // socket.emit("mensaje-bienvendia", {
      //   msg: "Bienvenido al server",
      //   fecha: new Date(),
      // });

      // socket.on("mensaje-to-server", (data) => {
      //   console.log(data);

      //   this.io.emit("mensaje-from-server", data);
      // });
      console.log("Cliente connectado");
    });
  }
}

module.exports = Sockets;
