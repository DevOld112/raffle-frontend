<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { ref } from 'vue';



const router = useRouter()
const isCreatingRaffle = ref(false);


const createRaffle = () => {
    router.push({name : 'createRaffle'})
    isCreatingRaffle.value = true
}

const goBack = () => {
    router.push({ name: 'raffles' });
    isCreatingRaffle.value = false
}

</script>

<template>
    <div>
        <header class="bg-gray-200 p-4 space-y-5">
            <h1 class="text-4xl text-center font-bold">Panel de Administración</h1>

            
            <div class="flex justify-center md:justify-end gap-3">

                <button
                    v-if="isCreatingRaffle"
                    @click="goBack"
                    class="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                    Volver al Panel
                </button>

                <button
                    v-else
                    @click="createRaffle"
                    class="bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-emerald-700"
                    >
                    Crear Sorteo
                </button>


            </div>

        </header>
        

        <RouterView
            data-aos="fade-right"
            data-aos-duration="500"
        />


        
    </div>
</template>