const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketEvents();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("Cliente connected");

      // Emitir al cleinte conectado todas las bandas actuales
      socket.emit("current-bands", this.bandList.getBands());

      //Votar por la banda
      socket.on("votar-banda", (id) => {
        this.bandList.increseVotes(id);
        this.io.emit("current-bands", this.bandList.getBands());
      });
    });
  }
}

module.exports = Sockets;
