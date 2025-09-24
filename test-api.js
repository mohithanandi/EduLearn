// test-api.js - Test the API endpoints
const http = require('http');

const baseURL = 'http://localhost:5000';

const endpoints = [
    '/api',
    '/api/courses',
    '/api/courses/category/tech',
    '/api/testimonials'
];

console.log('🧪 Testing EduLearn API Endpoints...\n');

endpoints.forEach(endpoint => {
    http.get(`${baseURL}${endpoint}`, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
            data += chunk;
        });
        
        res.on('end', () => {
            console.log(`✅ ${endpoint} - Status: ${res.statusCode}`);
            if (res.statusCode !== 200) {
                console.log(`   Response: ${data}`);
            }
        });
    }).on('error', (err) => {
        console.log(`❌ ${endpoint} - Error: ${err.message}`);
    });
});