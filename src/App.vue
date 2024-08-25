<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <div class="md:flex h-screen">
    <div class="  bg-cover bg-center md:w-1/3 bg-app"></div>
    <div class="md:w-2/3 px-10 py-5 min-h-full overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>

<style>

.bg-app {
  
  background-repeat: no-repeat; 
  background-size: contain; 
  background-position: center; 
  
}
</style>
