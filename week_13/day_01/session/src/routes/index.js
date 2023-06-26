const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "GET: api/" });
});

router.post("/", (req, res, next) => {
  res.status(200).json({ message: "POST: api/" });
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
