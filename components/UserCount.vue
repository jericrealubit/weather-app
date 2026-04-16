<script setup>
// No need to import createClient anymore!
const supabase = useSupabaseClient();

const userCount = ref(0);
const isConnected = ref(false);
const channel = ref(null);

const updatePresence = () => {
  if (!channel.value) return;
  const state = channel.value.presenceState();
  userCount.value = Object.keys(state).length;
};

onMounted(() => {
  const sessionId = "user-" + Math.random().toString(36).slice(2, 11);

  // Use the BBQ Heaven channel name and logic
  channel.value = supabase.channel("online-users", {
    config: {
      presence: { key: sessionId },
    },
  });

  channel.value
    .on("presence", { event: "sync" }, updatePresence)
    .on("presence", { event: "join" }, updatePresence)
    .on("presence", { event: "leave" }, updatePresence);

  channel.value.subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      isConnected.value = true;
      await channel.value.track({
        online_at: new Date().toISOString(),
      });
      // Important: Force sync check
      updatePresence();
    }
  });
});

onBeforeUnmount(() => {
  if (channel.value) supabase.removeChannel(channel.value);
});
</script>

<template>
  <div
    class="flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 font-sans text-sm text-gray-700 dark:text-gray-100"
  >
    <span
      class="h-2.5 w-2.5 rounded-full transition-colors duration-300"
      :class="isConnected ? 'bg-green-500' : 'bg-red-500'"
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
