<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from 'vue'

defineProps({
  bg: {
    type: String,
    default: 'bg-grey-100'
  }
})
</script>

<template>
  <div v-bind:class="`${bg} p-10 rounded-lg shadow-md h-full`">
    <slot></slot>
  </div>
</template>
