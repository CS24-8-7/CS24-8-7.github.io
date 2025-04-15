// الترجمة

const translations = {
  en: {
    "nav": {
      "home": "Home",
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact"
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
    "personal": {
      "name": "Farea AL-Dhela'a"
    },
    
    "footer": {
      "tagline": "Creating digital experiences that matter.",
      "links": "Quick Links",
      "services": "Services",
      "rights": "All rights reserved."
    },
    "services": {
      "web": "Web Development",
      "mobile": "Mobile App Development",
      "database": "Database Solutions",
      "consulting": "Software Consulting"
    }
  },
  ar: {
    "nav": {
      "home": "الرئيسية",
      "about": "عني",
      "skills": "المهارات",
      "projects": "المشاريع",
      "contact": "اتصل بي"
    },
    "hero": {
      "subtitle": "مطور برمجيات متكامل",
      "description": "خريج علوم حاسوب شغوف ببناء تطبيقات حديثة وقابلة للتوسع مع تجارب مستخدم سهلة.",
      "download": "تحميل السيرة الذاتية",
      "contact": "تواصل معي"
    },
    "about": {
      "title": "عني",
      "subtitle": "تعرف عليّ أكثر",
      "who": "من أنا",
      "description": "أنا خريج علوم حاسوب شغوف بإنشاء تطبيقات مبتكرة وفعالة. درست مجموعة واسعة من لغات البرمجة واكتسبت خبرة عملية من خلال مشاريع الجامعة والتدريبات.",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف",
      "location": "الموقع"
    },
    "skills": {
      "title": "مهاراتي",
      "subtitle": "التقنيات التي أعمل بها",
      "backend": "الخلفية",
      "frontend": "واجهة المستخدم",
      "programming": "لغات البرمجة",
      "viewAll": "عرض جميع المشاريع"
    },
    "projects": {
      "title": "مشاريعي",
      "subtitle": "بعض أعمالي الحديثة"
    },
    "timeline": {
      "education": "التعليم",
      "experience": "الخبرة",
      "degree": "بكالوريوس في علوم الحاسوب",
      "degreeDesc": "تخرجت بتركيز على تطوير البرمجيات وهندسة النظم. أكملت مساقات في الخوارزميات، قواعد البيانات، وهندسة البرمجيات.",
      "freelance": "مطور مستقل",
      "selfEmployed": "عمل حر",
      "freelanceDesc": "تطوير حلول برمجية مخصصة للعملاء، بما في ذلك تطبيقات الويب، التطبيقات المحمولة، وأنظمة قواعد البيانات."
    },
    "contact": {
      "title": "تواصل معي",
      "subtitle": "لنعمل معاً",
      "infoTitle": "معلومات التواصل",
      "infoText": "لا تتردد في التواصل معي لأي استفسارات أو فرص. أنا متاح لمشاريع العمل الحر والوظائف الدائمة.",
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
      "tagline": "صنع تجارب رقمية ذات معنى.",
      "links": "روابط سريعة",
      "services": "الخدمات",
      "rights": "جميع الحقوق محفوظة."
    },
    "services": {
      "web": "تطوير الويب",
      "mobile": "تطوير التطبيقات",
      "database": "حلول قواعد البيانات",
      "consulting": "استشارات برمجية"
    },
    "personal": {
      "name": "فــارع الضلاع"
    }
  }
};
// دالة للوصول للقيمة من كائن متداخل باستخدام سلسلة مفاتيح
function getNestedTranslation(obj, key) {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// دالة تغيير اللغة
function switchLanguage(lang) {
  // تغيير اتجاه الصفحة
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // تغيير النصوص
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const value = getNestedTranslation(translations[lang], key);
    if (value) {
      element.textContent = value;
    }
  });

  // تغيير placeholder لحقول الإدخال
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    const value = getNestedTranslation(translations[lang], key);
    if (value) {
      element.placeholder = value;
    }
  });

  // إغلاق قائمة اللغة
  document.getElementById('lang-menu').classList.remove('show');

  // حفظ اللغة المفضلة
  localStorage.setItem('preferredLanguage', lang);
}


// دالة تبديل قائمة اللغة
function toggleLangMenu() {
  document.getElementById('lang-menu').classList.toggle('show');
}

// عند تحميل الصفحة، تحقق من اللغة المفضلة
document.addEventListener('DOMContentLoaded', function () {
  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
  switchLanguage(preferredLanguage);

  // إضافة حدث للنقر خارج قائمة اللغة لإغلاقها
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.language-dropdown')) {
      document.getElementById('lang-menu').classList.remove('show');
    }
  });
});