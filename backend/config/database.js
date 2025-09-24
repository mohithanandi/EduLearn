const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../database/edulearn.db');

// Create database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('✅ Connected to SQLite database');
        initializeDatabase();
    }
});

// Initialize database with tables
function initializeDatabase() {
    // Courses table
    db.run(`CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        category TEXT NOT NULL,
        duration TEXT,
        rating REAL DEFAULT 0,
        price DECIMAL(10,2) DEFAULT 0,
        instructor TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Testimonials table
    db.run(`CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT,
        text TEXT NOT NULL,
        rating INTEGER DEFAULT 5,
        approved BOOLEAN DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'student',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    // Insert sample data if tables are empty
    insertSampleData();
}

function insertSampleData() {
    // Check if courses table is empty
    db.get("SELECT COUNT(*) as count FROM courses", (err, row) => {
        if (row.count === 0) {
            console.log('📝 Inserting sample courses...');
            
            const sampleCourses = [
                {
                    title: "Full Stack Web Development Bootcamp",
                    description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world projects.",
                    category: "tech",
                    duration: "12 weeks",
                    rating: 4.8,
                    price: 299.99,
                    instructor: "Sarah Johnson"
                },
                {
                    title: "Digital Marketing Strategy",
                    description: "Learn to create effective marketing campaigns across digital channels.",
                    category: "business",
                    duration: "8 weeks",
                    rating: 4.6,
                    price: 199.99,
                    instructor: "Mike Chen"
                },
                {
                    title: "UI/UX Design Fundamentals",
                    description: "Create intuitive and beautiful user interfaces with modern design principles.",
                    category: "design",
                    duration: "10 weeks",
                    rating: 4.9,
                    price: 249.99,
                    instructor: "Emily Davis"
                },
                {
                    title: "Python for Data Science",
                    description: "Learn Python programming and data analysis with real-world datasets.",
                    category: "tech",
                    duration: "10 weeks",
                    rating: 4.7,
                    price: 279.99,
                    instructor: "Dr. Robert Wilson"
                },
                {
                    title: "Business Communication",
                    description: "Master professional communication skills for business success.",
                    category: "business",
                    duration: "6 weeks",
                    rating: 4.5,
                    price: 149.99,
                    instructor: "Lisa Thompson"
                },
                {
                    title: "Spanish for Beginners",
                    description: "Start speaking Spanish from day one with immersive learning techniques.",
                    category: "language",
                    duration: "12 weeks",
                    rating: 4.8,
                    price: 179.99,
                    instructor: "Carlos Rodriguez"
                }
            ];

            sampleCourses.forEach(course => {
                db.run(`INSERT INTO courses (title, description, category, duration, rating, price, instructor) 
                       VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [course.title, course.description, course.category, course.duration, 
                     course.rating, course.price, course.instructor]);
            });
        }
    });

    // Check if testimonials table is empty
    db.get("SELECT COUNT(*) as count FROM testimonials", (err, row) => {
        if (row.count === 0) {
            console.log('💬 Inserting sample testimonials...');
            
            const sampleTestimonials = [
                {
                    name: "Sarah Johnson",
                    role: "Software Developer",
                    text: "EduLearn completely transformed my career. The Full Stack Development course gave me the skills I needed to land my dream job at a tech startup.",
                    rating: 5
                },
                {
                    name: "Michael Chen",
                    role: "Digital Marketer",
                    text: "The instructors are incredibly knowledgeable and supportive. The community aspect of learning made all the difference for me.",
                    rating: 5
                },
                {
                    name: "Jessica Williams",
                    role: "Product Designer",
                    text: "I was able to balance my full-time job while completing the UI/UX course. The flexible schedule and practical projects were perfect for me.",
                    rating: 5
                },
                {
                    name: "David Kim",
                    role: "Data Analyst",
                    text: "The Python for Data Science course provided exactly what I needed to transition into a data career. The projects were challenging but rewarding!",
                    rating: 4
                }
            ];

            sampleTestimonials.forEach(testimonial => {
                db.run(`INSERT INTO testimonials (name, role, text, rating) VALUES (?, ?, ?, ?)`,
                    [testimonial.name, testimonial.role, testimonial.text, testimonial.rating]);
            });
        }
    });
}

module.exports = db;