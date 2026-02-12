# Gaza Children Cinema 🎬

A vibrant, bilingual cinema organization website built with React, TypeScript, and Vite. This website showcases our community-based, volunteer-driven initiative bringing cinema education and creative learning resources to children.

## ✨ Features

- 🎥 **About Us**: Information about our cinema initiative and mission
- 🌱 **Journey Timeline**: Interactive timeline showcasing the phases of our cinema initiative
- 📝 **Blog Section**: Stories and insights from our community experiences
- 📚 **Learning Resources**: Comprehensive library of video, audio, and document resources
- 🤝 **Community Focus**: Highlighting our volunteer-driven, community-based nature
- 🌍 **Bilingual Support**: Full support for English and Arabic (with RTL layout)
- 🌓 **Dark & Light Mode**: Theme switching for comfortable viewing
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Fast & Modern**: Built with Vite and React 19
- ♿ **Accessible**: Built with accessibility best practices

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **i18next** - Internationalization
- **CSS Variables** - Theme management
- **Vercel** - Deployment platform

## 🏗️ Project Structure

```
cinema/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation and controls
│   │   ├── Hero.tsx        # Hero section
│   │   ├── AboutUs.tsx     # About our initiative
│   │   ├── Journey.tsx     # Timeline of phases
│   │   ├── Blog.tsx        # Blog posts
│   │   ├── Resources.tsx   # Learning resources library
│   │   └── Footer.tsx
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── i18n/              # Internationalization
│   │   ├── config.ts
│   │   └── locales/
│   │       ├── en.json     # English translations
│   │       └── ar.json     # Arabic translations
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
└── vercel.json          # Vercel configuration
```

## 🎮 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MohammedAlrozzi/cinema.git
cd cinema
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MohammedAlrozzi/cinema)

Or manually:
```bash
npm install -g vercel
vercel
```

## 🎥 About the Initiative

This website represents a community-based, volunteer-driven cinema initiative dedicated to:
- Bringing cinema education to children
- Creating a space for shared learning and creativity
- Building community through film and storytelling
- Providing comprehensive learning resources

The website includes:
- **About Section**: Information about our mission and community-based approach
- **Journey Timeline**: The history and phases of our cinema initiative
- **Blog**: Stories and insights from our volunteers and community
- **Resources**: Educational materials including video tutorials, audio content, and documents

## 🌐 Internationalization

The site supports English and Arabic. To add more languages:

1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to `src/i18n/config.ts`
3. Update the language switcher in `src/components/Header.tsx`

## 🎨 Theming

The website uses CSS variables for theming. You can customize colors in `src/index.css`:

```css
:root[data-theme="light"] {
  --primary-color: #FF6B9D;
  --secondary-color: #4ECDC4;
  /* ... more variables */
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💖 Acknowledgments

This website represents our commitment to cinema education and community building. We are dedicated to inspiring children through the power of film and storytelling, powered by volunteers and supported by the community.

---

Made with ❤️ for children everywhere 🌟
