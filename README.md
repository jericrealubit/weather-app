# Weather-App

A lightweight, fully responsive weather forecast viewer built with Vue 3, Nuxt 3, and Tailwind CSS. It features real-time online user statistics powered by Supabase.

Featuring a built-in light/dark mode toggle (persists to localStorage & respects your OS preference), mobile-first design, and zero-build-step deployment.

## 🔗 Links

- Live demo: https://weather-jeric.netlify.app/

## 📸 Screenshot

| Desktop                                              | Mobile                                              |
| ---------------------------------------------------- | --------------------------------------------------- |
| <img src="docs/screenshots/desktop.png" width="420"> | <img src="docs/screenshots/mobile.png" width="200"> |

## ⚡ Features

- Vue 3 + Nuxt 3 (Composition API / Nitro server)
- **Real-time online user count** using Supabase Presence channels
- Tailwind CSS with `dark:` variants for theming
- Light/dark mode toggle
  - Persists user choice in `localStorage`
  - Falls back to system `prefers-color-scheme`
  - Avoids flash-of-unstyled-content via Nuxt Color Mode
- Fetches & caches weather data by city name, coordinates or ZIP
- Displays:
  - Current temperature & feels-like
  - Humidity, wind speed, UV index, precipitation
  - 3-day forecast with hourly scroller
- Mobile-first, responsive grid layouts
- Zero-config deployment on Netlify, Vercel, etc.

## 🛠️ Technologies Used

- **Framework:** [Nuxt 3](https://nuxt.com/) (`nuxt`)
- **UI Library:** [Vue 3](https://vuejs.org/) (`vue`, `vue-router`)
- **Component Library:** [Nuxt UI](https://ui.nuxt.com/) (`@nuxt/ui`)
- **Icons:** [Nuxt Icon](https://nuxt.com/modules/icon) (`@nuxt/icon`) with [Heroicons](https://heroicons.com/) (`@iconify-json/heroicons`)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (`typescript`)
- **Package Manager:** (Assumed npm, but can be yarn or pnpm)

## 🚀 Getting Started

### Prerequisites

- An [OpenWeatherMap API key](https://openweathermap.org/api)
- A free [Supabase account](https://supabase.com/) and project
- [Node.js](https://nodejs.org/) (v18.x or newer recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

```bash
# 1. Clone repo
git clone https://github.com/jericrealubit/weather-app.git
cd weather-app

# 2. Install dependencies
npm install
# or
yarn install

# 3. Add your API key
# create a `.env` file in project root:
echo "OWM_API_KEY=your_api_key_here" > .env
```

Open the `.env` file and add the following content. Find your Supabase keys in your project's **Settings > API.**

```
# .env

# For OpenWeatherMap API
OWM_API_KEY=your_owm_api_key_here

# For Supabase Realtime Presence
NUXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NUXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_public_key
```

```
# 4. Run in development
npm run dev
```

Visit http://localhost:3000 in your browser.

Building & Preview

```bash
# Build production assets
npm run build

# Preview locally
npm run preview
```

⚙️ Configuration
All runtime config options live in nuxt.config.ts. You can override via environment variables:

```bash
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      owmApiKey: process.env.OWM_API_KEY || '',
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL || '',
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY || '',
    }
  }
})
```

Within your app you can access the key via:

```bash
const config = useRuntimeConfig()
const owmKey  = config.public.owmApiKey
const supabaseUrl = config.public.supabaseUrl
const supabaseKey = config.public.supabaseKey
```

## 🖥️ Usage

- **Search:** Type any city name (e.g. "London") or ZIP/postal code.
- **Geolocation:** Use the button to fetch weather at your current location.
- **Online Users:** The user count component in the header shows how many people are currently viewing the app in real-time.
- **Theming:** Toggle between light & dark using the button at the bottom.

## 📦 Deployment

This is a fully static-ready Nuxt 3 site—just push to Netlify, Vercel, or any static host:

1. Link your GitHub repo in your hosting dashboard.
2. Set the following environment variables in your hosting provider's settings:
   - `OWM_API_KEY`
   - `NUXT_PUBLIC_SUPABASE_URL`
   - `NUXT_PUBLIC_SUPABASE_KEY`
3. **Build command:** `npm run build`
4. **Publish directory:** `.output/public`

🤝 Contributing
Contributions, issues and feature requests are welcome! Please:

Fork the project
Create your feature branch (git checkout -b feat/YourFeature)
Commit your changes (git commit -m 'feat: add SomeFeature')
Push to the branch (git push origin feat/YourFeature)
Open a Pull Request`

📝 License
This project is open source under the MIT License.
