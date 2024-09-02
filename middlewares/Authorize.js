const dotenv = require("dotenv");

dotenv.config();

const Authorize = async (req, res, next) => {
  try {
    // Checking if the user has correct api key
    const apiKey = req.header("apiKey");

    if (apiKey === process.env.apiKey) {
      next();
    } else {
      
      res.status(403).json("Not authorized");
    }
  } catch (error) {
    res.status(403).json("Not authorized");
  }
};

module.exports= Authorize;