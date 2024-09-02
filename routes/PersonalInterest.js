const express = require("express");
const personalInterestControllers = require("../controllers/PersonalInterest");
const authorize = require("../middlewares/Authorize");
const validate = require('../middlewares/Validate');

const router = express.Router();

router.post("/", authorize, validate, personalInterestControllers.getPersonalInterest);

module.exports = router;
