const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'edulearn-secret-key';

// Register new user
exports.register = (req, res) => {
    const { name, email, password, role } = req.body;
    
    // Basic validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password are required' });
    }
    
    // Check if user already exists
    User.findByEmail(email, (err, existingUser) => {
        if (err) {
            return res.status(500).json({ error: 'Registration failed' });
        }
        
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }
        
        // Create new user
        User.create({ name, email, password, role }, (err, newUser) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to create user' });
            }
            
            // Generate JWT token
            const token = jwt.sign(
                { userId: newUser.id, email: newUser.email, role: newUser.role },
                JWT_SECRET,
                { expiresIn: '24h' }
            );
            
            res.status(201).json({
                message: 'User registered successfully',
                user: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role
                },
                token
            });
        });
    });
};

// Login user
exports.login = (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    
    // Find user by email
    User.findByEmail(email, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Login failed' });
        }
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        // Verify password
        User.verifyPassword(password, user.password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }
            
            // Generate JWT token
            const token = jwt.sign(
                { userId: user.id, email: user.email, role: user.role },
                JWT_SECRET,
                { expiresIn: '24h' }
            );
            
            res.json({
                message: 'Login successful',
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token
            });
        });
    });
};

// Get user profile
exports.getProfile = (req, res) => {
    const userId = req.user.userId;
    
    User.findById(userId, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch profile' });
        }
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    });
};