<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { RaffleCard  } from '@/types';
import { useRouter } from 'vue-router';


const router = useRouter()
const props = defineProps<{ raffle: RaffleCard }>();


const onViewDetails = () => router.push({ name: 'RaffleDetails', params: { id: props.raffle._id } });
const onViewClients = () => router.push({name: 'clients', params: {id: props.raffle._id} })


</script>

<template>
  <div class="raffle-card bg-gradient-to-r from-slate-700 to-slate-400 shadow-lg rounded-xl overflow-hidden mt-10 h-80">

    <div class="p-6 h-full flex flex-col justify-between">
      <div>
        <h2 class="text-2xl font-extrabold mb-3 text-white line-clamp-2">{{ raffle.title }}</h2>
        <p class="text-white mb-4 line-clamp-3">{{ raffle.description }}</p>
        <p class="text-white mb-4">Precio de la Rifa: <span class="font-bold">{{ raffle.price }}$</span></p>
      </div>

      <div class="space-y-5">
        <span class="text-lg font-semibold text-yellow-300">Numero de Pedidos: {{ raffle.tickets.length }}</span>

        <div class="flex flex-col space-y-5 ">
          <button @click="onViewDetails" class="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 font-bold transition duration-300 ease-in-out transform hover:scale-105">
            Ver detalles
          </button>

          <button @click="onViewClients" class="bg-green-400 text-gray-900 px-6 py-3 rounded-full shadow-md hover:bg-green-500 font-bold transition duration-300 ease-in-out transform hover:scale-105">
            Ver Clientes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.raffle-card {
  transition: transform 0.3s ease-in-out;
  height: 100%; /* Asegura que la tarjeta use todo el espacio vertical asignado */
}

.raffle-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}


.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
