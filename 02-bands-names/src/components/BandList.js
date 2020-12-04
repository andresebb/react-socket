import React from "react";

const BandList = () => {
  const createRows = () => {
    return (
      <tr>
        <td>
          <button className="btn btn-primary"> +1 </button>
        </td>

        <td>
          <input className="form-control" type="text" name="" id="" />
        </td>
        <td> 15</td>
        <td>
          <button className="btn btn-danger">Borrar</button>
        </td>
      </tr>
    );
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
