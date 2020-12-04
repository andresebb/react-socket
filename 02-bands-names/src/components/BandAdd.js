import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

const BandAdd = () => {
  const [valor, setValor] = useState("");

  const { socket } = useContext(SocketContext);

  const crearBanda = (name) => {
    socket.emit("crear-banda", { name });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (valor.length > 0) {
      crearBanda(valor);
    }
  };
  return (
    <div>
      <h1>Agregar Bandas</h1>

      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          name=""
          id=""
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Agregar una nueva banda"
        />
      </form>
    </div>
  );
};

export default BandAdd;
