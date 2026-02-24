// Navbar scroll effect
let lastScrollY = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class when scrolled down
    if (currentScrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
});

// Mobile menu toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Smooth scroll to sections
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const successMessage = document.getElementById('successMessage');
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Log form data (in a real app, you'd send this to a server)
    const formData = new FormData(form);
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Reset form and hide message after 3 seconds
    setTimeout(() => {
        form.reset();
        successMessage.style.display = 'none';
    }, 3000);
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            bar.style.animation = 'fillBar 1.5s ease forwards';
        }
    });
}

// Add CSS animation for skill bars
const style = document.createElement('style');
style.textContent = `
    @keyframes fillBar {
        from { width: 0; }
    }
    .skill-progress {
        animation: none;
    }
`;
document.head.appendChild(style);

// Listen for scroll events to animate skill bars
window.addEventListener('scroll', animateSkillBars);

// Initial check for skill bars animation
animateSkillBars();

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Prevent clicks inside navbar from closing menu
document.querySelector('.navbar').addEventListener('click', (e) => {
    e.stopPropagation();
});
