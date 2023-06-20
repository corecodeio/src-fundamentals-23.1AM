const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(express.json());//tranforma informacion a json
server.use(morgan('dev'));
//middeleware
// server.use((request, response, next) => {
//   console.log("log1");
//   next();
//   //return response.status(200).send("hello world");
//   //response.status(200).send("hello world");
// });

// server.use((request, response, next) => {
//   console.log("log2");
//   next();
//   //response.status(200).send("hello world");
// });

// server.use((request, response, next) => {
//   console.log("log3");
//   response.status(200).send("hello world");
// });

const middle1 = (request, response, next) => {
  console.log("log1");
  const body = request.body;
  console.log(body)
  next();
};

const middle2 = (request, response, next) => {
  console.log("log2");
  next();
};

const middle3 = (request, response, next) => {
  console.log("log3");
  next();
};
const middle4 = (request, response, next) => {
  console.log("log4");
  response.status(200).send("hello world");
};
server.post('/user', middle4);
server.use(middle1, middle2, middle3, middle4);

//server.use(middle2)
//server.use(middle3)
//server.use(middle4)

server.listen(4000, () => {
  console.log("server is running on port 4000");
});
