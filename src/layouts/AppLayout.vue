<script setup>
import Sidebar from '../components/Application/Sidebar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
    <Sidebar></Sidebar>
    <div class="container mt-3">
        <RouterView />
    </div>
</template>