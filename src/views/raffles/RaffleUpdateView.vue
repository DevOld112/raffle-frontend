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

const updateRaffleForm = async(formData: RaffleUpdate ) => {
    return await raffleService.updateRaffleService(raffleId, formData)
}

onMounted( async() => {
    
    updateRaffle.value = {
        title: raffle.raffle?.title || '',
        description: raffle.raffle?.description || '',
        premiums: raffle.raffle?.premiums || '',
        price: raffle.raffle?.price.toString() || '0',
        endDate: (raffle.raffle?.endDate ? new Date(raffle.raffle.endDate).toISOString().split('T')[0] : ''),
    }
})

</script>

<template>
        <div class="p-4 space-y-5 rounded-lg bg-gray-600 text-xl">
        
        <div class="w-full p-6 bg-gray-600 rounded-lg shadow-md my-5">
        <fieldset class="border  border-gray-300 rounded-md p-4">
            <legend class="ml-3 text-lg p-2  bg-gray-500 font-semibold rounded-md">
                Modificacion de Sorteo
            </legend>
        
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
                    type="textarea"
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
            </fieldset>
        </div>
    </div>
        
</template>