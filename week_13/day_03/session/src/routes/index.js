const { Router } = require("express");
const router = Router();
const { get, run } = require("./../services/db");
const { patchValidator } = require('./../middlewares/validators');
// api/
router.get("/", async (req, res, next) => {
  try {
    const toDos = await get("SELECT * FROM todos");
    const data = toDos.map((toDo) => {
      return {
        id: toDo.id,
        title: toDo.title,
        description: toDo.description,
        isDone: Boolean(toDo.isDone),
      };
    });
    res.status(200).json({ message: "To-dos retrieved successfully", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const data = await run(
      "INSERT INTO todos (title, description) VALUES (?,?)",
      [title, description]
    );
    console.log(data.lastID);

    res.status(200).json({
      message: "To-do created successfully",
      toDo: {
        id: data.lastID,
        title,
        description,
        isDone: false,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error });
  }
});

router.patch("/:id", patchValidator, async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDo = await get("SELECT * FROM todos WHERE id = ?", [id]); // []
    if (toDo.length === 0) {
      return res
        .status(404)
        .json({ message: `el ID no se encuentra en la db` });
    }
    const { title, description, isDone } = req.body;
    const isDoneNumber = Number(isDone);
    await run(
      `UPDATE todos SET title = ?, description = ?, isDone = ? WHERE id = ?`,
      [title, description, isDoneNumber, id]
    );
    res.status(200).json({
      message: `To-do updated successfully`,
      toDo: {
        id,
        title,
        description,
        isDone,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDo = await get("SELECT * FROM todos WHERE id = ?", [id]); // [{}]
    if (toDo.length === 0) {
      return res
        .status(404)
        .json({ message: `el ID no se encuentra en la db` });
    }
    await run("DELETE FROM todos WHERE id = ?", [id]);
    res.status(200).json({
      message: `To-do deleted successfully`,
      toDo: {
        id: toDo[0].id,
        title: toDo[0].title,
        description: toDo[0].description,
        isDone: Boolean(toDo[0].isDone),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error en el servidor", error });
  }
});

module.exports = router;
