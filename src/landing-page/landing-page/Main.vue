<script setup lang="ts">
import HeroSection from "./sections/HeroSection.vue";
import FeatureSection from './sections/FeatureSection.vue'
import RaffleSection from './sections/RaffleSection.vue'
import FaqSection from './sections/FaqSection.vue'


import { usePublicStore } from '@/stores/public';
import { onMounted, ref } from 'vue';



const store = usePublicStore()

onMounted(() => {
    store.fetchPublicRaffles();
});

</script>

<template>

    <HeroSection />
    <FeatureSection />

    <div class="lg:flex sm:grid md:grid-cols-2">
        <RaffleSection
        v-for="raffle in store.raffles"
        :key="raffle.id"
        :raffle="raffle"

    />
    </div>

    <FaqSection />
    


</template>