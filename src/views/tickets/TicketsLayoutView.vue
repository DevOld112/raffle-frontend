<script setup lang="ts">

import { RouterView, useRouter } from 'vue-router';
import { onMounted, inject, ref } from 'vue';
import { useUserStore } from '@/stores/user'
import type { Toast } from '@/types';



const store = useUserStore()
const toast = inject<Toast>('toast')!;
const router = useRouter()

onMounted(async() => {
    await store.getUserInterface();
})

const logout = () => {
    try {
        const result = confirm('¿Deseas Cerrar Sesion?')
        if(result){
            localStorage.removeItem('AUTH_TOKEN')
            toast.open({
                message: 'Sesion cerrada Correctamente',
                type: 'success'
            })
        }
        setTimeout(() => {
            router.push({name: 'login'})
        }, 2000);    
    } catch (error) {
        console.log(error)
    }
}

const createRaffle = () => {
    router.push({name : 'createRaffle'})

}

const goBack = () => {
  router.push({ name: 'raffles' });

}

</script>
<template>

<div>
        <header class="bg-gray-200 p-4 space-y-10">
            <h1 class="text-4xl text-center font-bold">Panel Principal de Administración</h1>
            <p class="text-xl font-bold text-center italic my-5">Gestiona tus tickets</p>
            
            <div class="flex justify-center md:justify-end gap-3">

                <button
                    @click="goBack"
                    class="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                    Volver al Panel
                </button>

                <button
                    @click="createRaffle"
                    class="bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-emerald-700"
                    >
                    Crear Sorteo
                </button>

                <button @click="logout" class="bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700">
                    Cerrar Sesión
                </button>

            </div>

        </header>
        <RouterView />
    </div>

</template>