const Course = require('../models/Courses');

// Get all courses
exports.getAllCourses = (req, res) => {
    Course.getAll((err, courses) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch courses' });
        }
        res.json(courses);
    });
};

// Get course by ID
exports.getCourseById = (req, res) => {
    const courseId = req.params.id;
    
    Course.getById(courseId, (err, course) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch course' });
        }
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.json(course);
    });
};

// Get courses by category
exports.getCoursesByCategory = (req, res) => {
    const category = req.params.category;
    
    Course.getByCategory(category, (err, courses) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch courses' });
        }
        res.json(courses);
    });
};

// Search courses
exports.searchCourses = (req, res) => {
    const query = req.query.q;
    
    if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
    }
    
    Course.search(query, (err, courses) => {
        if (err) {
            return res.status(500).json({ error: 'Search failed' });
        }
        res.json(courses);
    });
};

// Create new course
exports.createCourse = (req, res) => {
    const courseData = req.body;
    
    // Basic validation
    if (!courseData.title || !courseData.category) {
        return res.status(400).json({ error: 'Title and category are required' });
    }
    
    Course.create(courseData, (err, newCourse) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to create course' });
        }
        res.status(201).json(newCourse);
    });
};

// Update course
exports.updateCourse = (req, res) => {
    const courseId = req.params.id;
    const courseData = req.body;
    
    Course.update(courseId, courseData, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update course' });
        }
        res.json({ message: 'Course updated successfully' });
    });
};

// Delete course
exports.deleteCourse = (req, res) => {
    const courseId = req.params.id;
    
    Course.delete(courseId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete course' });
        }
        res.json({ message: 'Course deleted successfully' });
    });
};