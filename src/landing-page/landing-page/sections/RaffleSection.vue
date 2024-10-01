<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { RaffleCard  } from '@/types';
import { useRouter } from 'vue-router';


const router = useRouter()
const props = defineProps<{ raffle: RaffleCard }>();


const onViewDetails = () => router.push({ name: 'rafflePublic', params: { id: props.raffle._id } });


</script>

<template>
    <div id="raffles" class="raffle-card w-full bg-slate-900 shadow-2xl rounded-2xl overflow-hidden p-6 mx-auto my-6 max-w-sm">
      
      <!-- Imagen en la parte superior -->
      <img class="w-full  object-cover rounded-t-lg mb-4" src="/img/sorteo.jpg" alt="Imagen del Sorteo">
  
      <div>
        <h2 class="text-2xl font-extrabold mb-3 ">{{ raffle.title }}</h2>
        <p class=" mb-4">{{ raffle.description }}</p>
        <p class=" mb-4">Precio de la Rifa: <span class="font-bold ">{{ raffle.price }}$</span></p>
  
        <div class="flex justify-between items-center">
          <span class="text-lg font-semibold ">Tickets: {{ raffle.tickets.length }}</span>
          <button @click="onViewDetails" class="bg-teal-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-700 font-bold transition duration-300 ease-in-out transform hover:scale-105">
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
    transform: translateY(-5px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  }
  
  img {
    transition: opacity 0.3s ease-in-out;
  }
  
  img:hover {
    opacity: 0.9;
  }
  </style>
  