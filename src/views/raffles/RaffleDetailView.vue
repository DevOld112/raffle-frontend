<script setup lang="ts">
import { useRaffleStore } from '@/stores/raffles';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { RaffleById,  } from '@/types/index';
import { raffleServiceHandler } from '@/utils/services';
import { formatDate } from '../../helper/date';



const router = useRouter()
const route = useRoute();   
const store = useRaffleStore();
const serviceRaffle = raffleServiceHandler()

const raffleId = route.params.id
const id:RaffleById | any = raffleId

onMounted(async() => {
    
  if (raffleId) {
    await store.fetchRaffle(id);
  } else {
    console.error('No raffle ID found in route parameters');
  }
});

//Boton de Panel

const goToPanel = () => router.push({ name: 'raffles' });


//Boton De Eliminar
const deleteRaffleButton = async(id: RaffleById) => await serviceRaffle.deleteRaffleService(id)

//Boton de Actualizar

const updateRaffleButton = async(id: RaffleById) => router.push({name: 'updateRaffle'})


// Boton de Tickets
const goToTickets = () => router.push({name: 'allTickets'});

function formatDateOrFallback(dateString: string | null | undefined): string {
    if (!dateString) {
        return 'Fecha no disponible';
    }
    return formatDate(dateString);
}


</script>

<template>
    <div class="container mx-auto p-6">
        <div v-if="store.raffle" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h1 class="text-4xl font-extrabold text-white">{{ store.raffle.title }}</h1>
            <p class="text-xl text-white mt-2">{{ store.raffle.description }}</p>
        </div>
        <div class="p-6">
            <div class="flex flex-col sm:flex-row sm:items-center mb-6">
            <div class="sm:w-1/2">
                <p class="text-2xl font-semibold text-gray-800 mb-2">Precio:</p>
                <p class="text-3xl font-bold text-blue-600">{{ store.raffle.price }}$</p>
            </div>
            <div class="sm:w-1/2 mt-4 sm:mt-0 sm:text-right">
                <p class="text-2xl font-semibold text-gray-800 mb-2">Tickets disponibles:</p>
                <p class="text-3xl font-bold text-green-600">{{ store.raffle.availableQuantity }}</p>
            </div>
            </div>
            <div class="border-t border-gray-200 pt-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Detalles de la Rifa</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800">Total Recaudado</h3>
                <p class="text-xl font-bold text-gray-600">{{ store.raffle.totalAmount }}$</p>
                </div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-gray-800">Número de Pedidos</h3>
                <p class="text-xl font-bold text-gray-600">{{ store.raffle.tickets.length }}</p>
                </div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md col-span-2">
                    <h3 class="text-lg font-semibold text-gray-800">Premios</h3>
                    <p class="text-gray-600">{{ store.raffle.premiums }}</p>
                </div>
                <div class="bg-gray-100 p-4 rounded-lg shadow-md col-span-2">
                    <h3 class="text-lg font-semibold text-gray-800">Fecha de Finalizacion</h3>
                    <p class="text-gray-600">{{ formatDateOrFallback(store.raffle.endDate)  }}</p>
                </div>
            </div>
            </div>
            <div class="mt-6 text-center">
                    <button @click="goToTickets" class="bg-yellow-500 text-white w-full font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
                        Ver Detalles
                    </button>
            </div>
        </div>
        </div>

        <div v-else class="text-center text-gray-500 mt-6">
        <p>Cargando detalles de la rifa...</p>
        </div>

        <div class="mt-10 space-y-5">

            <button @click="goToPanel" class="bg-blue-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full">
                Volver Al Panel Principal
            </button>

            <button @click="deleteRaffleButton(id)" class="bg-red-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 w-full">
                Eliminar Sorteo
            </button>

            <button @click="updateRaffleButton(id)" class="bg-purple-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 w-full">
                Modificar Sorteo
            </button>
        </div>

    </div>
</template>
