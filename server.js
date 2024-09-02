const dotenv = require('dotenv');
const express = require("express");
const cors = require("cors");
const personalInfoRoutes = require("./routes/PersonalInfo");
const workplaceInfoRoutes = require("./routes/WorkplaceInfo");
const personalInterestRoutes = require("./routes/PersonalInterest");
const financialInfoRoutes = require("./routes/FinancialInfo");
const familyInfoRoutes = require("./routes/FamilyInfo");
const educationInfoRoutes = require("./routes/EducationInfo");
const verify = require('./middlewares/VerifyJSON');
const errorHandlerJSON = require('./middlewares/ErrorHandler');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json({ verify: verify }));
app.use(errorHandlerJSON);


app.use("/api/personal_info", personalInfoRoutes);
app.use("/api/workplace_info", workplaceInfoRoutes);
app.use("/api/personal_interest", personalInterestRoutes);
app.use("/api/financial_info", financialInfoRoutes);
app.use("/api/family_info", familyInfoRoutes);
app.use("/api/education_info", educationInfoRoutes);

app.listen(process.env.PORT || 3002, () => {
  console.log(`Server is listening on port ${3002}`);
});
