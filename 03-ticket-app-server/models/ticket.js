const { v4: uuidv4 } = require("uuid");

class Ticket {
  constructor(numero) {
    this.id = uuidv4();
    this.number = numero;
    this.agente = null;
    this.escritorio = null;
  }
}

module.exports = Ticket;
