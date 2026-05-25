const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const projectsDir = path.join(publicDir, 'projects');

if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

function createSVG(text, bgColor) {
  return `<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="40" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
  <text x="50%" y="60%" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.7)" text-anchor="middle" dominant-baseline="middle">Placeholder (800x450)</text>
</svg>`;
}

fs.writeFileSync(path.join(publicDir, 'profile.jpg'), createSVG('Profile Photo', '#1e293b'));
fs.writeFileSync(path.join(projectsDir, 'event-booking.png'), createSVG('Event Booking System', '#4f46e5'));
fs.writeFileSync(path.join(projectsDir, 'old-portfolio.png'), createSVG('Old Portfolio', '#7c3aed'));

console.log('Created placeholder images in public/');
