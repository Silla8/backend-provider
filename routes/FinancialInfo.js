const express = require("express");
const financialInfoControllers = require("../controllers/FinancialInfo");
const authorize = require("../middlewares/Authorize");

const router = express.Router();

router.post("/", authorize, financialInfoControllers.getFinancialInfo);

module.exports = router;
