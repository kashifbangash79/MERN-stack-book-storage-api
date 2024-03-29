var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

router.post("/add", userController.createUser);
router.post("/login", userController.login);

module.exports = router;