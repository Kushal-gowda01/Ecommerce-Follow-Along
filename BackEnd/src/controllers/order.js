const express = require('express');
const router = express.Router();
const Order = require('../models/order'); 
const User = require('../models/userModel');   

router.post('/placeorder', async (req, res) => {
    try {
        const { email, orderItems, shippingAddress } = req.body;
        if (!email) {   
            return res.status(400).json({ message: 'Email is required.' });
        }
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ message: 'Order items are required.' });
        }   
        if (!shippingAddress) {
            return res.status(400).json({ message: 'Shipping address is required.' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            
            const order = new Order({
                user: user._id,
                orderItems: [item], 
                shippingAddress,
                totalAmount,    
            });
            return order.save();
        });
        const orders = await Promise.all(orderPromises);
        
        res.status(201).json({ message: 'Orders placed and cart cleared successfully.', orders });
    } catch (error) {
        console.error('Error placing orders:', error);
        res.status(500).json({ message: error.message });
    }
});

router.get('/myorders', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: 'Email is required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const orders = await Order.find({ user: user._id });

        res.status(200).json({ orders });
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: error.message });
    }
});

router.get('/getOrders', async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: 'Email is required.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        const orders = await Order.find({ user: user._id }).populate("products.product");

        if (orders.length === 0) {
            return res.status(200).json({ message: 'No orders found for this user.', orders: [] });
        }

        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Error fetching orders", error });
    }
});
router.patch('/cancelorder/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;
        console.log("fff")
        const order = await Order.findById(orderId);
        console.log(order);
        if (!order) {
            return res.status(404).json({ message: 'Order not found.' });
        }

        order.orderStatus = 'Cancelled';
        await order.save();

        res.status(200).json({ message: 'Order cancelled successfully.', order });
    } catch (error) {
        console.error('Error cancelling order:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;