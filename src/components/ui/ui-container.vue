<template>
  <div class="er-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiContainer"
}
</script>

<style scoped>
  .er-container {
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
 </style>