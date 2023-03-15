const router = require('express').Router();

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

const Cart = require('../models/Cart');

//Create
router.post('/', verifyTokenAndAuthorization, async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true },
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Delete
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Cart has been deleted');
    } catch (err) {
        res.status(404).json(err);
    }
});

//Get user cart
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.id });
        res.status(200).json(cart);
    } catch (err) {
        res.status(404).json(err);
    }
});

// Get All
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(404).json(err);
    }
});

module.exports = router;
