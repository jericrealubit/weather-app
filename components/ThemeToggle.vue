<template>
  <button
    @click="toggle"
    class="mr-1 px-2 py-1 rounded bg-blue-600 text-white dark:bg-yellow-500 dark:text-black transition-colors text-xs"
  >
    <span v-if="isDark">☀️ Light</span>
    <span v-else>🌙 Dark</span>
  </button>
</template>

<script setup lang="ts">
import { useColorMode } from "#imports";
import { computed } from "vue";

const colorMode = useColorMode();

// read current mode
const isDark = computed(() => colorMode.value === "dark");

function toggle() {
  // write to the `preference` computed setter
  colorMode.preference = isDark.value ? "light" : "dark";
}
</script>
