<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import type { RaffleCreation, RaffleUpdate } from '@/types/index';
import { raffleServiceHandler } from '@/utils/services';
import { useRaffleStore } from '@/stores/raffles'

const route = useRoute();
const raffle = useRaffleStore()
const raffleService = raffleServiceHandler()
const raffleId: string = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;

const updateRaffle = ref<RaffleUpdate>({
        title: '',
        description: '',
        premiums: '',
        price: '',
        endDate: ''
})

const updateRaffleForm = async(formData: RaffleCreation ) => {
    return await raffleService.updateRaffleService(raffleId, formData)
}

onMounted( async() => {
    
    updateRaffle.value = {
        title: raffle.raffle?.title || '',
        description: raffle.raffle?.description || '',
        premiums: raffle.raffle?.premiums || '',
        price: (raffle.raffle?.price || 0).toString(),
        endDate: (raffle.raffle?.endDate ? new Date(raffle.raffle.endDate).toISOString().split('T')[0] : ''),
    }
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
            v-model="updateRaffle.title"
            
        />

        <FormKit 
            type="textarea"
            label="Descripcion"
            name="description"
            placeholder="Colocar aqui descripcion"
            v-model="updateRaffle.description"
        />

        <FormKit 
            type="text"
            label ="Premios"
            name="premiums"
            placeholder="Colocar Premios aqui"
            v-model="updateRaffle.premiums"
        />

        <FormKit 
            type="number"
            label="Precio"
            name="price"
            placeholder="Ej. 80$"
            v-model="updateRaffle.price"
        />

        <FormKit 
            type="date"
            label="Fecha"
            name="endDate"
            placeholder="dd/mm/yyyy"
            v-model="updateRaffle.endDate"
        />

        <FormKit type="submit">Actualizar Sorteo</FormKit>

    </FormKit>
    
        
</template>