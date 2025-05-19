import { defineConfig } from "tailwindcss";

export default defineConfig({
  darkMode: "class", // ← important!
  theme: {
    extend: {
      // your custom colors, spacing, etc.
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      // etc…
    },
  },
  plugins: [],
});
