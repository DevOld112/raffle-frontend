<script setup lang="ts">
import CreateTicketForm from '@/landing-page/landing-page/sections/RaffleSection/CreateTicketForm.vue'
import { usePublicStore } from '@/stores/public';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { RaffleById } from '@/types/index';
import { utilityFunctions } from '@/utils';
import {  formatDateOrFallback } from '@/helper/date';


const route = useRoute();   
const store = usePublicStore();
const utils = utilityFunctions()

const raffleId = route.params.id
const id: RaffleById | any = raffleId;



const priceBS = ref<number | undefined>(0)

onMounted(async () => {
    if (raffleId) {
        const fetchedRaffle =  await store.fetchPublicRaffle(id);
        priceBS.value = await utils.taxesBCV()
    } else {
        console.error('No raffle ID found in route parameters');
    }
});


</script>

<template>
    <div class="  max-width  lg:flex justify-between gap-5 p-4 grid grid-cols-1 w-full">
        <div v-if="store.raffle" class="bg-gray-600  rounded-lg overflow-hidden lg:w-1/3 ">
            <!-- Imagen del sorteo -->
            <div class="relative">
                <img class="w-full object-cover" src="/img/sorteo.jpg" alt="Imagen del Sorteo" />
                <div class="absolute  via-transparent to-transparent"></div>
            </div>
            <!-- Contenido del sorteo -->
            <div class="p-4 bg-gray-600 shadow-2xl">

                <h1 class="text-3xl font-extrabold mb-2">{{ store.raffle.title }}</h1>
                <p class="text-xl">{{ store.raffle.description }}</p>
                <div class="lg:flex gap-2  grid grid-cols-1">
                    <div class="sm:w-1/2 mb-2 grid gap-4">

                        <div>
                        <p class="text-2xl  font-semibold mb-2">Precio en Dolar:</p>
                        <p class="text-3xl font-bold text-blue-200">{{ store.raffle.price }}$</p>
                        </div>

                        <div class="">
                        <p class="text-2xl  font-semibold mb-2">Precio en Bs:</p>
                        <p class="text-3xl font-bold text-blue-200">{{ (store.raffle.price * priceBS!).toFixed(2)}}Bs</p>

                    </div>
                        
                    </div>
                    
                    <div class="sm:w-2/3 mb-2">
                        <p class="text-2xl font-semibold  mb-2">Porcentaje de Tickets disponibles:</p>
                        <p class="text-3xl font-bold text-green-600">{{ store.raffle.availableQuantity / 1000  * 100   }} %</p>
                    </div>
                </div>
                <div class="border-t border-gray-200 pt-4">
                    <h2 class="text-xl font-semibold  mb-4">Detalles de la Rifa</h2>
                    <div class="grid grid-cols-1 gap-4">
                        
                        <div class="bg-gray-500 p-4 rounded-lg shadow-2xl col-span-2">
                            <h3 class="text-lg font-semibold ">Premios</h3>
                            <p class="whitespace-pre-line">{{ store.raffle.premiums }}</p>
                        </div>

                        <div class="bg-gray-500 p-4 rounded-lg shadow-2xl col-span-2">
                            <h3 class="text-lg font-semibold ">Fecha del Sorteo</h3>
                            <p class="">{{ formatDateOrFallback(store.raffle.endDate) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center mt-6">
            <p>Cargando detalles del sorteo...</p>
        </div>


        <div class=" lg:w-2/3">
            <CreateTicketForm
            :raffle="store.raffle"
            />
        </div>
    </div>
</template>

