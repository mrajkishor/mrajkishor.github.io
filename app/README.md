# Personal Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, project showcases, and contact functionality.

## 🚀 Features

- **Modern Design**: Clean, professional layout with dark theme and vibrant accents
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Navigation**: Sticky header with smooth scrolling to sections
- **Project Showcase**: Interactive cards displaying projects with GitHub and live demo links
- **Skills Grid**: Organized display of technical skills and proficiencies
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Fast loading with optimized assets and animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: React Icons (Feather Icons)
- **UI Components**: shadcn/ui
- **Animations**: CSS animations with Tailwind
- **Deployment**: GitHub Pages ready

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Building for Production

1. **Build the project**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Preview the build locally** (optional)
   ```bash
   npm run preview
   # or
   yarn preview
   ```

The build files will be generated in the `dist` directory.

## 🚀 Deployment to GitHub Pages

### Method 1: Using gh-pages package (Recommended)

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deployment scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

### Method 2: GitHub Actions (Automated)

1. **Create `.github/workflows/deploy.yml`**
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch

### Method 3: Manual Upload

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your GitHub Pages repository
3. Ensure `index.html` is in the root

## ⚙️ Customization

### Personal Information
Update the following files with your information:

- **`src/data/projects.ts`**: Add your projects
- **`src/components/Hero.tsx`**: Update name, title, and bio
- **`src/components/About.tsx`**: Modify about section content
- **`src/components/Skills.tsx`**: Update your skills and technologies
- **`src/components/Contact.tsx`**: Add your contact information

### Styling
- **Design System**: Modify `src/index.css` for colors and design tokens
- **Theme**: Adjust Tailwind config in `tailwind.config.ts`
- **Components**: Customize individual components in `src/components/`

### SEO & Meta Tags
Update meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to:
- Open an issue on GitHub
- Contact me via the portfolio contact form
- Connect with me on [LinkedIn](https://linkedin.com/in/yourusername)

---

**Built with ❤️ using React and Tailwind CSS**