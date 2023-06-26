const express = require("express");
const server = express();
const routes = require('./routes')
const PORT = 4000;
const { initDB } = require('./services/db')

//routes
server.use("/api", routes);


server.listen(PORT, () => {
  initDB();
  console.log(`el servidor esta escuchando en el puerto: ${PORT}`);
});
