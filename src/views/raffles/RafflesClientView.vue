<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRaffleStore } from '@/stores/raffles';
import { utilityFunctions } from '@/utils';
import TicketCardAccepted from '@/components/TicketCardAccepted.vue';


const store = useRaffleStore();
const route = useRoute();
const id = route.params.id;
const utils = utilityFunctions()

onMounted(async () => {
    if (id) {
    await store.fetchTicketsAccepted(id);

    }
});



</script>

<template>
    <h1 class="font-medium text-left text-2xl mb-10">Listado de Rifas</h1>

    <form class="mb-10 flex gap-5 font-bold" id="search">
        Buscar Cliente <input class="text-black rounded-lg" name="query" v-model="utils.searchQuery.value" />
    </form>


    <div v-if="store.tickets.length > 0" class="overflow-x-auto rounded-2xl">
        <table v-if="utils.paginatedTickets.value.length > 0" class="w-full min-w-full bg-slate-700 text-left border-collapse shadow-md overflow-x-scroll">
            <thead>
                <tr class="text-center">
                    <th class="py-3 px-4 border-b">Documento</th>
                    <th class="py-3 px-4 border-b">Nombre Completo</th>
                    <th class="py-3 px-4 border-b">Email</th>
                    <th class="py-3 px-4 border-b">Teléfono</th>
                    <!--<th class="py-3 px-4 border-b">Dirección</th>-->
                    <th class="py-3 px-4 border-b">Cantidad</th>
                    <th class="py-3 px-4 border-b">Numeros Asignados</th>
                    <th class="py-3 px-16 border-b">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <TicketCardAccepted
                    v-for="ticket in utils.paginatedTickets.value"
                    :key="ticket._id"
                    :ticket="ticket"
                />
            </tbody>
            </table>
        
        <div class="text-center mt-10 mb-10 font-bold text-2xl" v-else>
            <p>No hay resultados para su busqueda...</p>
        </div>        
            <div class="flex justify-center mt-4 mb-6">
                <button
                @click="utils.prevPage"
                :disabled="utils.currentPage.value === 1"
                class="px-4 py-2 mx-2 bg-teal-400 hover:bg-teal-600 text-white rounded-lg"
                >
                Anterior
                </button>
        
                <span class="mx-2">Página {{ utils.currentPage }} de {{ utils.totalPages }}</span>
        
                <button
                @click="utils.nextPage"
                :disabled="utils.currentPage === utils.totalPages"
                class="px-4 py-2 mx-2 bg-teal-400 hover:bg-teal-600 text-white rounded-lg"
                >
                Siguiente
                </button>
            </div>
    </div>
        <div v-else class="mt-10">
            <h2 class="font-extrabold text-2xl text-center italic">
                No hay compras por gestionar
            </h2>
        </div>
</template>