import React, { useState } from "react";

const BandAdd = ({ crear }) => {
  const [valor, setValor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (valor.length > 0) {
      crear(valor);
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
