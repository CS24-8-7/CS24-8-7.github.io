// Portfolio Separated - Translations
const translations = {
  en: {
    "nav": {
      "home": "Home",
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact",
      "web": "Web Development",
      "mobile": "Mobile Development",
      "database": "Database Solutions",
      "consulting": "Software Consulting"
    },
    "personal": {
      "name": "Farea AL-Dhela'a"
    },
    "hero": {
      "subtitle": "Full-Stack Developer",
      "description": "Computer Science graduate passionate about building modern, scalable applications with intuitive user experiences.",
      "download": "Download CV",
      "contact": "Contact Me"
    },
    "about": {
      "title": "About Me",
      "subtitle": "Get to know me better",
      "who": "Who I Am",
      "description": "I'm a Computer Science graduate with a passion for creating innovative and effective applications. I've studied a wide range of programming languages and gained hands-on experience through university projects and internships.",
      "email": "Email",
      "phone": "Phone",
      "location": "Location"
    },
    "skills": {
      "title": "My Skills",
      "subtitle": "Technologies I work with",
      "backend": "Backend",
      "frontend": "Frontend",
      "programming": "Programming Languages",
      "viewAll": "View All Projects"
    },
    "projects": {
      "title": "My Projects",
      "subtitle": "Some of my recent work"
    },
    "timeline": {
      "education": "Education",
      "experience": "Experience",
      "degree": "Bachelor of Computer Science",
      "degreeDesc": "Graduated with focus on software development and system architecture. Completed coursework in algorithms, databases, and software engineering.",
      "freelance": "Freelance Developer",
      "selfEmployed": "Self-Employed",
      "freelanceDesc": "Developing custom software solutions for clients, including web applications, mobile apps, and database systems."
    },
    "contact": {
      "title": "Get In Touch",
      "subtitle": "Let's work together",
      "infoTitle": "Contact Information",
      "infoText": "Feel free to reach out to me for any questions or opportunities. I'm available for freelance projects and full-time positions.",
      "email": "Email",
      "phone": "Phone/WhatsApp",
      "location": "Location",
      "languages": "Languages",
      "namePlaceholder": "Your Name",
      "emailPlaceholder": "Your Email",
      "subjectPlaceholder": "Subject",
      "messagePlaceholder": "Your Message",
      "send": "Send Message"
    },
    "footer": {
      "tagline": "Creating digital experiences that matter.",
      "links": "Quick Links",
      "services": "Services",
      "rights": "All rights reserved."
    }
  },
  ar: {
    "nav": {
      "home": "الرئيسية",
      "about": "نبذة عني",
      "skills": "المهارات",
      "projects": "المشاريع",
      "contact": "التواصل",
      "web": "تطوير الويب",
      "mobile": "تطوير التطبيقات",
      "database": "حلول قواعد البيانات",
      "consulting": "الاستشارات البرمجية"
    },
    "personal": {
      "name": "فارع الضلاع"
    },
    "hero": {
      "subtitle": "مطور متكامل",
      "description": "خريج علوم حاسوب شغوف ببناء تطبيقات حديثة وقابلة للتوسع مع تجارب مستخدم بديهية.",
      "download": "تحميل السيرة الذاتية",
      "contact": "تواصل معي"
    },
    "about": {
      "title": "نبذة عني",
      "subtitle": "تعرف علي أكثر",
      "who": "من أنا",
      "description": "أنا خريج علوم حاسوب لدي شغف لإنشاء تطبيقات مبتكرة وفعالة. درست مجموعة واسعة من لغات البرمجة واكتسبت خبرة عملية من خلال مشاريع الجامعة والتدريب.",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف",
      "location": "الموقع"
    },
    "skills": {
      "title": "مهاراتي",
      "subtitle": "التقنيات التي أعمل بها",
      "backend": "الخلفية",
      "frontend": "الواجهة الأمامية",
      "programming": "لغات البرمجة",
      "viewAll": "عرض جميع المشاريع"
    },
    "projects": {
      "title": "مشاريعي",
      "subtitle": "بعض من أعمالي الحديثة"
    },
    "timeline": {
      "education": "التعليم",
      "experience": "الخبرة",
      "degree": "بكالوريوس علوم الحاسوب",
      "degreeDesc": "تخرجت مع التركيز على تطوير البرمجيات وهندسة الأنظمة. أكملت دورات في الخوارزميات وقواعد البيانات وهندسة البرمجيات.",
      "freelance": "مطور مستقل",
      "selfEmployed": "عمل حر",
      "freelanceDesc": "تطوير حلول برمجية مخصصة للعملاء، بما في ذلك تطبيقات الويب والتطبيقات المحمولة وأنظمة قواعد البيانات."
    },
    "contact": {
      "title": "تواصل معي",
      "subtitle": "لنعمل معاً",
      "infoTitle": "معلومات التواصل",
      "infoText": "لا تتردد في التواصل معي لأي أسئلة أو فرص. أنا متاح للمشاريع المستقلة والوظائف بدوام كامل.",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف/واتساب",
      "location": "الموقع",
      "languages": "اللغات",
      "namePlaceholder": "اسمك",
      "emailPlaceholder": "بريدك الإلكتروني",
      "subjectPlaceholder": "الموضوع",
      "messagePlaceholder": "رسالتك",
      "send": "إرسال الرسالة"
    },
    "footer": {
      "tagline": "إنشاء تجارب رقمية مهمة.",
      "links": "روابط سريعة",
      "services": "الخدمات",
      "rights": "جميع الحقوق محفوظة."
    }
  }
};

// Current language
let currentLanguage = 'en';

// Initialize translations
function initTranslations() {
  // Check for saved language preference
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }
  
  // Apply translations
  applyTranslations();
  
  // Update document direction for Arabic
  updateDocumentDirection();
}

// Apply translations to the page
function applyTranslations() {
  const elements = document.querySelectorAll('[data-translate]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = getTranslation(key);
    
    if (translation) {
      element.textContent = translation;
    }
  });
  
  // Handle placeholder translations
  const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    const translation = getTranslation(key);
    
    if (translation) {
      element.setAttribute('placeholder', translation);
    }
  });
}

// Get translation by key
function getTranslation(key) {
  const keys = key.split('.');
  let translation = translations[currentLanguage];
  
  for (const k of keys) {
    if (translation && translation[k]) {
      translation = translation[k];
    } else {
      return null;
    }
  }
  
  return translation;
}

// Switch language
function switchLanguage(language) {
  if (translations[language]) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    applyTranslations();
    updateDocumentDirection();
    
    // Close language menu if open
    const langMenu = document.getElementById('lang-menu');
    if (langMenu) {
      langMenu.classList.remove('show');
    }
  }
}

// Update document direction for RTL languages
function updateDocumentDirection() {
  const html = document.documentElement;
  
  if (currentLanguage === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTranslations();
});

// Export functions for global use
window.switchLanguage = switchLanguage;
window.getTranslation = getTranslation;

