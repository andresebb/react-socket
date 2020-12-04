const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      socket.emit("current-bands", this.bandList.getBands());

      console.log("Cliente connectado");
    });
  }
}

module.exports = Sockets;
