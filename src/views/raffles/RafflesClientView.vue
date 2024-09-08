<script setup lang="ts">
import { ref, onMounted , computed} from 'vue';
import { useRoute } from 'vue-router';
import { useRaffleStore } from '@/stores/raffles';
import TicketCardAccepted from '@/components/TicketCardAccepted.vue';


const store = useRaffleStore();
const route = useRoute();
const id = route.params.id;


onMounted(async () => {
    if (id) {
    await store.fetchTicketsAccepted(id);

    }
});

const searchQuery = ref<string>('')
    const currentPage = ref<number>(1);
    const itemsPerPage = ref<number>(10);

const filteredTickets = computed(() => {
    if (!searchQuery.value) {
        return store.tickets;
    }

    
    const lowerCaseQuery = searchQuery.value.toLowerCase();
    return store.tickets.filter((ticket) => {
        
        return (
        ticket.name.toLowerCase().includes(lowerCaseQuery) ||
        ticket.document.toLowerCase().includes(lowerCaseQuery) ||
        ticket.email.toLowerCase().includes(lowerCaseQuery) ||
        ticket.phone.toLowerCase().includes(lowerCaseQuery) ||
        ticket.address.toLowerCase().includes(lowerCaseQuery) 
        );
    });
});

// Calcular el número total de páginas
const totalPages = computed(() => {
    return Math.ceil(filteredTickets.value.length / itemsPerPage.value);
});

// Obtener los tickets de la página actual
const paginatedTickets = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredTickets.value.slice(start, end);
});

// Funciones para navegar entre páginas
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};



</script>

<template>
        <h1 class="font-medium text-left text-2xl mb-10">Listado de Rifas</h1>

        <form class="mb-10 flex gap-5 font-bold" id="search">
        Buscar Cliente <input class="text-black rounded-lg" name="query" v-model="searchQuery" />
        </form>
    
        <div v-if="store.tickets.length > 0" class="overflow-x-auto rounded-2xl">
        <table v-if="paginatedTickets.length > 0" class="w-full min-w-full bg-slate-700 text-left border-collapse shadow-md overflow-x-scroll">
            <thead>
            <tr class="bg-slate-700 text-center">
                <th class="py-3 px-4 border-b">Documento</th>
                <th class="py-3 px-4 border-b">Nombre Completo</th>
                <th class="py-3 px-4 border-b">Email</th>
                <th class="py-3 px-4 border-b">Teléfono</th>
                <th class="py-3 px-4 border-b">Dirección</th>
                <th class="py-3 px-4 border-b">Cantidad</th>
                <th class="py-3 px-4 border-b">Numeros Asignados</th>
            </tr>
            </thead>
            <tbody>
            <TicketCardAccepted
                v-for="ticket in paginatedTickets"
                :key="ticket._id"
                :ticket="ticket"
            />
            </tbody>
        </table>
    
        <div class="text-center mt-10 mb-10 font-bold text-2xl" v-else>
            <p>No hay resultados para su busqueda...</p>
        </div>        
        <div class="flex justify-center mt-4">
            <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-4 py-2 mx-2 bg-teal-400 hover:bg-teal-600 text-white rounded-lg"
            >
            Anterior
            </button>
    
            <span class="mx-2">Página {{ currentPage }} de {{ totalPages }}</span>
    
            <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 mx-2 bg-teal-400 hover:bg-teal-600 text-white rounded-lg"
            >
            Siguiente
            </button>
        </div>
    
        <div class="mt-10 flex justify-center mb-10">
            <button class="text-2xl font-bold bg-teal-700 hover:bg-teal-800 p-2 rounded-lg">
            Asignar Numeros
            </button>
        </div>
        </div>
    
        <div v-else class="mt-10">
        <h2 class="font-extrabold text-2xl text-center italic">
            No hay compras por gestionar
        </h2>
        </div>
</template>