<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { sesionAuth } from '@/utils/auth';
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const store = useUserStore();
const sesion = sesionAuth();
const router = useRouter();
const route = useRoute();
const userLogin = ref(false);

watch(() => store.user?.name, (newValue) => {
    userLogin.value = !!newValue;
});

// Inicializar el estado de userLogin en el montaje del componente
userLogin.value = !!store.user?.name;

const home = () => {
    router.push({ name: 'home' });
};

const proffit = () => router.push({ name: 'proffit' });

const goBack = () => router.push({ name: 'raffles' });

</script>

<template>

<header class="bg-gray-800 text-white p-4 flex justify-between items-center ">
    <div class="lg:flex items-center  ">
        <img @click="home" src="../../../public/img/logo.png" class="h-24 w-24 cursor-pointer">
        <p class="text-2xl text-white font-bold">Raffle</p><span class=" text-2xl font-extrabold italic text-teal-400  logo-text">M<span class="text-white">aster</span></span>
    </div>


    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-base sm:text-lg md:text-xl">
        <p>Bienvenido, <span class="font-bold italic">{{store.user?.name}}</span> </p>

 

        <button v-if="route.name !== 'proffit'" @click="proffit" class="text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg font-bold transition-colors duration-300">
        Ganancias
        </button>
        
        <button v-else @click="goBack" class="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-bold transition-colors duration-300">
            Volver
        </button>

        <button @click="sesion.logout" class="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700">
            Cerrar Sesión
        </button>
    </div>
    

</header>


</template>