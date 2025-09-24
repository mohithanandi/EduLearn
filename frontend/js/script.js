// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// DOM Elements
const elements = {
    // Navigation
    mobileMenu: document.querySelector('.mobile-menu'),
    navMenu: document.querySelector('.nav-menu'),
    
    // Authentication
    loginBtn: document.getElementById('loginBtn'),
    signupBtn: document.getElementById('signupBtn'),
    loginModal: document.getElementById('loginModal'),
    signupModal: document.getElementById('signupModal'),
    
    // Search
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    
    // Content Containers
    featuresContainer: document.getElementById('featuresContainer'),
    coursesContainer: document.getElementById('coursesContainer'),
    testimonialsContainer: document.getElementById('testimonialsContainer'),
    testimonialNav: document.getElementById('testimonialNav'),
    
    // Buttons
    exploreCourses: document.getElementById('exploreCourses'),
    watchDemo: document.getElementById('watchDemo'),
    getStartedBtn: document.getElementById('getStartedBtn')
};

// Application State
let state = {
    currentTestimonial: 0,
    courses: [],
    testimonials: [],
    features: []
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Load initial data
    await loadFeatures();
    await loadCourses();
    await loadTestimonials();
    
    // Set up event listeners
    setupEventListeners();
    
    // Start testimonial rotation
    startTestimonialRotation();
}

// Data Loading Functions
async function loadFeatures() {
    try {
        // In a real app, this would be an API call
        // const response = await fetch(`${API_BASE_URL}/features`);
        // state.features = await response.json();
        
        // Mock data for now
        state.features = [
            {
                icon: 'fas fa-laptop-code',
                title: 'Interactive Learning',
                description: 'Engage with hands-on projects and real-world scenarios that make learning practical and effective.'
            },
            {
                icon: 'fas fa-user-tie',
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of experience in their respective fields.'
            },
            {
                icon: 'fas fa-certificate',
                title: 'Certification',
                description: 'Earn recognized certificates that boost your resume and career prospects.'
            }
        ];
        
        renderFeatures();
    } catch (error) {
        console.error('Error loading features:', error);
    }
}

