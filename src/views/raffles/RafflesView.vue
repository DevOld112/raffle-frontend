<script setup>
import { useRaffleStore } from '@/stores/raffles';
import { onMounted, ref } from 'vue';
import RaffleCard from '@/components/RaffleCard.vue';

const store = useRaffleStore()

onMounted(() => {
    store.fetchRaffles();
});


const handleViewDetails = (id) => {
    //console.log('View details for raffle:', id);

};

</script>

<template>

    <h1 class="font-medium text-left text-m ">Listado de Sorteos Activos</h1>

    <div class="raffles-grid grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <RaffleCard
        v-for="raffle in store.raffles"
        :key="raffle.id"
        :raffle="raffle"
        @viewDetails="handleViewDetails"
        />
    </div>

</template>