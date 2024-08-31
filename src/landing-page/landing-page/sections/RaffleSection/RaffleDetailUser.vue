<script setup lang="ts">
import CreateTicketForm from '@/landing-page/landing-page/sections/RaffleSection/CreateTicketForm.vue'
import { usePublicStore } from '@/stores/public';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { RaffleById } from '@/types/index';
import { formatDate } from '../../../../helper/date';


const route = useRoute();   
const store = usePublicStore();

const raffleId = route.params.id;
const id: RaffleById | any = raffleId;
const raffle = ref({})

onMounted(async () => {
    console.log(store.raffle.price)
    if (raffleId) {
        await store.fetchPublicRaffle(id);
        raffle.value = store.fetchPublicRaffle(id)
    } else {
        console.error('No raffle ID found in route parameters');
    }
});

function formatDateOrFallback(dateString: string | null | undefined): string {
    if (!dateString) {
        return 'Fecha no disponible';
    }
    return formatDate(dateString);
}

</script>

<template>
    <div class="  max-width lg:flex justify-between gap-5 p-4 grid grid-cols-1 w-full">
        <div v-if="store.raffle" class="bg-white shadow-lg rounded-lg overflow-hidden lg:w-1/3 ">
            <!-- Imagen del sorteo -->
            <div class="relative">
                <img class="w-full object-cover" src="/img/1.png" alt="Imagen del Sorteo" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
            </div>
            <!-- Contenido del sorteo -->
            <div class="p-6">
                <h1 class="text-3xl font-extrabold text-gray-800 mb-2">{{ store.raffle.title }}</h1>
                <p class="text-xl text-gray-600 mb-4">{{ store.raffle.description }}</p>
                <div class="flex flex-col sm:flex-row sm:items-center mb-6">
                    <div class="sm:w-1/2 mb-4 sm:mb-0">
                        <p class="text-2xl font-semibold text-gray-800 mb-2">Precio:</p>
                        <p class="text-3xl font-bold text-blue-600">{{ store.raffle.price }}$</p>
                    </div>
                    <div class="sm:w-1/2">
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
                            <h3 class="text-lg font-semibold text-gray-800">Número de Tickets</h3>
                            <p class="text-xl font-bold text-gray-600">{{ store.raffle.tickets.length }}</p>
                        </div>
                        <div class="bg-gray-100 p-4 rounded-lg shadow-md col-span-2">
                            <h3 class="text-lg font-semibold text-gray-800">Premios</h3>
                            <p class="text-gray-600">{{ store.raffle.premiums }}</p>
                        </div>

                        <div class="bg-gray-100 p-4 rounded-lg shadow-md col-span-2">
                            <h3 class="text-lg font-semibold text-gray-800">Fecha de Finalizacion</h3>
                            <p class="text-gray-600">{{ formatDateOrFallback(store.raffle.endDate) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center text-gray-500 mt-6">
            <p>Cargando detalles del sorteo...</p>
        </div>


        <div class=" lg:w-2/3">
            <CreateTicketForm
            :raffle="store.raffle"
            />
        </div>
    </div>
</template>

