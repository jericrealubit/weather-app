<template>
  <div class="p-4 border-t dark:border-gray-800">
    <div class="flex items-center justify-between">
      <UButton
        icon="i-heroicons-moon"
        color="gray"
        variant="ghost"
        aria-label="Toggle dark mode"
      />
      <div class="text-sm text-gray-500">
        © {{ new Date().getFullYear() }} App
      </div>
    </div>
  </div>
</template>
