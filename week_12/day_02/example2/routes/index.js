const { Router } = require("express");
const router = Router();
const userRoutes = require('./user')

router.use('/user',userRoutes)

//router('/news',userRoutes)

module.exports = router;
