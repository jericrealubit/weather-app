# Nuxt 3 App (nuxt-app)

A modern web application built with [Nuxt 3](https://nuxt.com/). This project is set up with TypeScript, Nuxt UI for pre-built components, and Nuxt Icon for easy icon integration.

_(Optional: Add a more specific description of what your application does here.)_

## ✨ Features

- **Nuxt 3:** Leverages the latest features of the Nuxt framework, including a powerful server engine, auto-imports, and file-system routing.
- **Vue 3:** Built with the Composition API and other modern Vue features.
- **TypeScript:** For robust, type-safe code.
- **Nuxt UI:** ([@nuxt/ui](https://ui.nuxt.com/)) Integrated for a set of beautifully designed and customizable UI components.
- **Nuxt Icon:** ([@nuxt/icon](https://nuxt.com/modules/icon)) For easy access and use of thousands of icons (with Heroicons pre-configured).
- **ESM Native:** Configured as an ES Module (`"type": "module"`).

## 📸 Screenshot

| Desktop                                              | Mobile                                              |
| ---------------------------------------------------- | --------------------------------------------------- |
| <img src="docs/screenshots/desktop.png" width="420"> | <img src="docs/screenshots/mobile.png" width="200"> |

## Try it Live

https://weather-jeric.netlify.app/

## 🛠️ Technologies Used

- **Framework:** [Nuxt 3](https://nuxt.com/) (`nuxt`)
- **UI Library:** [Vue 3](https://vuejs.org/) (`vue`, `vue-router`)
- **Component Library:** [Nuxt UI](https://ui.nuxt.com/) (`@nuxt/ui`)
- **Icons:** [Nuxt Icon](https://nuxt.com/modules/icon) (`@nuxt/icon`) with [Heroicons](https://heroicons.com/) (`@iconify-json/heroicons`)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (`typescript`)
- **Package Manager:** (Assumed npm, but can be yarn or pnpm)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or newer recommended)
- [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd nuxt-app
    ```

    _(Replace `<your-repository-url>` with the actual URL of your repository)_

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```
    Or using pnpm:
    ```bash
    pnpm install
    ```
    _(This will also run `nuxt prepare` due to the `postinstall` script, generating necessary types and stubs.)_

### Development Server

Run the development server:

```bash
npm run dev
```
