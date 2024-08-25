<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import { createRaffle } from '@/api/RafflesApi';
import type { RaffleCreation } from '@/types/index';
import { inject } from 'vue';
import type { Toast } from '@/types';
import { useRouter } from 'vue-router';


const router = useRouter()
const toast = inject<Toast>('toast')!

const createRaffleForm = async(formData: RaffleCreation ) => {
    try {
        const data = await createRaffle(formData)
        
        toast.open({
            message: data,
            type: 'success'
        })

        setTimeout(() => {
            router.push({name: 'raffles'})
        }, 1500);
    } catch (error) {
        toast.open({
            message: 'Existe algun campo vacio, por favor revisar',
            type: 'error'
        })
    }
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