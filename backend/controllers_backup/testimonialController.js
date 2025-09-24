const Testimonial = require('../models/Testimonial');

// Get all testimonials
exports.getAllTestimonials = (req, res) => {
    Testimonial.getAll((err, testimonials) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch testimonials' });
        }
        res.json(testimonials);
    });
};

// Create new testimonial
exports.createTestimonial = (req, res) => {
    const testimonialData = req.body;
    
    // Basic validation
    if (!testimonialData.name || !testimonialData.text) {
        return res.status(400).json({ error: 'Name and text are required' });
    }
    
    Testimonial.create(testimonialData, (err, newTestimonial) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create testimonial' });
        }
        res.status(201).json(newTestimonial);
    });
};

// Approve testimonial
exports.approveTestimonial = (req, res) => {
    const testimonialId = req.params.id;
    
    Testimonial.approve(testimonialId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to approve testimonial' });
        }
        res.json({ message: 'Testimonial approved successfully' });
    });
};

// Delete testimonial
exports.deleteTestimonial = (req, res) => {
    const testimonialId = req.params.id;
    
    Testimonial.delete(testimonialId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete testimonial' });
        }
        res.json({ message: 'Testimonial deleted successfully' });
    });
};