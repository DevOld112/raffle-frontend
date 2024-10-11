<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import Header from '@/components/dashboard/Header.vue'
import Footer from '@/components/dashboard/Footer.vue'
import AOS from 'aos'
import { onMounted, onUpdated, computed } from 'vue';

const route = useRoute();

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


const showBackgroundImage = computed(() => {
  const hiddenRoutes: string[] | string = ['home', 'rafflePublic', 'allTickets', 'proffit', 'clients', 'ticketDetail'];
  return !hiddenRoutes.includes(route.name as string || '');
});
</script>

<template>
  <div class="md:flex text-gray-200 flex-col h-screen">
    <Header v-if="route.name !== 'home'" />

    <div class="md:flex flex-grow">
      <div v-if="showBackgroundImage" class="bg-cover bg-center md:w-1/3 bg-app"></div>
      <div :class="['px-10 py-5 min-h-full overflow-y-auto mb-10', showBackgroundImage ? 'md:w-2/3' : 'sm:w-full']">
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

