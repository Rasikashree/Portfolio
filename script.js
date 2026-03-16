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

// Contact form submission via FormSubmit AJAX (stays on page)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const emailPopup = document.getElementById('emailPopup');
const emailPopupClose = document.getElementById('emailPopupClose');
const emailPopupOk = document.getElementById('emailPopupOk');

function showEmailPopup() {
    if (!emailPopup) {
        return;
    }
    emailPopup.classList.add('is-open');
    emailPopup.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeEmailPopup() {
    if (!emailPopup) {
        return;
    }
    emailPopup.classList.remove('is-open');
    emailPopup.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

if (emailPopupClose) {
    emailPopupClose.addEventListener('click', closeEmailPopup);
}

if (emailPopupOk) {
    emailPopupOk.addEventListener('click', closeEmailPopup);
}

if (emailPopup) {
    emailPopup.addEventListener('click', (event) => {
        if (event.target === emailPopup) {
            closeEmailPopup();
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton ? submitButton.textContent : '';

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
        }

        if (formStatus) {
            formStatus.style.display = 'none';
            formStatus.classList.remove('error');
            formStatus.textContent = '';
        }

        try {
            const formData = new FormData(contactForm);
            const response = await fetch('https://formsubmit.co/ajax/rasikashree1991@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            contactForm.reset();
            showEmailPopup();
        } catch (error) {
            if (formStatus) {
                formStatus.textContent = 'Unable to send message right now. Please try again.';
                formStatus.classList.add('error');
                formStatus.style.display = 'block';
            }
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        }
    });
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

// Certificate modal preview
const certCards = document.querySelectorAll('.cert-card');
const achievementCertBtns = document.querySelectorAll('.achievement-cert-btn');
const certModal = document.getElementById('certModal');
const certModalImage = document.querySelector('.cert-modal-image');
const certModalClose = document.querySelector('.cert-modal-close');

certCards.forEach((card) => {
    card.addEventListener('click', () => {
        const imageSrc = card.dataset.certImage;
        if (!imageSrc || !certModal || !certModalImage) {
            return;
        }
        certModalImage.src = imageSrc;
        certModal.classList.add('is-open');
        certModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

achievementCertBtns.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        const imageSrc = button.dataset.certImage;
        if (!imageSrc || !certModal || !certModalImage) {
            return;
        }
        certModalImage.src = imageSrc;
        certModal.classList.add('is-open');
        certModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
});

function closeCertModal() {
    if (!certModal || !certModalImage) {
        return;
    }
    certModal.classList.remove('is-open');
    certModal.setAttribute('aria-hidden', 'true');
    certModalImage.src = '';
    document.body.style.overflow = '';
}

if (certModal) {
    certModal.addEventListener('click', (event) => {
        if (event.target === certModal) {
            closeCertModal();
        }
    });
}

if (certModalClose) {
    certModalClose.addEventListener('click', closeCertModal);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeCertModal();
        closeEmailPopup();
    }
});
