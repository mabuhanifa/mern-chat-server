const express = require("express");
const router = express.Router();

router.route("/").post(registerUser);
router.post9("/login", loginUser);

module.exports = router;
