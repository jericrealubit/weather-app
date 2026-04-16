<template>
  <div
    class="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 font-sans text-sm text-gray-700 dark:text-gray-100"
  >
    <span
      class="h-2.5 w-2.5 rounded-full transition-colors duration-300 ease-in-out"
      :class="{ 'bg-green-500': isConnected, 'bg-red-500': !isConnected }"
    ></span>
    <span>
      {{
        isConnected
          ? `${userCount} user${userCount === 1 ? "" : "s"} online`
          : "Connecting..."
      }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();

// Initialize Supabase (Ensure these keys are in your nuxt.config.ts)
const supabase = createClient(
  config.public.supabaseUrl,
  config.public.supabaseKey,
);

const userCount = ref(0);
const isConnected = ref(false);
const channel = ref(null);

/**
 * Updates the local count based on the definitive state from Supabase.
 * This is more reliable than manual incrementing/decrementing.
 */
const updatePresence = () => {
  if (!channel.value) return;
  const state = channel.value.presenceState();
  userCount.value = Object.keys(state).length;
};

onMounted(() => {
  // 1. Initialize channel
  channel.value = supabase.channel("online-users", {
    config: {
      presence: {
        key: "user-" + Math.random().toString(36).slice(2, 7), // Unique key for this session
      },
    },
  });

  // 2. Set up event listeners
  channel.value
    .on("presence", { event: "sync" }, () => {
      updatePresence();
    })
    // Join/Leave events now just trigger a re-sync for data integrity
    .on("presence", { event: "join" }, ({ newPresences }) => {
      updatePresence();
    })
    .on("presence", { event: "leave" }, ({ leftPresences }) => {
      updatePresence();
    });

  // 3. Subscribe and track connection status
  channel.value.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      isConnected.value = true;

      // Track this user
      await channel.value.track({
        online_at: new Date().toISOString(),
      });
    }

    if (status === "CLOSED" || status === "CHANNEL_ERROR") {
      isConnected.value = false;
      userCount.value = 0;
    }
  });
});

onBeforeUnmount(async () => {
  if (channel.value) {
    // Explicitly leave the channel to clean up presence immediately
    await supabase.removeChannel(channel.value);
    channel.value = null;
  }
});
</script>
