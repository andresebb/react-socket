import React, { useEffect, useState } from "react";
import BandAdd from "./BandAdd";

const BandList = ({ data, votar }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

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
    console.log(id, nombre);

    //TODO:
    //Disparar el evento del socket
  };

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary" onClick={() => votar(band.id)}>
            {" "}
            +1{" "}
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
          <button className="btn btn-danger">Borrar</button>
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
