<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useRaffleStore } from '../../stores/raffles';
import { raffleServiceHandler } from '@/utils/services'
import type { TicketWin } from '../../types/index';

const route = useRoute();
const router = useRouter();
const store = useRaffleStore();
const selectedNumber = ref<number>(0);
const prize = ref<string>('');
const params = ref<TicketWin>({
    winners: [
    { ticketNumber: 0, premium: '' }
  ]
})
const winner = raffleServiceHandler()

onMounted(async () => {
    const { raffleId, ticketId } = route.params; 

    const raffleIdString = Array.isArray(raffleId) ? raffleId[0] : raffleId;
    const ticketIdString = Array.isArray(ticketId) ? ticketId[0] : ticketId;

    return raffleIdString && ticketIdString ? await store.fetchTicketById({ raffleId: raffleIdString, ticketId: ticketIdString }) : console.error("Faltan parámetros necesarios");
    
});

const getBack = () => {
    router.push({name: 'clients', params: {id: route.params.raffleId}})
}

const selectNumberWin = async() => {
    params.value.winners = [
    { ticketNumber: selectedNumber.value, premium: prize.value }
    ]
    
    await winner.selectTicketWinner(params.value)
}

</script>

<template>
    <div class="min-h-screen  flex items-center justify-center p-4">
        <div class="bg-gray-800 rounded-lg shadow-lg p-8  w-full">
            <h1 class="text-3xl font-bold text-white text-center mb-6">{{ store.ticket.name }}</h1>
            <div class="border-b  border-gray-700 pb-4 mb-4">
                <h2 class="text-2xl font-semibold text-white">Detalles del Pedido</h2>
            </div>
            <div class="space-y-4">
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Documento:</h3>
                    <p class="text-gray-300">{{ store.ticket.document }}</p>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Email:</h3>
                    <p class="text-gray-300">{{ store.ticket.email }}</p>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Teléfono:</h3>
                    <p class="text-gray-300">{{ store.ticket.phone }}</p>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Dirección:</h3>
                    <p class="text-gray-300">{{ store.ticket.address }}</p>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Cantidad:</h3>
                    <p class="text-gray-300">{{ store.ticket.quantity }}</p>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Referencia de Pago:</h3>
                    <p class="text-gray-300">{{ store.ticket.paymentReference }}</p>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Número de Ticket:</h3>
                    <div class="flex">
                        <p class="text-gray-300" v-for="number in store.ticket.ticketNumber" :key="number">{{ number }}, </p>
                    </div>

                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Seleccionar numero ganador:</h3>
                    <select v-model="selectedNumber" class="bg-white text-black border border-gray-600 rounded-lg p-2 w-full">
                        <option value="" disabled selected>Seleccione un número</option>
                        <option v-for="number in store.ticket.ticketNumber" :key="number" :value="number">{{ number }}</option>
                    </select>
                </div>
                <div class="bg-gray-600 p-4 rounded-lg">
                    <h3 class="font-medium text-white">Premio ganado:</h3>
                    <textarea v-model="prize" rows="3" class="bg-white text-black border border-gray-600 rounded-lg p-2 w-full" placeholder="Escriba el premio ganado..."></textarea>
                </div>
            </div>
            <div class="mt-6 flex justify-center gap-2">
                <button @click="selectNumberWin" class="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">Asignar Numero Ganador</button>
                <button @click="getBack()" class="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">Volver a Sorteos</button>
            </div>
        </div>
    </div>
</template>