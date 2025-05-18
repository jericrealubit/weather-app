// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  router: {
    options: {
      silentRouterFailures: true,
    },
  },
  runtimeConfig: {
    public: {
      weatherApiKey: process.env.NUXT_PUBLIC_WEATHER_API_KEY,
    },
  },
  nitro: {
    serveStatic: true,
  },
});
