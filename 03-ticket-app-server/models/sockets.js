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

      socket.on(
        "siguiente-ticket-trabajar",
        ({ agente, escritorio }, callback) => {
          const suTicket = this.ticketList.asignarTicket(agente, escritorio);

          callback(suTicket);

          this.io.emit("ticket-asignado", this.ticketList.ultimos12);
        }
      );

      console.log("Cliente connectado");
    });
  }
}

module.exports = Sockets;
