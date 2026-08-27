# My Portfolio

My personal portfolio website built with React, Vite, TypeScript, and Framer Motion. This portfolio showcases my work, skills, and experience as a Fullstack Developer.

## 🚀 Live Demo

[View Portfolio](https://franciskojohaizel.vercel.app/)

## ✨ Features

- **Dark/Light Mode** - Toggle between themes with a smooth transition
- **Interactive Music Player** - Background music with play/pause controls
- **Responsive Design** - Fully responsive across all devices
- **Smooth Animations** - Built with Framer Motion for engaging interactions
- **Project Showcase** - Featured projects with live demo and source code links
- **Contact Form** - Integrated with Formspree for easy communication
- **Tech Stack Display** - Interactive 3D Icon Cloud showing technologies
- **FAQ Section** - Common questions with expandable answers
- **Marquee Slider** - Infinite scrolling project showcase
- **TypeScript Support** - Full TypeScript integration for better type safety

## 🛠️ Technologies Used

### Frontend
- **React** - UI Library
- **Vite** - Build Tool
- **TypeScript** - Type-safe JavaScript
- **Framer Motion** - Animations
- **React Icons** - Icon Library
- **React Intersection Observer** - Scroll animations

### UI Components
- **Magic UI** - Premium UI components library
  - Icon Cloud - Interactive 3D technology cloud
  - Marquee - Infinite scrolling carousel
  - Shimmer Button - Animated button effects

### Backend & Services
- **Formspree** - Contact form handling
- **Vercel** - Hosting and deployment

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Franbeko/myportfolio.git

# Navigate to project directory
cd myportfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy with Vercel
npm install -g vercel
vercel

📁 Project Structure
text
myportfolio/
├── public/
│   ├── memojis/          # Memoji images
│   ├── music/            # Background music
│   ├── projects/         # Project screenshots
│   └── resume/           # Resume PDF
├── src/
│   ├── components/
│   │   ├── ui/           # Magic UI components
│   │   │   ├── icon-cloud.tsx
│   │   │   ├── marquee.tsx
│   │   │   ├── shimmer-button.tsx
│   │   │   └── button.tsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── MarqueeSlider.jsx
│   │   ├── Projects.jsx
│   │   ├── TechStack.jsx
│   │   └── Value.jsx
│   ├── lib/
│   │   └── utils.ts       # Utility functions (cn)
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── index.css              # CSS Styles
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── package.json           # Dependencies
└── README.md              # This file

🎯 Key Updates
TypeScript Integration
Migrated to TypeScript for better type safety

Added tsconfig.json and vite.config.ts

Created utils.ts utility file

Magic UI Components
Icon Cloud: Interactive 3D rotating technology cloud

Marquee: Infinite scrolling project showcase

Shimmer Button: Premium animated buttons

Design Improvements
Cleaner button design (removed shimmer effects)

Better text centering and alignment

Improved dark/light mode support

Added PhpMyAdmin and Thunder Client to tech stack

📱 Connect With Me
Portfolio: franciskojohaizel.vercel.app

GitHub: Franbeko

LinkedIn: Francis Kojo Haizel

📄 License
This project is open source and available under the MIT License.

🙏 Acknowledgments
Built with React, Vite, and TypeScript

Icons by React Icons

UI Components by Magic UI

Hosted on Vercel