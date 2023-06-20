const { Router } = require("express");
const router = Router();
const { users } = require("./../db/array");

router.get("/", (request, response, next) => {
  response.status(200).json({ message: "lista de usuarios", data: users });
});

router.post("/", (request, response, next) => {
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

router.put("/", (request, response, next) => {
  const { id, name, age } = request.body;
  const userSelect = users.filter((user) => user.id === id);
  if (userSelect.length === 0) {
    return response
      .status(200)
      .json({ message: "no existe el usuario en la db" });
  }
  users.map((user) => {
    if (user.id === id) {
      user.name = name;
      user.age = age;
    }
    return user;
  });
  response.status(200).json({ message: "put" });
});

router.delete("/", (request, response, next) => {
  response.status(200).json({ message: "delete" });
});

module.exports = router;
