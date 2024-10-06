<script setup>
const { title } = defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button>
    <!-- Icon slot -->
    <slot />
    <span>{{ title }}</span>
  </button>
</template>

<style scoped></style>
