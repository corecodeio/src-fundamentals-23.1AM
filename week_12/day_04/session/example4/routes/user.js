const { Router } = require("express");
const router = Router();
const { users } = require("./../services/array");
const { get } = require("./../services/db");
const validatorData = require("./../middlewares/validatorData");

router.get("/", async (request, response, next) => {
  try {
    const listUsers = await get("SELECT * FROM users", []);

    response
      .status(200)
      .json({ message: "lista de usuarios", data: listUsers });
  } catch (error) {
    response.status(500).json({ message: "hay un error de servidor" });
  }
});

router.post("/", validatorData, (request, response, next) => {
  try {
    const { name, age } = request.body;
    const id = users.length + 1;
    const newUser = {
      id,
      name,
      age,
    };
    users.push(newUser);
    response.status(200).json({ message: "se agrego usuario", user: newUser });
  } catch (error) {
    response.status(500).json({ message: "hay un error de servidor" });
  }
});

router.put("/", validatorData, (request, response, next) => {
  const { id, name, age } = request.body;
  const userSelect = users.filter((user) => user.id === id); //[{}]
  if (userSelect.length === 0) {
    return response
      .status(200)
      .json({ message: "no existe el usuario en la db" });
  }
  // const numbers =[1,2,3,4,5,6,7,8,9,10]
  // numbers.map((num)=>{
  //   if(num === 5){
  //     return "era el 5"
  //   }
  // })
  // [1,2,3,4,"era el 5",6,7,8,9,10]
  users.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.age = age;
    }
    return user;
  });
  response
    .status(200)
    .json({ message: `el usuario ID:${id} a sido modificado` });
});

router.delete("/", (request, response, next) => {
  const { id } = request.body;
  const userSelect = users.filter((user) => user.id === id);
  if (userSelect.length === 0) {
    return response
      .status(200)
      .json({ message: "no existe el usuario en la db" });
  }

  // const test = [1,2,3,4,5,6,7,8,9,10]
  // test.splice(index,1)

  users.map((user, index) => {
    if (user.id === id) {
      users.splice(index, 1);
    }
  });

  response
    .status(200)
    .json({ message: `el usuario ID:${id} a sido eliminado` });
});

module.exports = router;
