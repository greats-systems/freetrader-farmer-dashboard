<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: 'Laboserv Investments'
  },
  subtitle: {
    type: String,
    default: ''
  },
});
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
      {{ title }}
    </h1>
    <p class="my-4 text-xl text-black">
      {{ subtitle }}
    </p>
  </div>
</template>
