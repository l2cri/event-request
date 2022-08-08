<script setup lang="ts">

import TheAuth from "./components/the-auth/the-auth.vue"
import {ref} from "vue";

const isAuth = ref(true)
</script>

<template>
  <div class="root-app">
    <the-auth v-if="isAuth" />
  </div>
</template>

<style scoped>
.root-app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.root-app div {
}
</style>
