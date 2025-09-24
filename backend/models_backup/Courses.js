const express = require('express');
const router = express.Router();

// Get all courses - SIMPLE VERSION
router.get('/', (req, res) => {
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

// Get courses by category - SIMPLE VERSION
router.get('/category/:category', (req, res) => {
    const category = req.params.category;
    res.json([{ 
        message: `Courses for ${category} category`,
        category: category
    }]);
});

module.exports = router;