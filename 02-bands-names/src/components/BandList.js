import React, { useEffect, useState } from "react";
import BandAdd from "./BandAdd";

const BandList = ({ data }) => {
  const [bands, setBands] = useState(data);

  useEffect(() => {
    setBands(data);
  }, [data]);

  const createRows = () => {
    return bands.map((band) => (
      <tr key={band.id}>
        <td>
          <button className="btn btn-primary"> +1 </button>
        </td>

        <td>
          <input
            className="form-control"
            type="text"
            name=""
            id=""
            value={band.name}
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
