// Express Server
const app = require("express")();

// Socket Server
const server = require("http").createServer(app);

//Config socket server
const io = require("socket.io")(server);

io.on("connection", () => {
  /* … */
});

server.listen(3000, () => {
  console.log("Corriendo en localhost:3000");
});
