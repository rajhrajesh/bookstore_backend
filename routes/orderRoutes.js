const express = require("express");
const router = express.Router();
const { createOrder, getUserOrders, getOrders } = require("../controllers/orderController");

router.post("/", createOrder);
router.get("/", getUserOrders);
router.get("/", getOrders)

module.exports = router;
