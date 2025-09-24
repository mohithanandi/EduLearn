// setup.js - Quick setup script
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up EduLearn Project...');

// Check if database folder exists, create if not
const dbDir = path.join(__dirname, 'database');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
    console.log('✅ Created database folder');
}

// Check if frontend images folder exists
const imagesDir = path.join(__dirname, 'frontend', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('✅ Created images folder');
}

console.log('📦 Project structure is ready!');
console.log('💡 Next steps:');
console.log('   1. Run: cd backend && npm install');
console.log('   2. Run: npm start');
console.log('   3. Open: http://localhost:5000');