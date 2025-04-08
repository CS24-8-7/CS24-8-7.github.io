// Mobile Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active navigation links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
        }
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

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

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you would typically add code to send the form data
    // For demo purposes, we'll just show a success message
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    
    contactForm.innerHTML = `
        <div class="form-success">
            <i class='bx bx-check-circle'></i>
            <h3>Thank you, ${name}!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon.</p>
        </div>
    `;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate progress bars when skills section comes into view
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.progress-bar');

const animateSkillBars = () => {
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition < screenPosition) {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
        
        // Remove the event listener after animation
        window.removeEventListener('scroll', animateSkillBars);
    }
};

window.addEventListener('scroll', animateSkillBars);

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Trigger skill bar animations if skills section is already in view
    const skillsSectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (skillsSectionPos < screenPos) {
        animateSkillBars();
    }
});

function toggleLangMenu() {
    document.getElementById("lang-menu").classList.toggle("show");
}

// غلق القائمة إذا ضغطت خارجها
document.addEventListener("click", function (e) {
    const btn = document.getElementById("lang-btn");
    const menu = document.getElementById("lang-menu");
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("show");
    }
});

const translations = {
    en: {
        heroSubtitle: "Full-Stack Developer",
        heroTitle: "Farea AL-Dhela'a",
        heroDescription: "Computer Science graduate passionate about building modern, scalable applications with intuitive user experiences.",
        downloadCv: "Download CV",
        contactMe: "Contact Me",
        allRightsReserved: "All rights reserved."
    },
    ar: {
        heroSubtitle: "مطور برمجيات متكامل",
        heroTitle: "فرعاء الذيلاء",
        heroDescription: "خريج علوم حاسوب شغوف ببناء تطبيقات حديثة وقابلة للتوسع مع تجارب مستخدم سلسة.",
        downloadCv: "تحميل السيرة الذاتية",
        contactMe: "اتصل بي",
        allRightsReserved: "جميع الحقوق محفوظة."
    }
};

function switchLanguage(language) {
    // ترجمة النصوص
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[language][key];
    });

    // تغيير الاتجاه واللغة في الصفحة
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // تغيير الشعار
    const logo = document.getElementById("logo-name");
    if (language === "ar") {
        logo.innerHTML = "Farea<span>Dev</span>";
        logo.style.direction = "rtl";
    } else {
        logo.innerHTML = "Farea<span>Dev</span>";
        logo.style.direction = "ltr";
    }
}