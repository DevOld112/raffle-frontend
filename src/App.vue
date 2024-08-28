<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/dashboard/Header.vue'
import Footer from '@/components/dashboard/Footer.vue'
import AOS from 'aos'
import { onMounted, onUpdated } from 'vue';

AOS.init({
  duration: 800,  
  easing: 'ease-in-out',  
  once: true,  
})

onMounted(() => {
  AOS.refresh();
});

onUpdated(() => {
  AOS.refresh();
});

</script>

<template>
  <div class="md:flex flex-col h-screen">

    <Header />

    <div class="md:flex flex-grow">
      <div class="bg-cover bg-center md:w-1/3 bg-app"></div>
      <div  class="md:w-2/3 px-10 py-5 min-h-full overflow-y-auto mb-10">
        <RouterView
        data-aos="fade-left"
        data-aos-duration="500"
        />
      </div>
    </div>

    <Footer />

  </div>
</template>

<style>
.bg-app {
  background-repeat: no-repeat; 
  background-size: contain; 
  background-position: center; 
}
</style>
