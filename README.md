# Portfolio Separated

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This project features a clean multi-page structure with modular CSS architecture for easy maintenance and scalability.

## 🌟 Features

- **Multi-page Structure**: Separate pages for different sections (Home, About, Skills, Projects, Contact)
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Dark/Light Theme**: Toggle between dark and light modes with persistent preference
- **Modular CSS**: Well-organized CSS files for easy maintenance
- **Smooth Animations**: Engaging animations and transitions
- **Contact Form**: Functional contact form with validation
- **Multi-language Support**: English and Arabic language support
- **Modern UI/UX**: Clean, professional design with modern aesthetics

## 📁 Project Structure

```
portfolio-separated/
├── index.html          # Home page
├── about.html           # About page
├── skills.html          # Skills page
├── projects.html        # Projects page
├── contact.html         # Contact page
├── assets/
│   ├── css/
│   │   ├── styles.css       # Main stylesheet (imports all modules)
│   │   ├── variables.css    # CSS custom properties and themes
│   │   ├── base.css         # Base styles and typography
│   │   ├── components.css   # Reusable components (buttons, cards, forms)
│   │   ├── layout.css       # Layout styles (navbar, footer, grids)
│   │   ├── pages.css        # Page-specific styles
│   │   ├── animations.css   # Animations and transitions
│   │   └── responsive.css   # Media queries and responsive design
│   ├── js/
│   │   ├── script.js        # Main JavaScript functionality
│   │   └── translations.js  # Language translations and i18n
│   └── images/          # Image assets
├── pdf/                 # PDF files (CV, documents)
└── README.md           # This file
```

## 🎨 CSS Architecture

The CSS is organized into modular files for better maintainability:

### 1. **variables.css**
- CSS custom properties (colors, fonts, spacing)
- Dark/light theme definitions
- Consistent design tokens

### 2. **base.css**
- Reset styles and base typography
- Global styles and utility classes
- Container and section layouts

### 3. **components.css**
- Reusable UI components
- Buttons, cards, forms, icons
- Interactive elements

### 4. **layout.css**
- Page layout structures
- Navigation, header, footer
- Grid systems and flexbox layouts

### 5. **pages.css**
- Page-specific styles
- Section-specific styling
- Content-specific layouts

### 6. **animations.css**
- CSS animations and keyframes
- Transition effects
- Hover states and interactions

### 7. **responsive.css**
- Media queries for all screen sizes
- Mobile-first responsive design
- Device-specific optimizations

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd portfolio-separated
   ```

## 📱 Pages Overview

### 🏠 Home (index.html)
- Hero section with introduction
- Education and experience timeline
- Call-to-action buttons

### 👤 About (about.html)
- Personal information and background
- Contact details
- Professional summary

### 🛠️ Skills (skills.html)
- Technical skills with progress bars
- Categorized by Frontend, Backend, Programming Languages, Tools
- Interactive skill animations

### 💼 Projects (projects.html)
- Portfolio of completed projects
- Project cards with descriptions and technologies
- Links to live demos and source code

### 📞 Contact (contact.html)
- Contact form with validation
- Contact information
- Social media links

## 🎯 Customization

### Updating Content

1. **Personal Information**
   - Edit the content in each HTML file
   - Update contact details in `contact.html`
   - Replace placeholder images in `assets/images/`

2. **Colors and Themes**
   - Modify CSS custom properties in `assets/css/variables.css`
   - Adjust color schemes for both light and dark themes

3. **Adding New Projects**
   - Add project cards in `projects.html`
   - Include project images in `assets/images/`
   - Update project descriptions and technologies

4. **Styling Changes**
   - Modify relevant CSS files based on the component you want to change
   - Use the modular structure to make targeted updates

### Adding New Languages

1. **Update translations.js**
   ```javascript
   const translations = {
     en: { /* English translations */ },
     ar: { /* Arabic translations */ },
     fr: { /* Add French translations */ }
   };
   ```

2. **Add language selector**
   - Uncomment language dropdown in navigation
   - Add new language options

## 🔧 Development

### CSS Development
- Each CSS module serves a specific purpose
- Use CSS custom properties for consistent theming
- Follow the existing naming conventions
- Test responsive design on multiple devices

### JavaScript Development
- Main functionality is in `script.js`
- Translations are handled in `translations.js`
- Functions are modular and well-documented
- Event listeners are properly managed

### Best Practices
- Keep CSS modules focused and single-purpose
- Use semantic HTML elements
- Optimize images for web
- Test across different browsers
- Validate HTML and CSS

## 📊 Performance

- **Optimized CSS**: Modular structure allows for efficient loading
- **Minimal JavaScript**: Lightweight vanilla JavaScript
- **Responsive Images**: Properly sized images for different devices
- **Fast Loading**: Optimized for quick page loads

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [M IT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Farea AL-Dhela'a**
- Email: faraa717281413@gmail.com
- Phone: +967 717 281 413
- LinkedIn: [farea-al-dhela-a](https://www.linkedin.com/in/farea-al-dhela-a-9624b431a)
- GitHub: [farea-aldhelaa](https://github.com/CS24-8-7)
- Twitter: [@farea_aldhelaa](https://x.com/farea_aldhelaa)

## 🙏 Acknowledgments

- Icons by [Boxicons](https://boxicons.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Design inspiration from modern portfolio trends

---

**Built with ❤️ by Farea AL-Dhela'a**

