<template>
  <div class="p-4 border-t dark:border-gray-800">
    <div class="flex items-center justify-between">
      <ThemeToggle class="hover:cursor-pointer" />
      <div class="text-sm text-gray-500">
        © {{ new Date().getFullYear() }} WeatherApp - Powered by
        <NuxtLink to="https://www.weatherapi.com/" title="Free Weather API"
          >WeatherAPI.com</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
