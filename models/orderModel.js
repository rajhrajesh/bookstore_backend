const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  books: [
    { bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }, quantity: { type: Number } }
  ],
  totalAmount: { type: Number, required: true },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
