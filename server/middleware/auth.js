const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
require('dotenv').config();

const checkAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token?.split("token=")[0] || null;
    if (token == null || token == undefined) {
      return res
        .status(401)
        .json({ status: "failed", message: "UnAuthorized User, Please login!" });
    }
    else {
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
      if (!verifyToken) {
        res.clearCookie("token");
        return res.status(401).json({
          status: 'Failed',
          message: 'Incorrect Token',
        });
      }
      const data = await UserModel.findOne({ _id: verifyToken.ID });
      if (!data) {
        res.clearCookie("token");
        return res.status(401).json({
          status: 'Failed',
          message: 'User not found! Please login again',
        });
      }
      req.data1 = data;
      next();
    }
  } catch (error) {
    res.clearCookie("token");
    console.log(error.message);
    return res.status(401).json({
      status: 'Failed',
      message: error.message,
    });
  }
};

module.exports = checkAuth;