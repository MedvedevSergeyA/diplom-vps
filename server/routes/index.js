const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/comment", require("./comment.routes"));
router.use("/device", require("./device.routes"));
router.use("/user", require("./user.routes"));
router.use("/category", require("./category.routes"));

module.exports = router;
