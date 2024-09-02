const pool = require('../database');

exports.getFinancialInfo = async (req, res) => {
  try {

    const { pin, allowedAttr }= req.body;

    const result = await pool.query(`select ${allowedAttr} from financial_info where pin = $1`, [pin]);

    if(result.rows.length){
        return res.status(200).json(result.rows[0]);
      }
  
      return res.status(404).json("Invalid pin");
  
  } catch (error) {
    return res.status(400).json("Invalid Request");
  }
};
