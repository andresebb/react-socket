const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.ultimoNumero = 0;
    this.pendientes = [];
    this.asignados = [];
  }

  get siguienteNumero() {
    this.ultimoNumero++;
    return this.ultimoNumero;
  }

  //2 que se veran en la tarjetas y 10 en el historial
  get ultimos12() {
    return this.asignados.slice(0, 12);
  }

  crearTicket() {
    const nuevoTicket = new Ticket(this.siguienteNumero);
    this.pendientes.push(nuevoTicket);
    return nuevoTicket;
  }

  asignarTicket(agente, escritorio) {
    if (this.pendientes.length === 0) {
      return null;
    }

    const siguienteTicket = this.pendientes.shift();
    siguienteTicket.agente = agente;
    siguienteTicket.escritorio = escritorio;

    this.asignados.unshift(siguienteTicket);

    return siguienteTicket;
  }
}

module.exports = TicketList;
