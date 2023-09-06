const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

router.post("/signup", authController.otp);
router.post("/login", authController.login);
router.post("/otpVerification", authController.otpVerification);
router.post("/otpGenerator", authController.otp);
router.post("/details", authController.details);

module.exports=router; 
