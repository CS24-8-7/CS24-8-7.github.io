// Portfolio Separated - Main JavaScript File

// Mobile Navigation
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    const menuBtn = document.getElementById('menu-btn');
    
    if (navLinks && menuBtn) {
        navLinks.classList.toggle('show');
        menuBtn.classList.toggle('active');
    }
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenuBtn = document.getElementById('menu-btn');
    const navLinksContainer = document.getElementById('nav-links');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn && navLinksContainer) {
                mobileMenuBtn.classList.remove('active');
                navLinksContainer.classList.remove('show');
            }
        });
    });
});

// Active navigation links based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        
        // Check if current page matches the link
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'index.html' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

// Back to top button
function handleBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or prefer-color-scheme
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // If the user has explicitly chosen a theme, use it
    if (currentTheme) {
        document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    } else {
        // Otherwise, set the theme based on user's system preference
        document.body.classList.toggle('dark-mode', prefersDarkScheme.matches);
    }
    
    // When the toggle button is clicked, switch themes
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save the theme preference
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// Form submission (for contact page)
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show success message
        showFormMessage(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// Show form message
function showFormMessage(message, type) {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    // Remove existing message
    const existingMessage = contactForm.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.innerHTML = `
        <i class='bx ${type === 'success' ? 'bx-check-circle' : 'bx-error-circle'}'></i>
        <p>${message}</p>
    `;
    
    // Insert message at the top of the form
    contactForm.insertBefore(messageDiv, contactForm.firstChild);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Smooth scrolling for anchor links (for single page navigation)
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animate progress bars when skills section comes into view
function initSkillBarsAnimation() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.progress-bar');
    
    if (!skillsSection || skillBars.length === 0) return;
    
    let animated = false;
    
    const animateSkillBars = () => {
        if (animated) return;
        
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            skillBars.forEach((bar, index) => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100 + (index * 100));
            });
            
            animated = true;
            window.removeEventListener('scroll', animateSkillBars);
        }
    };
    
    window.addEventListener('scroll', animateSkillBars);
    
    // Check if already in view on page load
    setTimeout(animateSkillBars, 100);
}

// Scroll reveal animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length === 0) return;
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on page load
}

// Language dropdown (if needed in future)
function toggleLangMenu() {
    const langMenu = document.getElementById("lang-menu");
    if (langMenu) {
        langMenu.classList.toggle("show");
    }
}

// Close language menu when clicking outside
document.addEventListener("click", function (e) {
    const btn = document.getElementById("lang-btn");
    const menu = document.getElementById("lang-menu");
    if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
    }
});

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setActiveNavLink();
    initThemeToggle();
    initContactForm();
    initSmoothScrolling();
    initSkillBarsAnimation();
    initScrollReveal();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        handleNavbarScroll();
        handleBackToTop();
    });
    
    // Initial scroll check
    handleNavbarScroll();
    handleBackToTop();
});

// Utility function to check if element exists
function elementExists(selector) {
    return document.querySelector(selector) !== null;
}

// Add CSS for form messages
const formMessageStyles = `
.form-message {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm);
    border-radius: var(--radius-sm);
    margin-bottom: var(--space-md);
    animation: fadeInUp 0.3s ease;
}

.form-message-success {
    background: rgba(75, 181, 67, 0.1);
    color: var(--success-color);
    border: 1px solid rgba(75, 181, 67, 0.2);
}

.form-message-error {
    background: rgba(220, 53, 69, 0.1);
    color: #dc3545;
    border: 1px solid rgba(220, 53, 69, 0.2);
}

.form-message i {
    font-size: 1.2rem;
}

.form-message p {
    margin: 0;
    font-weight: 500;
}
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.textContent = formMessageStyles;
document.head.appendChild(styleSheet);

