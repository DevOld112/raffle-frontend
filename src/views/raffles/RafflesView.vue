<script setup>
import { useRaffleStore } from '@/stores/raffles';
import { onMounted, ref } from 'vue';
import RaffleCard from '@/components/RaffleCard.vue';

const store = useRaffleStore()

onMounted(() => {
    store.fetchRaffles();
});


</script>

<template>

    <h1 class="font-medium text-left text-m ">Listado de Sorteos Activos</h1>

    <div v-if="store.raffles.length > 0" class="raffles-grid  grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <RaffleCard
        v-for="raffle in store.raffles"
        :key="raffle.id"
        :raffle="raffle"

        />
    </div>
    <div v-else class="text-center my-20">
        <h3 class="text-2xl font-bold">No hay Sorteos Activos</h3>
    </div>

</template>