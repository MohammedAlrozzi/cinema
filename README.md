# Gaza Children Cinema 🎬

A vibrant, bilingual children's cinema website built with React, TypeScript, and Vite. This website showcases colorful characters and stories in a playful, child-friendly interface.

## ✨ Features

- 🌈 **Colorful & Playful Design**: Vibrant colors and animations specifically designed for children
- 🌍 **Bilingual Support**: Full support for English and Arabic (with RTL layout)
- 🌓 **Dark & Light Mode**: Theme switching for comfortable viewing
- 📱 **Fully Responsive**: Works seamlessly on all devices
- ⚡ **Fast & Modern**: Built with Vite and React 19
- 🎨 **Character Gallery**: Showcases diverse, engaging characters
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
│   │   ├── CharacterCard.tsx
│   │   ├── CharacterGallery.tsx
│   │   └── Footer.tsx
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/              # Data files
│   │   └── characters.ts   # Character data
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

## 🎨 Character Data

The website currently uses sample character data. To import data from gazachildrencinema.org:

1. Prepare a JSON file with the following structure:
```json
{
  "characters": [
    {
      "id": 1,
      "name": "Character Name",
      "nameAr": "اسم الشخصية",
      "age": 8,
      "personality": "Trait",
      "personalityAr": "سمة",
      "favoriteActivity": "Activity",
      "favoriteActivityAr": "نشاط",
      "color": "#FF6B9D",
      "emoji": "🎨",
      "description": "Description",
      "descriptionAr": "وصف"
    }
  ]
}
```

2. Update the `src/data/characters.ts` file with your data.

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

Built with love for the children of Gaza and children everywhere. This website aims to bring joy, education, and entertainment to young minds through colorful characters and engaging stories.

---

Made with ❤️ for children everywhere 🌟
