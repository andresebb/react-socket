// Express Server
const express = require("express");
const app = express();

// Socket Server
const server = require("http").createServer(app);

//Config socket server
const io = require("socket.io")(server);

// Desplegar nuestro directorio publico
app.use(express.static(__dirname + "/public"));

//Dispositivo que se conecta a mi socket
io.on("connection", (socket) => {
  socket.emit("mensaje-bienvendia", {
    msg: "Bienvenido al server",
    fecha: new Date(),
  });
});

server.listen(3000, () => {
  console.log("Corriendo en localhost:3000");
});
