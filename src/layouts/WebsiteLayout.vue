<script setup>
import Navigation from '../components/Website/Navigation.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <Navigation></Navigation>
  <div class="container mt-3">
    <RouterView />
  </div>
</template>