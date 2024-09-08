<script setup lang="ts">
import { ref } from 'vue';
import features from '../data/feature';

const isOpen = ref<number>(1);
</script>

<template>
    <!-- Features Section Start -->
    <div id="features" class="container mx-auto px-5">
        
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">Características</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">Descubre cómo nuestra plataforma facilita la compra de rifas y maximiza tus oportunidades de ganar premios. Navega con facilidad y participa en sorteos emocionantes.</p>
            </div>

            <div class="mt-10">
                <ul class="flex flex-col items-center md:flex-row justify-center font-theme-heading">
                    <li v-for="feature in features" :key="feature.id" :class="isOpen === feature.id ? 'md:border-b-4 md:border-theme-secondary' : ''" class="w-full md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center">
                        <a @click.prevent="isOpen = feature.id" href="#" :class="isOpen === feature.id ? ' border-theme-secondary' : ''" class="py-5 md:border-b-0 border-b-4">{{ feature.name }}</a>
                    </li>
                </ul>
            </div>

            <div class="mt-16">
                <!-- Tab Content -->
                <template v-for="feature in features" :key="feature.id">
                    <div v-show="isOpen === feature.id" class="grid gap-32 lg:grid-cols-2 items-center">
                        <div class="relative">
                            <img class="z-10 w-full rounded-lg" :src="feature.details.imageUrl" />
                            <div class="-z-10 bg-slate-700 h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16"></div>
                        </div>
                        <div>
                            <h3 class="font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left">{{ feature.details.title }}</h3>
                            <p class="mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left">{{ feature.details.description }}</p>

                        </div>
                    </div>
                </template>
                <!-- Tab Content -->
            </div>
        </section>
        <section class="py-16">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-semibold font-theme-heading text-center">¡Participa y Gana!</h2>
                <p class="text-theme-grayish-blue text-center mt-7 font-theme-content text-lg">Explora nuestra selección de rifas y sumérgete en la emoción de ganar grandes premios. Con una experiencia de compra rápida y segura, te ofrecemos oportunidades únicas para que disfrutes de premios increíbles. ¡No te lo pierdas!</p>
            </div>
        </section>

    </div>
    <!-- Features Section End -->
</template>
