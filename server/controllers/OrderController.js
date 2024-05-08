const OrderModel = require("../models/Order");

class OrderController {
  // ORDER PRODUCTS
  static newOrder = async (req, res) => {
    try {
      await new OrderModel({ user: req.data1.id, ...req.body }).save();
      res.status(201).json({
        status: 'success',
        message: 'Order Successfully',
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        status: 'failed',
        message: error,
      });
    }
  };
  // GET ALL ORDERS
  static orders = async (req, res) => {
    try {
      const orders = await OrderModel.find({ user: req.data1._id }).populate("products.product");
      return res.status(200).json({
        status: 'success',
        message: 'successful',
        orders,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        status: 'failed',
        message: error.message,
      });
    }
  };
}

module.exports = OrderController;