# EduLearn - EdTech Learning Platform

A full-stack educational technology platform built with HTML/CSS/JavaScript frontend and Node.js/Express backend.

## Features

- 🎓 Course catalog with filtering
- 👥 User authentication system
- 💬 Student testimonials
- 📱 Responsive design<img width="1916" height="1003" alt="choose" src="https://github.com/user-attachments/assets/713871a2-5a73-44f1-ad01-32b3f2a54937" />

- 🔍 Search functionality
- 🎨 Modern UI/UX

## Project Structure<img width="1917" height="1005" alt="home" src="https://github.com/user-attachments/assets/c44061e9-e0ec-457d-b6d5-6d8ad917da52" />

EduLearn/
├── frontend/ # Client-side code
├── backend/ # Server-side code
├── database/ # SQLite database
└── docs/ # Documentation


## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install

## Start the backend server:
npm start

Or for development with auto-restart:
npm run dev

## Or for development with auto-restart:
npm run dev

## API Endpoints
# Courses
GET /api/courses - Get all courses

GET /api/courses/category/:category - Get courses by category

GET /api/courses/search?q=query - Search courses

GET /api/courses/:id - Get course by ID

# Testimonials
GET /api/testimonials - Get all testimonials

POST /api/testimonials - Create new testimonial

# Users
POST /api/users/register - Register new user

POST /api/users/login - User login

GET /api/users/profile - Get user profile (protected)

# Database
The application uses SQLite with the following tables:

courses - Course information

testimonials - Student testimonials

users - User accounts

Sample data is automatically inserted when the database is first created.

## Adding New Courses
Use the API or directly insert into the database:

javascript
POST /api/courses
{
    "title": "New Course",
    "description": "Course description",
    "category": "tech",
    "duration": "8 weeks",
    "rating": 4.5,
    "price": 199.99,
    "instructor": "Instructor Name"
}


## Deployment
Backend Deployment
The backend can be deployed to services like:

Heroku
DigitalOcean
AWS EC2
Railway

Frontend Deployment
The frontend can be deployed to:
Netlify
Vercel
GitHub Pages
AWS S3

## Support
For issues and questions, please contact the development team.

text

### 15. Create `docs/API_Documentation.md`:

```markdown
# EduLearn API Documentation

## Base URL
http://localhost:5000/api

text

## Authentication
Some endpoints require JWT authentication. Include the token in the Authorization header:
Authorization: Bearer YOUR_JWT_TOKEN

text

## Courses Endpoints

### Get All Courses
**GET** `/courses`

Response:
```json
[
    {
        "id": 1,
        "title": "Full Stack Web Development Bootcamp",
        "description": "Master HTML, CSS, JavaScript, React, Node.js...",
        "category": "tech",
        "duration": "12 weeks",
        "rating": 4.8,
        "price": 299.99,
        "instructor": "Sarah Johnson",
        "created_at": "2023-01-01 10:00:00"
    }
]
Get Courses by Category
GET /courses/category/:category

Categories: tech, business, design, language

Search Courses
GET /courses/search?q=javascript

Create Course (Admin)
POST /courses

json
{
    "title": "New Course",
    "description": "Course description",
    "category": "tech",
    "duration": "8 weeks",
    "rating": 4.5,
    "price": 199.99,
    "instructor": "Instructor Name"
}

Testimonials Endpoints
Get All Testimonials
GET /testimonials

Create Testimonial
POST /testimonials

json
{
    "name": "Student Name",
    "role": "Software Developer",
    "text": "Great course!",
    "rating": 5
}
User Endpoints
Register
POST /users/register

json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword",
    "role": "student"
}
Login
POST /users/login

json
{
    "email": "john@example.com",
    "password": "securepassword"
}
Response:

json
{
    "message": "Login successful",
    "user": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "role": "student"
    },
    "token": "JWT_TOKEN_HERE"
}
Error Responses
All endpoints may return standard error responses:

json
{
    "error": "Error message description"
}
Common status codes:

200 - Success

201 - Created

400 - Bad Request

401 - Unauthorized

403 - Forbidden

404 - Not Found

500 - Internal Server Error

text

### 16. Create root `package.json`:

```json
{
  "name": "edulearn-fullstack",
  "version": "1.0.0",
  "description": "Full-stack EdTech learning platform",
  "scripts": {
    "install-backend": "cd backend && npm install",
    "start": "cd backend && npm start",
    "dev": "cd backend && npm run dev",
    "setup": "npm run install-backend"
  },
  "keywords": ["edtech", "education", "courses", "learning-platform"],
  "author": "EduLearn Team",
  "license": "MIT"
}
Step 4: Setup Instructions
Create the folder structure as shown above

Save all the files in their respective folders

Open terminal in the EduLearn folder and run:

npm run setup
Start the application:

npm start
Open your browser to http://localhost:5000

## The application will:
<img width="1919" height="900" alt="Popular courses" src="https://github.com/user-attachments/assets/d73375eb-66fe-4707-ab37-a8add8de906d" /><img width="1919" height="1027" alt="api" src="https://github.com/user-attachments/assets/43f37f1d-3d09-4e44-a81a-6452266afd20" />


✅ Create the SQLite database automatically<img width="1916" height="1003" alt="choose" src="https://github.com/user-attachments/assets/b5d9856c-7e28-4148-af42-f55ff0018eb9" />

<img width="1919" height="1027" alt="testimonals" src="https://github.com/user-attachments/assets/410ffc85-67d9-47b5-97cf-6150f1f592e7" />

✅ Insert sample courses and testimonials<img width="1919" height="1025" alt="courses" src="https://github.com/user-attachments/assets/63588f1d-2ae9-4b85-ba15-e844228edcf8" />

<img width="1919" height="998" alt="users login" src="https://github.com/user-attachments/assets/63da52aa-c09a-45ad-af33-47afed7b543e" />
<img width="1917" height="1019" alt="users register" src="https://github.com/user-attachments/assets/078052c1-c6a1-41f6-be60-7e719e319012" />

✅ Start both frontend and backend servers

✅ Be ready to use immediately!
