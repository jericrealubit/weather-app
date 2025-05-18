<template>
  <div>Default layout</div>
  <AppHeader />

  <main class="flex-1 pt-16 px-5">
    <slot />
  </main>

  <AppFooter />
</template>
