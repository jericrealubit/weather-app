// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  router: {
    options: {
      silentRouterFailures: true,
    },
  },
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.NUXT_PUBLIC_WEATHER_API_KEY,
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY,
    },
  },
  nitro: {
    serveStatic: true,
  },
  colorMode: {
    // we will toggle a `class="dark"` on <html>
    classSuffix: "",
    // default to the user’s OS setting
    preference: "system",
    // fallback to light if JS is disabled
    fallback: "light",
    // key in localStorage
    storageKey: "nuxt-color-mode",
  },
  // Ensure Tailwind is in "class" mode
  tailwindcss: {
    viewer: false,
  },
});
