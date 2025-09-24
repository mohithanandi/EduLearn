const express = require('express');
const router = express.Router();
const testimonialController = require('../controllers/testimonialController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Public routes
router.get('/', testimonialController.getAllTestimonials);
router.post('/', testimonialController.createTestimonial);

// Protected admin routes
router.put('/:id/approve', authenticateToken, requireAdmin, testimonialController.approveTestimonial);
router.delete('/:id', authenticateToken, requireAdmin, testimonialController.deleteTestimonial);

module.exports = router;