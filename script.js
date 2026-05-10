// script.js
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    // Hum Formspree use kar rahe hain, toh wo khud handle karega
    // Lekin button animation ke liye ye zaroori hai
    const btn = document.querySelector('.submit-btn');
    btn.innerText = 'Sending...';
    btn.style.opacity = '0.7';
    
    // Yahan hum sirf visual feedback de rahe hain
    setTimeout(() => {
        console.log('Form submission initiated');
    }, 1000);
});