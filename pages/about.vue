<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Header with links -->
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Weather-App</h1>
      <div class="space-x-4">
        Repository:
        <a
          href="https://github.com/jericrealubit/weather-app"
          target="_blank"
          class="text-blue-600 hover:underline"
        >
          Code & docs
        </a>
      </div>
    </header>

    <!-- Introduction Section -->
    <section class="mb-6">
      <p class="text-lg">In this view you can see:</p>
      <ul class="list-disc ml-6 mt-2">
        <li>
          Realtime current conditions (temp, feels-like, humidity, wind, UV
          index, precipitation)
        </li>
        <li>3-day forecast cards with hourly scroller</li>
        <li>
          Built-in light ⇄ dark toggle that persists your choice and respects
          your OS setting
        </li>
      </ul>
    </section>

    <!-- About the App Section -->
    <section class="mb-6">
      <p class="text-lg">
        “Weather-App” is a lightweight, fully responsive forecast viewer built
        with Vue 3, Nuxt 3, Tailwind CSS and the OpenWeatherMap API.
      </p>
      <h2 class="text-2xl font-semibold mt-4">Highlights:</h2>
      <ul class="list-disc ml-6 mt-2">
        <li>
          Nuxt composables for fetching & caching weather data by city,
          coordinates or zip code
        </li>
        <li>
          Tailwind’s
          <code class="bg-gray-100 text-sm p-1 rounded">dark:</code> variants
          for seamless theming across cards, headers & buttons
        </li>
        <li>
          Mobile-first design—layout adapts beautifully from phone to desktop
        </li>
        <li>
          Zero-build-step deployment: clone, <code>npm install</code>,
          <code>npm run dev</code> → or push to Netlify/Vercel
        </li>
      </ul>
    </section>

    <!-- Why I Built It Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-semibold mb-2">Why I built it:</h2>
      <p class="mb-4">
        I wanted a real-world playground to master Nuxt 3’s composables API,
        Tailwind theming, and progressive enhancement (no-JS fallback → light
        theme). Plus, it’s a handy widget I can embed anywhere.
      </p>
      <p class="mb-4">It’s 100% open source under MIT. If you:</p>
      <ul class="list-disc ml-6">
        <li>Are learning modern Vue/Nuxt and want a reference app</li>
        <li>Need a template for a simple REST-driven site with theming</li>
        <li>Have feature ideas, bugfixes or styling suggestions</li>
      </ul>
      <p class="mt-4">
        …please take a look, star ⭐ the
        <a
          href="https://github.com/jericrealubit/weather-app"
          target="_blank"
          class="text-blue-600 hover:underline"
        >
          repo</a
        >, and file an issue or PR. I’d love your feedback on architecture, code
        style, performance, or how to make this more approachable for newcomers.
      </p>
    </section>

    <!-- Footer Section -->
    <footer class="mt-8 border-t pt-4">
      <p>Thanks for checking it out, and happy coding!</p>
      <p class="mt-2">
        Connect with me on
        <a
          href="https://www.linkedin.com/in/jericrealubit/"
          target="_blank"
          class="text-blue-600 hover:underline"
          >LinkedIn</a
        >
        or email me at
        <a
          href="mailto:jericrealubit@gmail.con"
          class="text-blue-600 hover:underline"
          >jericrealubit@gmail.con</a
        >.
      </p>
    </footer>
  </div>
</template>
