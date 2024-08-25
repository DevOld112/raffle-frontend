<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { RaffleCard  } from '@/types';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter()
const props = defineProps<{ raffle: RaffleCard }>();
const emit = defineEmits(['viewDetails']);

const onViewDetails = () => {

  router.push({ name: 'RaffleDetails', params: { id: props.raffle._id } });

  
  emit('viewDetails', props.raffle._id);
};

</script>

<template>
  <div class="raffle-card bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg rounded-xl overflow-hidden mt-10">

    <div class="p-6">
      <h2 class="text-2xl font-extrabold mb-3 text-white">{{ raffle.title }}</h2>
      <p class="text-white mb-4">{{ raffle.description }}</p>
      <p class="text-white mb-4">Precio de la Rifa: <span class="font-bold">{{ raffle.price }}$</span></p>

      <div class="flex justify-between items-center">
        <span class="text-lg font-semibold text-yellow-300">Tickets: {{ raffle.tickets.length }}</span>
        <button @click="onViewDetails" class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 font-bold transition duration-300 ease-in-out transform hover:scale-105">
          Ver detalles
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.raffle-card {
  transition: transform 0.3s ease-in-out;
}

.raffle-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}
</style>
