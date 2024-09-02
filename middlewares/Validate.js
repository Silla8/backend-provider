const Validate = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(400).json("Invalid Request");
    } else {
      if (!req.body.pin.length) {
        return res.status(400).json("Invalid Request");
      }
    }
  } catch (error) {
    return res.status(400).json("Invalid Request");
  }
  next();
};

module.exports= Validate;