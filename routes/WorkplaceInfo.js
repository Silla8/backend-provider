const express = require("express");
const workplaceInfoControllers = require("../controllers/WorkplaceInfo");
const authorize = require("../middlewares/Authorize");
const validate = require('../middlewares/Validate');

const router = express.Router();

router.post("/", authorize, validate, workplaceInfoControllers.getWorkplaceInfo);

module.exports = router;
