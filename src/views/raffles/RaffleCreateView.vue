<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import type { RaffleCreation } from '@/types/index';
import { raffleServiceHandler } from '@/utils/services';


const raffleService = raffleServiceHandler()

const createRaffleForm = async(formData: RaffleCreation ) => {
    return await raffleService.createRaffleService(formData)
}

</script>

<template>
        <h1 class="mt-10 text-4xl font-bold text-center">Crear Sorteo</h1>
        
        <FormKit
            id="loginForm"
            type="form"
            :actions="false"
            @submit="createRaffleForm"
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

        <FormKit type="submit">Crear Sorteo</FormKit>

    </FormKit>
    
        
</template>