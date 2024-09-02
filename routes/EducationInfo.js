const express = require("express");
const educationInfoControllers = require("../controllers/EducationInfo");
const authorize = require("../middlewares/Authorize");
const validate = require('../middlewares/Validate');

const router = express.Router();

router.post("/", authorize, validate, educationInfoControllers.getEducationInfo);

module.exports = router;
