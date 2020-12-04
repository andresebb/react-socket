import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import BandAdd from "./BandAdd";

const BandList = () => {
  const { socket } = useContext(SocketContext);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    socket.on("current-bands", (data) => {
      setBands(data);
    });
  }, [socket]);

  const votar = (id) => {
    socket.emit("votar-banda", id);
  };

  const borrarBanda = (id) => {
    socket.emit("borrar-banda", id);
  };

  const cambiarNombre = (id, newName) => {
    socket.emit("cambiar-banda-nombre", {
      id,
      newName,
    });
  };

  //El value
  const cambioNombre = (event, id) => {
    const nuevoNombre = event.target.value;

    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = nuevoNombre;
        }

        return band;
      })
    );
  };

  const onPerdioFoco = (id, nombre) => {
    cambiarNombre(id, nombre);
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary" onClick={() => votar(band.id)}>
            +1
          </button>
        </td>

        <td>
          <input
            className="form-control"
            type="text"
            name=""
            id=""
            value={band.name}
            onChange={(event) => cambioNombre(event, band.id)}
            onBlur={() => onPerdioFoco(band.id, band.name)}
          />
        </td>
        <td> {band.votes}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => borrarBanda(band.id)}
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Vota</th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default BandList;
