const express = require("express");
const Category = require("../modals/Category");
const router = express.Router({ mergeParams: true });
router.get("/", async (req, res) => {
  try {
    const list = await Category.find();
    res.send(list);
  } catch (e) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
module.exports = router;
