const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

router.post("/refresh_token", authController.generateAccessToken);

module.exports = router;