async function loadCourses() {
    try {
        // In a real app, this would be an API call
        // const response = await fetch(`${API_BASE_URL}/courses`);
        // state.courses = await response.json();
        
        // Mock data for now
        state.courses = [
            {
                id: 1,
                title: "Full Stack Web Development Bootcamp",
                category: "tech",
                duration: "12 weeks",
                rating: 4.8,
                description: "Master HTML, CSS, JavaScript, React, Node.js and build real-world projects."
            },
            {
                id: 2,
                title: "Digital Marketing Strategy",
                category: "business",
                duration: "8 weeks",
                rating: 4.6,
                description: "Learn to create effective marketing campaigns across digital channels."
            },
            {
                id: 3,
                title: "UI/UX Design Fundamentals",
                category: "design",
                duration: "10 weeks",
                rating: 4.9,
                description: "Create intuitive and beautiful user interfaces with modern design principles."
            },
            {
                id: 4,
                title: "Python for Data Science",
                category: "tech",
                duration: "10 weeks",
                rating: 4.7,
                description: "Learn Python programming and data analysis with real-world datasets."
            },
            {
                id: 5,
                title: "Business Communication",
                category: "business",
                duration: "6 weeks",
                rating: 4.5,
                description: "Master professional communication skills for business success."
            },
            {
                id: 6,
                title: "Spanish for Beginners",
                category: "language",
                duration: "12 weeks",
                rating: 4.8,
                description: "Start speaking Spanish from day one with immersive learning techniques."
            }
        ];
        
        renderCourses();
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

async function loadTestimonials() {
    try {
        // In a real app, this would be an API call
        // const response = await fetch(`${API_BASE_URL}/testimonials`);
        // state.testimonials = await response.json();
        
        // Mock data for now
        state.testimonials = [
            {
                id: 1,
                name: "Sarah Johnson",
                role: "Software Developer",
                text: "EduLearn completely transformed my career. The Full Stack Development course gave me the skills I needed to land my dream job at a tech startup."
            },
            {
                id: 2,
                name: "Michael Chen",
                role: "Digital Marketer",
                text: "The instructors are incredibly knowledgeable and supportive. The community aspect of learning made all the difference for me."
            },
            {
                id: 3,
                name: "Jessica Williams",
                role: "Product Designer",
                text: "I was able to balance my full-time job while completing the UI/UX course. The flexible schedule and practical projects were perfect for me."
            }
        ];
        
        renderTestimonials();
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

// Rendering Functions
function renderFeatures() {
    if (!elements.featuresContainer) return;
    
    elements.featuresContainer.innerHTML = state.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

function renderCourses() {
    if (!elements.coursesContainer) return;
    
    elements.coursesContainer.innerHTML = state.courses.map(course => `
        <div class="course-card" data-category="${course.category}">
            <div class="course-image" style="background: linear-gradient(135deg, var(--primary), var(--accent));">
                ${course.title.split(' ')[0]}
            </div>
            <div class="course-content">
                <span class="course-category">${getCategoryName(course.category)}</span>
                <h3 class="course-title">${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-info">
                    <span><i class="far fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-user-graduate"></i> ${course.rating}/5</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    if (!elements.testimonialsContainer || !elements.testimonialNav) return;
    
    // Render testimonials
    elements.testimonialsContainer.innerHTML = state.testimonials.map((testimonial, index) => `
        <div class="testimonial ${index === 0 ? 'active' : ''}">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
        </div>
    `).join('');
    
    // Render navigation dots
    elements.testimonialNav.innerHTML = state.testimonials.map((_, index) => `
        <div class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
}

// Utility Functions
function getCategoryName(category) {
    const categories = {
        'tech': 'Technology',
        'business': 'Business',
        'design': 'Design',
        'language': 'Languages',
        'development': 'Personal Development'
    };
    return categories[category] || category;
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        state.currentTestimonial = index;
    }
}

function startTestimonialRotation() {
    setInterval(() => {
        const nextIndex = (state.currentTestimonial + 1) % state.testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
}

// Event Handlers Setup
function setupEventListeners() {
    // Mobile menu toggle
    if (elements.mobileMenu) {
        elements.mobileMenu.addEventListener('click', () => {
            elements.navMenu.classList.toggle('active');
        });
    }
    
    // Authentication modals
    setupAuthModals();
    
    // Course filtering
    setupCourseFilters();
    
    // Testimonial navigation
    setupTestimonialNavigation();
    
    // Search functionality
    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', handleSearch);
    }
    
    if (elements.searchInput) {
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    // Button click handlers
    if (elements.exploreCourses) {
        elements.exploreCourses.addEventListener('click', () => {
            document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (elements.watchDemo) {
        elements.watchDemo.addEventListener('click', () => {
            alert('Demo video would play here');
        });
    }
    
    if (elements.getStartedBtn) {
        elements.getStartedBtn.addEventListener('click', () => {
            elements.signupModal.style.display = 'block';
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                elements.navMenu.classList.remove('active');
            }
        });
    });
    
    // Category links in footer
    document.querySelectorAll('.footer-column a[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            filterCourses(filter);
            document.querySelector('#courses').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function setupAuthModals() {
    // Modal elements
    const modals = {
        login: elements.loginModal,
        signup: elements.signupModal
    };
    
    const closeButtons = document.querySelectorAll('.close');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    
    // Open modals
    if (elements.loginBtn) {
        elements.loginBtn.addEventListener('click', () => {
            modals.login.style.display = 'block';
        });
    }
    
    if (elements.signupBtn) {
        elements.signupBtn.addEventListener('click', () => {
            modals.signup.style.display = 'block';
        });
    }
    
    // Close modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modals.login.style.display = 'none';
            modals.signup.style.display = 'none';
        });
    });
    
    // Switch between modals
    if (switchToSignup) {
        switchToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            modals.login.style.display = 'none';
            modals.signup.style.display = 'block';
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            modals.signup.style.display = 'none';
            modals.login.style.display = 'block';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modals.login) {
            modals.login.style.display = 'none';
        }
        if (e.target === modals.signup) {
            modals.signup.style.display = 'none';
        }
    });
    
    // Form submissions
    const loginForm = document.getElementById('loginForm');