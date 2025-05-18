# NuxtJS Starter Template

[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-v3-00C58E.svg)](https://nuxt.com/)
[![NuxtUI](https://img.shields.io/badge/NuxtUI-latest-00DC82.svg)](https://ui.nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-latest-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/github/license/jericrealubit/nuxtjs-start)](https://github.com/jericrealubit/nuxtjs-start/blob/main/LICENSE)

A modern, feature-rich starter template for Nuxt.js applications with pre-configured components, layouts, and best practices to help you build production-ready applications faster.

![NuxtJS Starter Template Preview](https://placehold.co/800x400?text=NuxtJS+Starter+Template)

## 🚀 Features

- 📱 Responsive layouts with mobile-first approach
- 🎨 NuxtUI components pre-configured
- 🌗 Dark mode support out of the box
- 🍞 Toast notifications system
- 🔄 API integration examples
- 🧩 Custom reusable components
- 📝 Form validation examples
- 📊 Responsive navigation and layouts
- 📦 Modular file structure
- 🔧 ESLint and Prettier configured
- ⚡ Fast page transitions

## 🔧 Technologies

- [Nuxt 3](https://nuxt.com/) - The Intuitive Vue Framework
- [NuxtUI](https://ui.nuxt.com/) - UI Component library for Nuxt
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Heroicons](https://heroicons.com/) - Beautiful SVG icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/jericrealubit/nuxtjs-start.git my-project

# Navigate to the project directory
cd my-project

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 Usage

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application running.

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build

# Start production server
npm run start
# or
yarn start
# or
pnpm start
```

## 🗂️ Project Structure

```
nuxtjs-start/
├── assets/             # Static assets (CSS, images, fonts)
├── components/         # Vue components
│   ├── app/            # Application-specific components
│   ├── common/         # Common/shared components
│   └── ui/             # UI components
├── composables/        # Vue composables (shared logic)
├── layouts/            # Page layouts
├── middleware/         # Nuxt middleware
├── pages/              # Application pages
├── plugins/            # Vue plugins
├── public/             # Public static assets
├── server/             # Server-side code (API routes, etc.)
├── stores/             # Pinia stores (state management)
├── utils/              # Utility functions
├── .eslintrc.js        # ESLint configuration
├── .gitignore          # Git ignore rules
├── app.vue             # Main app component
├── nuxt.config.ts      # Nuxt configuration
├── package.json        # Project dependencies
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## ✨ Key Components

### Layouts

- **Default Layout** - Standard page layout with header, footer, and main content area
- **Dashboard Layout** - Admin dashboard with sidebar navigation
- **Auth Layout** - Clean layout for authentication pages

### Navigation Components

- **Header** - Responsive top navigation with mobile hamburger menu
- **Footer** - Standard site footer
- **Sidebar** - Collapsible sidebar navigation for dashboard
- **Breadcrumbs** - Navigation breadcrumbs

### UI Components

- Form components (inputs, buttons, selectors)
- Cards and containers
- Modal and dialog components
- Alert and notification components
- Loading indicators

## 🎨 Customization

### Theming

Modify the `tailwind.config.js` file to customize colors, fonts, and other design tokens:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          // add your custom color palette
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // customize fonts
      },
    },
  },
};
```

### Layout Customization

Customize the provided layouts or create new ones in the `layouts/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Jeric Realubit**

- GitHub: [@jericrealubit](https://github.com/jericrealubit)

---

Made with ❤️ by Jeric Realubit
# weather-app
