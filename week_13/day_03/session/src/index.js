const express = require("express");
const server = express();
const routes = require('./routes')
const PORT = 4000;
const { initDB } = require('./services/db')
const cors = require('cors');

server.use(cors());
server.use(express.json());

//routes
server.use("/api", routes);


server.listen(PORT, () => {
  initDB();
  console.log(`el servidor esta escuchando en el puerto: ${PORT}`);
});
