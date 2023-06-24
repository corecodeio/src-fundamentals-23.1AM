const { Router } = require("express");
const router = Router();
const userRoutes = require('./user')

router.use('/user',userRoutes)

//router.use('/news',userRoutes)

module.exports = router;
