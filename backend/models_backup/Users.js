const express = require('express');
const router = express.Router();

// Register user - SIMPLE VERSION
router.post('/register', (req, res) => {
    res.json({
        message: "User registered successfully",
        user: {
            id: 1,
            name: req.body.name,
            email: req.body.email
        }
    });
});

// Login user - SIMPLE VERSION
router.post('/login', (req, res) => {
    res.json({
        message: "Login successful",
        user: {
            id: 1,
            name: "John Doe",
            email: req.body.email
        }
    });
});

module.exports = router;