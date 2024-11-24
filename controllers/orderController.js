const Order = require("../models/orderModel");

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { bookIds, totalAmount } = req.body;
    const order = new Order({
      bookIds,
      totalAmount,
      userId: req.user._id, // Assuming user is authenticated
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order" });
  }
};

// Get all orders for the user
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate("bookIds");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to get orders" });
  }
};


exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('books.bookId').lean();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to get orders", error: error.message });
  }
};