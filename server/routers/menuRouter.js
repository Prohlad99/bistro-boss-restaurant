const express = require("express");
const { getAllMenu } = require("../controllers/menuController");
const router = express.Router();

//get all menu
router.get("/", getAllMenu);

module.exports = router;
