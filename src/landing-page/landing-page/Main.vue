<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from "./sections/HeroSection.vue";
import FeatureSection from './sections/FeatureSection.vue'
import RaffleSection from './sections/RaffleSection.vue'
import FaqSection from './sections/FaqSection.vue'

import { usePublicStore } from '@/stores/public';
import { onMounted } from 'vue';

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const store = usePublicStore()

const settings = ref({
    itemsToShow: 2,
    snapAlign: 'center',
    breakpoints: {
        700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
        },
        1024: {
        itemsToShow: 5,
        snapAlign: 'start',
        },
    },
});

onMounted(() => {
    store.fetchPublicRaffles();
});
</script>

<template>

    <HeroSection />
    <FeatureSection />

    
    <Carousel v-bind="settings" :breakpoints="breakpoints" :perPage="1" :autoplay="4000" :wrap-around="true" :loop="true" :navigationEnabled="true">
        <Slide v-for="raffle in store.raffles" :key="raffle._id">
            <RaffleSection :raffle="raffle" />
        </Slide>
    </Carousel>

    <FaqSection />
    
</template>

