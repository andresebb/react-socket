const TicketList = require("./TicketList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
    this.ticketList = new TicketList();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      //Numero de ticket actual
      socket.emit("ticket-actual", this.ticketList.actualTicket());

      // Por el mismo canal recibe y dispara el callback al frotend
      socket.on("solicitar-ticket", (data, callback) => {
        const nuevoTicket = this.ticketList.crearTicket();

        callback(nuevoTicket);
      });

      console.log("Cliente connectado");
    });
  }
}

module.exports = Sockets;
