const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { authenticateToken, requireAdmin } = require('../middleware/auth');

// Public routes
router.get('/', courseController.getAllCourses);
router.get('/category/:category', courseController.getCoursesByCategory);
router.get('/search', courseController.searchCourses);
router.get('/:id', courseController.getCourseById);

// Protected admin routes
router.post('/', authenticateToken, requireAdmin, courseController.createCourse);
router.put('/:id', authenticateToken, requireAdmin, courseController.updateCourse);
router.delete('/:id', authenticateToken, requireAdmin, courseController.deleteCourse);

module.exports = router;