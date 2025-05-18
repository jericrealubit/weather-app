// composables/useWeatherApi.ts
export const useWeatherApi = () => {
  const config = useRuntimeConfig();
  const apiKey = config.public.weatherApiKey;
  const baseUrl = "https://api.weatherapi.com/v1";

  const weather = ref(null);
  const forecast = ref(null);
  const loading = ref(false);
  const error = ref(null);

  /**
   * Get current weather for a location
   * @param location - City name, lat/long coordinates, or IP address
   */
  const getCurrentWeather = async (location) => {
    if (!location) return null;

    loading.value = true;
    error.value = null;

    try {
      const data = await $fetch(`${baseUrl}/current.json`, {
        params: {
          key: apiKey,
          q: location,
        },
      });

      weather.value = data;
      return data;
    } catch (err) {
      console.error("Error fetching current weather:", err);
      error.value = getErrorMessage(err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Get weather forecast for a location
   * @param location - City name, lat/long coordinates, or IP address
   * @param days - Number of days of forecast (1-10)
   * @param aqi - Include air quality data (yes/no)
   * @param alerts - Include weather alerts (yes/no)
   */
  const getForecast = async (location, days = 3, aqi = "no", alerts = "no") => {
    if (!location) return null;

    loading.value = true;
    error.value = null;

    try {
      const data = await $fetch(`${baseUrl}/forecast.json`, {
        params: {
          key: apiKey,
          q: location,
          days,
          aqi,
          alerts,
        },
      });

      forecast.value = data;
      return data;
    } catch (err) {
      console.error("Error fetching forecast:", err);
      error.value = getErrorMessage(err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Search for locations
   * @param query - Search query
   */
  const searchLocations = async (query) => {
    if (!query) return [];

    try {
      return await $fetch(`${baseUrl}/search.json`, {
        params: {
          key: apiKey,
          q: query,
        },
      });
    } catch (err) {
      console.error("Error searching locations:", err);
      error.value = getErrorMessage(err);
      return [];
    }
  };

  /**
   * Get historical weather data
   * @param location - City name, lat/long coordinates, or IP address
   * @param date - Date in yyyy-MM-dd format
   */
  const getHistoricalWeather = async (location, date) => {
    if (!location || !date) return null;

    loading.value = true;
    error.value = null;

    try {
      const data = await $fetch(`${baseUrl}/history.json`, {
        params: {
          key: apiKey,
          q: location,
          dt: date,
        },
      });

      return data;
    } catch (err) {
      console.error("Error fetching historical weather:", err);
      error.value = getErrorMessage(err);
      return null;
    } finally {
      loading.value = false;
    }
  };

  /**
   * Load weather and forecast data together
   * @param location - City name, lat/long coordinates, or IP address
   * @param days - Number of forecast days
   */
  const loadWeatherData = async (location, days = 3) => {
    if (!location) return { weather: null, forecast: null };

    loading.value = true;
    error.value = null;

    try {
      // Get forecast (includes current weather)
      const data = await getForecast(location, days);

      if (data) {
        // Extract current weather and forecast for easier access
        weather.value = {
          location: data.location,
          current: data.current,
        };

        forecast.value = data.forecast;

        return {
          weather: weather.value,
          forecast: forecast.value,
        };
      }

      return { weather: null, forecast: null };
    } catch (err) {
      console.error("Error loading weather data:", err);
      error.value = getErrorMessage(err);
      return { weather: null, forecast: null };
    } finally {
      loading.value = false;
    }
  };

  /**
   * Get user's current location weather
   * Uses browser geolocation API
   */
  const getLocalWeather = async (days = 3) => {
    loading.value = true;
    error.value = null;

    try {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const location = `${latitude},${longitude}`;

            try {
              const data = await loadWeatherData(location, days);
              resolve(data);
            } catch (err) {
              console.error("Error fetching local weather:", err);
              error.value = getErrorMessage(err);
              reject(err);
            } finally {
              loading.value = false;
            }
          },
          (err) => {
            console.error("Geolocation error:", err);
            error.value =
              "Unable to access your location. Please check browser permissions.";
            loading.value = false;
            reject(err);
          }
        );
      });
    } catch (err) {
      error.value = "Failed to get location";
      loading.value = false;
      return { weather: null, forecast: null };
    }
  };

  /**
   * Extract error message from API error
   */
  const getErrorMessage = (err) => {
    if (err.response?.data?.error?.message) {
      return err.response.data.error.message;
    }
    return "An error occurred while fetching weather data";
  };

  return {
    // State
    weather,
    forecast,
    loading,
    error,

    // Methods
    getCurrentWeather,
    getForecast,
    searchLocations,
    getHistoricalWeather,
    loadWeatherData,
    getLocalWeather,
  };
};
