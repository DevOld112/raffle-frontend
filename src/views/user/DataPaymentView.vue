<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { PaymentUser } from '@/types/index';
import { sesionAuth } from '@/utils/auth';
import { useUserStore } from '@/stores/user';


const user = sesionAuth()
const store = useUserStore()
const paymentData = ref<PaymentUser>({
    bankEntity: '',
    accountBank: '',
    binanceID: '',
    phone: ''
});

const dataPayment = async(formData: PaymentUser) => await user.updatePayment(formData)

onMounted(async() => {
    const userData = store.user

    paymentData.value = {
        bankEntity: userData?.bankEntity || '',
        accountBank: userData?.accountBank || '',
        binanceID: userData?.binanceID || '',
        phone: userData?.phone || ''
    };

    console.log(paymentData)
})


</script>

<template>
    <div class="max-w p-6 bg-gray-600 shadow-md rounded-lg mt-10">

        <h3 class="my-10 font-bold text-2xl text-center lg:text-left">Actualizar informacion de Pago</h3>
    

        <div class="bg-yellow-200 w-full p-2 my-5 rounded-lg lg:flex items-center grid grid-cols-1 place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-yellow-800 mr-3">
                    <path stroke-linecap="round"  stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-yellow-800 font-extrabold text-2xl">Importante:</span>
                <h5 class="text-yellow-600 font-extrabold ml-3">Por favor, completar esta informacion para que las personas que deseen adquirir una rifa puedan pagar</h5>
        </div>

        <FormKit
                id="paymentForm"
                type="form"
                :actions="false"
                @submit="dataPayment"
            >

            <FormKit
                type="text"
                label="Entidad Bancaria"
                name="bankEntity"
                placeholder="Banco de Venezuela, Banco BBVA, etc..."
                v-model="paymentData.bankEntity"
            />

            <FormKit
                type="text"
                label="Cuenta Bancaria"
                name="accountBank"
                placeholder="(0102-xxx-xxx...)"
                v-model="paymentData.accountBank"
            />

            <FormKit 
                type="text"
                label="Cedula de Identidad"
                name="binanceID"
                placeholder="..."
                v-model="paymentData.binanceID"
            />

            <FormKit 
                type="text"
                label ="Telefono Pago Movil"
                name="phone"
                placeholder="Ej: 0414-555-8886"
                v-model="paymentData.phone"
            />

            <FormKit type="submit">Actualizar Datos de Pago</FormKit>
        </FormKit>
    </div>
</template>