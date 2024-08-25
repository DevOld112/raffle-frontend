<script setup lang="ts">
import TicketCard from '@/components/TicketCard.vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRaffleStore } from '../../stores/raffles';



const store = useRaffleStore();
const route = useRoute();
const id = route.params.id;

onMounted(async () => {
    if (id) {
        await store.fetchTickets(id);
    }
});
</script>

<template>
    <h1 class="font-medium text-left text-m mb-10">Listado de Tickets Activos</h1>

    <div class="raffles-grid grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TicketCard
            v-for="ticket in store.tickets"
            
            :ticket="ticket"
        />
    </div>
</template>
