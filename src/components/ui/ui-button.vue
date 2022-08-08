<template>
  <component
      :is="attrs.href ? 'a' : 'button'"
      class="er-button"
      :disabled="loading"
  >
    <slot />
  </component>
</template>

<script setup>
import {useAttrs} from "vue"
defineProps({
  loading: Boolean,
})


const attrs = useAttrs()
</script>

<style scoped>
.er-button {
  border-radius: 8px;
}
</style>