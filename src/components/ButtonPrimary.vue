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
    {{ title }}
  </button>
</template>

<style lang="scss" scoped></style>
