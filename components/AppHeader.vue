<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const isMobileMenuOpen = ref(false);

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Home",
      icon: "material-symbols:home-outline",
      to: "/",
    },
    {
      label: "About",
      icon: "ix:about",
      to: "/about",
    },
  ],
]);
</script>

<template>
  <header
    class="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 left-0 z-10"
  >
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center">
            <img class="h-8 w-auto" src="/favicon.ico" alt="Logo" />
            <span class="ml-2 text-xl font-bold">App</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <UNavigationMenu :items="items" class="hidden md:flex space-x-4" />

        <!-- Mobile Navigation -->
        <USlideover
          title="Navigation"
          close-icon="i-lucide-arrow-right"
          v-model:open="isMobileMenuOpen"
          class="w-auto"
        >
          <div class="md:hidden">
            <UButton
              icon="i-heroicons-bars-3"
              color="gray"
              variant="ghost"
              aria-label="Menu"
              @click="isMobileMenuOpen = false"
            />
          </div>
          <template #body>
            <div @click="isMobileMenuOpen = false">
              <UNavigationMenu orientation="vertical" :items="items" />
            </div>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>

<style scope>
#reka-dialog-content-v-0-1 {
  width: 70%;
}
</style>
