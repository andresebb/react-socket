import React, { useState, useEffect, useContext } from "react";
import BandAdd from "./components/BandAdd";
import BandList from "./components/BandList";
import { BandChart } from "./components/BandChart";

import io from "socket.io-client";
import { SocketContext } from "./context/SocketContext";

const connectSocketServer = () => {
  const socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  return socket;
};

const App = () => {
  const [socket] = useState(connectSocketServer());

  const { online } = useContext(SocketContext);

  return (
    <>
      <div className="container">
        <div className="alert">
          <p>
            Service Status:
            {online ? (
              <span className="text-success">Online</span>
            ) : (
              <span className="text-danger">Offline</span>
            )}
          </p>
        </div>

        <h1>BandNames</h1>
        <hr />

        <div className="row">
          <div className="col-8">
            <BandChart />
          </div>
        </div>

        <div className="row">
          <div className="col-8">
            <BandList />
          </div>
          <div className="COL-4">
            <BandAdd />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
