<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router';
import type { RaffleCreation } from '@/types/index';
import { raffleServiceHandler } from '@/utils/services';
import { useRaffleStore } from '@/stores/raffles'

const route = useRoute();
const raffle = useRaffleStore()
const raffleService = raffleServiceHandler()
const raffleId: string = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const updateRaffleForm = async(formData: RaffleCreation ) => {
    return await raffleService.updateRaffleService(raffleId, formData)
}

onMounted( async() => {
    await console.log(raffle.raffle)
})

</script>

<template>
        <h1 class="mt-10 text-4xl font-bold text-center">Modificar Sorteo</h1>
        
        <FormKit
            id="loginForm"
            type="form"
            :actions="false"
            @submit="updateRaffleForm"
        >

        <FormKit
            type="text"
            label="Titulo"
            name="title"
            placeholder="Titulo aqui"

            
        />

        <FormKit 
            type="textarea"
            label="Descripcion"
            name="description"
            placeholder="Colocar aqui descripcion"
            
        />

        <FormKit 
            type="text"
            label ="Premios"
            name="premiums"
            placeholder="Colocar Premios aqui"
        
        />

        <FormKit 
            type="number"
            label="Precio"
            name="price"
            placeholder="Ej. 80$"
        />

        <FormKit type="submit">Actualizar Sorteo</FormKit>

    </FormKit>
    
        
</template>