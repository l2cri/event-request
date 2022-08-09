<script setup lang="ts">

import TheAuth from "./components/the-auth/the-auth.vue"
import TheDashboard from "./components/the-dashboard/the-dashboard.vue"
import {ref} from "vue";

const isAuth = ref(false)
</script>

<template>
  <div class="root-app">
    <the-auth v-if="isAuth" />
    <the-dashboard v-else />
  </div>
</template>

<style scoped>
.root-app {
  padding: 47px;
}
</style>
