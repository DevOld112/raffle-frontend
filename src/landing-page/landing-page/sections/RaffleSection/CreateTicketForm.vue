<script setup lang="ts">
import { FormKit } from '@formkit/vue';
import type { RaffleCreation, TicketCreation, TicketId } from '@/types/index';
import { raffleServiceHandler } from '@/utils/services';
import { useRoute } from 'vue-router'
import { defineProps, onMounted, ref, computed } from 'vue';
import { utilityFunctions } from '@/utils';
import {  formatDateOrFallback } from '@/helper/date';

const route = useRoute()
const raffleService = raffleServiceHandler()
const utils = utilityFunctions()
const priceBS = ref<number | undefined>(0)

let id: TicketId;

if (typeof route.params.id === 'string') {
    id = route.params.id as unknown as TicketId;
} else if (Array.isArray(route.params.id) && route.params.id.length > 0) {
    id = route.params.id[0] as unknown as TicketId;
} else {
    throw new Error('Invalid route parameter for id');
}

onMounted(async () => {
        priceBS.value = await utils.taxesBCV()
});


const props = defineProps<{
    raffle: {
        price: number;
        phone: string;
        bankEntity: string;
        accountBank: string;
        binanceID: string;
    }
}>();

console.log(props.raffle.phone)

const quantity = ref(2);

const quantityString = computed({
    
    get: () => quantity.value.toString(),
    set: (value: string) => quantity.value = Number(value)
});

const totalPrice = computed(() => (Number(props.raffle.price) * quantity.value).toFixed(2));


const submitPayment = async(formData: TicketCreation ) => await raffleService.createTicket(id, formData)


</script>

<template>
    <div class="p-4 space-y-5 rounded-lg bg-gray-600 text-xl">
        <h1 class="mt-10 text-4xl font-bold text-center mb-10">Formulario de Pago</h1>
        <div class="bg-yellow-200 w-full p-6 rounded-lg md:flex  grid grid-cols-1 justify-items-center items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-yellow-800">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-yellow-800 font-extrabold text-2xl">Importante:</span>
            
            <p class="text-yellow-600 font-extrabold">Es fundamental que completes todos los datos para que podamos procesar tu pago correctamente.</p>
        </div>

        <p class="text-medium font-bold  text-center ">
            Completa todos los campos para verificar tu pago rápidamente. Recibirás una confirmación por correo electrónico.
        </p>
    </div>

    
    <FormKit id="paymentForm" type="form" :actions="false" @submit="submitPayment">
        <!-- Datos Personales -->
        <div class="w-full p-6 bg-gray-600 rounded-lg shadow-md my-5">
        <fieldset class="border  border-gray-300 rounded-md">
            <legend class="ml-3 text-lg p-2  bg-gray-500 font-semibold rounded-md">
                Datos Personales
            </legend>
            <div class="p-4">
                <FormKit
                    type="text"
                    label="Cédula"
                    name="document"
                    placeholder="Ingresa tu cédula"
                    class="mb-4"
                />
                <FormKit
                    type="text"
                    label="Nombre completo"
                    name="name"
                    placeholder="Nombre completo"
                    class="mb-4"
                />
                <FormKit
                    type="text"
                    label="Correo electrónico"
                    name="email"
                    placeholder="Correo electrónico"
                    class="mb-4"
                />
                <FormKit
                    type="text"
                    label="Teléfono/Whatsapp"
                    name="phone"
                    placeholder="Teléfono/Whatsapp"
                    class="mb-4"
                />
                <!--
                    <FormKit
                    type="text"
                    label="Direccion"
                    name="address"
                    placeholder="Direccion a Domicilio"
                    class="mb-4"
                />
                
                -->

            </div>
        </fieldset>
    </div>
        

        <div class="gap-10 w-full grid grid-cols-1 ">
        <!-- Boletos -->
        <div class="w-full p-6 bg-gray-600  rounded-lg shadow-md">
            <fieldset class="border border-gray-300 rounded-md">
                <legend class="ml-3 text-lg p-2  bg-gray-500 font-semibold rounded-md">
                    Boletos
                </legend>
                <div class="p-4">
                    <FormKit
                        type="number"
                        label="Cantidad de boletos a comprar"
                        name="quantity"
                        placeholder="Cantidad mínima permitida: 2"
                        v-model.number="quantityString"
                        min="2"
                        validation="required|min:2"
                        validation-label="Cantidad de boletos"
                        :validation-messages="{ min: 'Debes comprar al menos 2 boletos.' }"
                    />
                    
                    <p class="mt-2 ">Precio unitario del boleto en dolares: {{ props.raffle.price.toFixed(2) }}USD</p>
                    <p class="mt-2 ">Precio de la tasa en Bolivares : {{ priceBS?.toFixed(2) }} Bs</p>
                    <p class="mt-2 text-xl font-semibold">Total a pagar en dolares: {{ totalPrice }} $</p>
                    <p class="mt-2 text-xl  font-semibold">Total a pagar en bolivares: {{ (Number(totalPrice) * priceBS!).toFixed(2) }} Bs</p>
                    <div class="flex items-center justify-center gap-3">
                    <i class="fas fa-exclamation-triangle text-yellow-200 mt-2  "></i>
                    <p class="mt-2 text-xl text-center text-yellow-300  font-semibold">Cantidad minima de rifas a comprar: <span>2</span></p>

                    </div>
                    
                </div>
            </fieldset>
        </div>

        <!-- Realizar el Pago -->
        <div class="w-full p-6 bg-gray-600 rounded-lg shadow-md">
            <fieldset class="border border-gray-300 rounded-md">
                <legend class="ml-3 text-lg p-2  bg-gray-500  font-semibold rounded-md">
                    Realizar el Pago
                </legend>
                <div class="p-4 space-y-4">
                    <p class="">Teléfono beneficiario: {{props.raffle.phone}}</p>
                    <p class="mt-2 ">Entidad Bancaria: {{  props.raffle.bankEntity  }}</p>
                    <p class="mt-2 ">Banco beneficiario: {{  props.raffle.accountBank  }}</p>
                    <p class="mt-2 ">Cedula de Identidad: {{  props.raffle.binanceID  }}</p>
                    <FormKit
                        type="text"
                        label="Referencia de su pago"
                        name="paymentReference"
                        placeholder="Referencia de su pago"
                    />
                    <!--
                    <FormKit
                        type="date"
                        label="Fecha de su pago"
                        name="fecha_pago"
                    />
                    -->
                    
                </div>
            </fieldset>
        </div>
    </div>
        


        <FormKit type="submit">Comprar Rifa</FormKit>
    </FormKit>
</template>