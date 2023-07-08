<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="col-md-4 col-sm-6">
           <RouterView></RouterView>
        </div>
    </div>
</template>
<style scoped>
.container{
    height: 100vh;
    
}

</style>