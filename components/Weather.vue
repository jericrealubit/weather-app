<script setup>
const { loadWeatherData, getLocalWeather, loading, error, weather, forecast } =
  useWeatherApi();

const searchQuery = ref("Christchurch");

// Format date: "Mon, 12 May"
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

// Format time: "12:34 PM"
const formatTime = (datetimeStr) => {
  return new Date(datetimeStr).toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    day: "numeric",
    month: "short",
  });
};

// Format hour: "3 PM"
const formatHour = (timeStr) => {
  return new Date(timeStr).toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });
};

// Get filtered hours (every 3 hours) for display
const getFilteredHours = (hours) => {
  return hours.filter((_, index) => index % 3 === 0);
};

// Search weather for entered location
const searchWeather = async () => {
  if (searchQuery.value.trim()) {
    await loadWeatherData(searchQuery.value, 3);
  }
};

// Get weather for user's current location
const getUserLocation = async () => {
  try {
    await getLocalWeather(3);
  } catch (err) {
    // Error is handled in the composable
  }
};

// Load initial weather data
onMounted(async () => {
  await loadWeatherData("Christchurch", 3);
});
</script>

<template>
  <div>
    <div class="mb-4">
      <div class="flex gap-2">
        <UInput
          v-model="searchQuery"
          placeholder="Enter location..."
          class="flex-grow"
        />
        <UButton color="primary" @click="searchWeather" :loading="loading">
          Search
        </UButton>
        <UButton
          color="gray"
          icon="i-heroicons-map-pin"
          @click="getUserLocation"
          :loading="loading"
        />
      </div>
    </div>

    <UAlert v-if="error" type="danger" :title="error" class="mb-4" />

    <!-- Current Weather -->
    <UCard v-if="weather" class="mb-6">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="text-xl font-bold">{{ weather.location.name }}</h2>
          <p class="text-sm text-gray-500">
            {{ weather.location.region }}, {{ weather.location.country }}
          </p>
          <p class="text-xs text-gray-400">
            {{ formatTime(weather.location.localtime) }}
          </p>
        </div>
        <div class="text-right">
          <p class="text-3xl font-bold">{{ weather.current.temp_c }}°C</p>
          <p class="text-sm">Feels like {{ weather.current.feelslike_c }}°C</p>
        </div>
      </div>

      <div class="flex items-center mt-4">
        <img
          :src="weather.current.condition.icon"
          :alt="weather.current.condition.text"
          class="w-16 h-16"
        />
        <p class="ml-2 text-lg">{{ weather.current.condition.text }}</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
        <div class="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
          <div class="text-sm text-gray-500">Humidity</div>
          <div class="font-bold">{{ weather.current.humidity }}%</div>
        </div>
        <div class="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
          <div class="text-sm text-gray-500">Wind</div>
          <div class="font-bold">{{ weather.current.wind_kph }} km/h</div>
        </div>
        <div class="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
          <div class="text-sm text-gray-500">UV Index</div>
          <div class="font-bold">{{ weather.current.uv }}</div>
        </div>
        <div class="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
          <div class="text-sm text-gray-500">Precipitation</div>
          <div class="font-bold">{{ weather.current.precip_mm }} mm</div>
        </div>
      </div>
    </UCard>

    <!-- Forecast -->
    <div v-if="forecast">
      <h3 class="text-xl font-bold mb-4">
        {{ forecast.forecastday.length }}-Day Forecast
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <UCard
          v-for="day in forecast.forecastday"
          :key="day.date"
          class="text-center"
        >
          <h4 class="font-medium mb-2">{{ formatDate(day.date) }}</h4>
          <div class="flex justify-center mb-2">
            <img
              :src="day.day.condition.icon"
              :alt="day.day.condition.text"
              class="w-16 h-16"
            />
          </div>
          <p class="mb-2">{{ day.day.condition.text }}</p>
          <div class="flex justify-center gap-4">
            <span class="text-blue-500"
              >{{ Math.round(day.day.mintemp_c) }}°</span
            >
            <span class="font-bold text-red-500"
              >{{ Math.round(day.day.maxtemp_c) }}°</span
            >
          </div>

          <!-- Hourly forecast sample -->
          <div class="mt-4 pt-4 border-t overflow-x-auto">
            <div class="flex gap-4 min-w-max pb-2">
              <div
                v-for="(hour, index) in getFilteredHours(day.hour)"
                :key="index"
                class="text-center min-w-14"
              >
                <div class="text-xs">{{ formatHour(hour.time) }}</div>
                <img
                  :src="hour.condition.icon"
                  :alt="hour.condition.text"
                  class="w-10 h-10 mx-auto"
                />
                <div class="font-medium">{{ Math.round(hour.temp_c) }}°</div>
              </div>
            </div>
          </div>
        </UCard>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading && !weather" class="flex justify-center my-12">
      <ULoadingIcon />
    </div>
  </div>
</template>
