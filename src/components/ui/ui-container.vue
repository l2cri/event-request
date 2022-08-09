<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "UiContainer"
}
</script>

<style scoped>
  .ui-container {
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 19px;
  }
 </style>