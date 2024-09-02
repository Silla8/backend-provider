const express = require("express");
const personalInfoControllers = require("../controllers/personalInfo");
const authorize = require("../middlewares/Authorize");
const validate = require("../middlewares/Validate");

const router = express.Router();

router.post("/", authorize, validate, personalInfoControllers.getPersonalInfo);

module.exports = router;
