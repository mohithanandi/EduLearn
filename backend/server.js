const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// SIMPLE ROUTES - NO IMPORTS NEEDED

// Courses API
app.get('/api/courses', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Full Stack Web Development Bootcamp",
            description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world projects.",
            category: "tech",
            duration: "12 weeks",
            rating: 4.8
        },
        {
            id: 2,
            title: "Digital Marketing Strategy", 
            description: "Learn to create effective marketing campaigns across digital channels.",
            category: "business", 
            duration: "8 weeks",
            rating: 4.6
        },
        {
            id: 3,
            title: "UI/UX Design Fundamentals",
            description: "Create intuitive and beautiful user interfaces with modern design principles.",
            category: "design",
            duration: "10 weeks", 
            rating: 4.9
        }
    ]);
});

// Testimonials API
app.get('/api/testimonials', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Software Developer",
            text: "EduLearn completely transformed my career!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen", 
            role: "Digital Marketer",
            text: "The instructors are incredibly knowledgeable!",
            rating: 5
        }
    ]);
});

// Users API
app.post('/api/users/register', (req, res) => {
    res.json({ message: "User registered successfully" });
});

app.post('/api/users/login', (req, res) => {
    res.json({ message: "Login successful", token: "sample-token" });
});

// Main API endpoint
app.get('/api', (req, res) => {
    res.json({
        message: 'EduLearn API is running!',
        version: '1.0.0'
    });
});

// Serve frontend for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 EduLearn Server running on port ${PORT}`);
    console.log(`📚 Frontend: http://localhost:${PORT}`);
    console.log(`🔗 API: http://localhost:${PORT}/api`);
    console.log('✅ Simple version - No dependencies needed!');
});