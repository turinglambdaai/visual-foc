const fs = require('fs-extra');
const path = require('path');

// Define source and destination directories
const srcDir = './src';
const docsDir = './docs';

console.log('Starting build process...');

// Clean the docs directory
if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
    console.log('Cleaned docs directory');
}

// Copy entire src directory to docs
fs.copySync(srcDir, docsDir);

console.log('Build completed successfully!');
console.log('Files copied to docs directory for GitHub Pages deployment.');
