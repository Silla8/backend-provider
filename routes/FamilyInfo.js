const express = require("express");
const familyInfoControllers = require("../controllers/FamilyInfo");
const authorize = require("../middlewares/Authorize");
const validate = require('../middlewares/Validate');


const router = express.Router();

router.post("/", authorize, validate, familyInfoControllers.getFamilyInfo);

module.exports = router;
