<script setup lang="ts">
import { useAuth } from './stores/auth'

import {computed} from "vue";
import TheAuth from "./components/the-auth/the-auth.vue"
import TheDashboard from "./components/the-dashboard/the-dashboard.vue"

const isAuth = computed(() => useAuth().isAuth)
</script>

<template>
  <div class="root-app">
    <the-dashboard v-if="isAuth" />
    <the-auth v-else />
  </div>
</template>

<style scoped>
.root-app {
  padding: 47px;
}
</style>
