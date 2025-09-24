const express = require('express');
const router = express.Router();

// Get all testimonials - SIMPLE VERSION
router.get('/', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Software Developer",
            text: "EduLearn completely transformed my career. The Full Stack Development course gave me the skills I needed to land my dream job at a tech startup.",
            rating: 5
        },
        {
            id: 2, 
            name: "Michael Chen",
            role: "Digital Marketer",
            text: "The instructors are incredibly knowledgeable and supportive. The community aspect of learning made all the difference for me.",
            rating: 5
        },
        {
            id: 3,
            name: "Jessica Williams", 
            role: "Product Designer",
            text: "I was able to balance my full-time job while completing the UI/UX course. The flexible schedule and practical projects were perfect for me.",
            rating: 5
        }
    ]);
});

// Create new testimonial - SIMPLE VERSION
router.post('/', (req, res) => {
    res.json({
        message: "Testimonial created successfully",
        id: 4,
        ...req.body
    });
});

module.exports = router;