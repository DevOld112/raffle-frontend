<script setup lang="ts">
import type { RaffleCreation } from '@/types/index';
import { raffleServiceHandler } from '@/utils/services';


const raffleService = raffleServiceHandler()

const createRaffleForm = async(formData: RaffleCreation ) => {
    return await raffleService.createRaffleService(formData)
}

</script>

<template>
    <div class="p-4 space-y-5 rounded-lg bg-gray-600 text-xl">
        <div class="w-full p-6 bg-gray-600 rounded-lg shadow-md my-5">
            <fieldset class="border  border-gray-300 rounded-md p-4">
                <legend class="ml-3 text-lg p-2  bg-gray-500 font-semibold rounded-md">
                    Nuevo Sorteo
                </legend>

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
                type="textarea"
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

                <FormKit
                type="date"
                label="Fecha de Finalizacion"
                name="endDate"
                />

                <FormKit type="submit">Crear Sorteo</FormKit>

            </FormKit>
            </fieldset>
        </div>
    </div>
</template>