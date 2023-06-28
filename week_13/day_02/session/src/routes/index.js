const { Router } = require("express");
const router = Router();
const { get, run } = require('./../services/db');
// api/
router.get("/", async(req, res, next) => {
  try {
    const toDos = await get('SELECT * FROM todos')
    const data = toDos.map((toDo)=>{
      return {
        id: toDo.id,
        title: toDo.title,
        description: toDo.description,
        isDone: Boolean(toDo.isDone)
      }
    })
    res.status(200).json({ message: "To-dos retrieved successfully", data });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'error en el servidor', error })
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const data = await run('INSERT INTO todos (title, description) VALUES (?,?)',[title,description])
    res.status(200).json({ message: "To-do created successfully", toDo:{} });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'error en el servidor', error })
  }
});

router.patch("/:id", (req, res, next) => {
  //console.log(req.params);
  const { id } = req.params;
  res.status(200).json({ message: `PATCH: api/${id}` });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({ message: `DELETE: api/${id}` });
});

module.exports = router;
