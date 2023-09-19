const Menu = require("../models/menu");

//get all menu
async function getAllMenu(req, res, next) {
  try {
    const menu = await Menu.find();
    res.status(200).json(menu);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllMenu,
};
