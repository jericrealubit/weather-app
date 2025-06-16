<template>
  <!-- Your template with Tailwind CSS remains the same -->
  <div
    class="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 font-sans text-sm text-gray-700 dark:text-gray-100"
  >
    <span
      class="h-2.5 w-2.5 rounded-full transition-colors duration-300 ease-in-out"
      :class="{ 'bg-green-500': isConnected, 'bg-red-500': !isConnected }"
    ></span>
    <span v-if="isConnected">{{ userCount }} users online</span>
    <span v-else class="text-gray-500">Connecting...</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { createClient } from "@supabase/supabase-js";

// --- 1. Get config from Nuxt's runtimeConfig ---
// This is the idiomatic Nuxt 3 way to access environment variables.
const config = useRuntimeConfig();

// --- 2. Initialize the Supabase client using the config ---
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseKey
);

// --- 3. Define Reactive State ---
const userCount = ref(0);
const isConnected = ref(false);
const channel = ref(null);

// --- 4. Lifecycle Hooks (no changes to the logic) ---
onMounted(() => {
  channel.value = supabase.channel("online-users");

  channel.value
    .on("presence", { event: "sync" }, () => {
      const presenceState = channel.value.presenceState();
      userCount.value = Object.keys(presenceState).length;
      isConnected.value = true;
    })
    .on("presence", { event: "join" }, () => {
      userCount.value++;
    })
    .on("presence", { event: "leave" }, () => {
      userCount.value--;
    });

  channel.value.subscribe((status) => {
    if (status === "SUBSCRIBED") {
      channel.value.track({
        user_id: Date.now(),
        online_at: new Date().toISOString(),
      });
    }
  });
});

onBeforeUnmount(() => {
  if (channel.value) {
    supabase.removeChannel(channel.value);
  }
});
</script>
