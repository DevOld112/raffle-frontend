<script setup lang="ts">
import { defineProps } from 'vue';


interface Ticket {
    raffleId: {
        _id: string;
    };
    document: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    quantity: number; 
    paymentReference: string;
}


const props = defineProps<{ ticket: Ticket }>();


</script>

<template>
    <div class="admin-card bg-white shadow-lg rounded-lg p-6 mb-6 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-4">Información del Usuario</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
            <div class="flex-1">
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Documento:</p>
                        <p class="text-gray-900 text-base">{{ ticket.document }}</p>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m4-4H8"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Nombre:</p>
                        <p class="text-gray-900 text-base">{{ ticket.name }}</p>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.403-1.403A7.968 7.968 0 0018 13.882V11H7v2.882a7.968 7.968 0 00-1.597 1.715L4 17h5m6 0v-2h-6v2m1-14a5 5 0 00-5 5v2h10V8a5 5 0 00-5-5z"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Email:</p>
                        <p class="text-gray-900 text-base">{{ ticket.email }}</p>
                    </div>
                </div>
            </div>
            <div class="flex-1">
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11.58V17H5v-5.42A3.99 3.99 0 014 8V4h16v4a4 4 0 01-1 7.58zM12 13h.01M10 13h.01M8 13h.01M6 13h.01M16 13h.01"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Teléfono:</p>
                        <p class="text-gray-900 text-base">{{ ticket.phone }}</p>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Dirección:</p>
                        <p class="text-gray-900 text-base">{{ ticket.address }}</p>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Cantidad:</p>
                        <p class="text-gray-900 text-base">{{ ticket.quantity }}</p>
                    </div>
                </div>
                <div class="flex items-center mb-4">
                    <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12l5 5L20 7"></path>
                    </svg>
                    <div>
                        <p class="text-lg font-semibold text-gray-700">Referencia de Pago:</p>
                        <p class="text-gray-900 text-base">{{ ticket.paymentReference }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end space-x-4 mt-6">
            <button class="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Aceptar
            </button>
            <button class="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Rechazar
            </button>
        </div>
    </div>
</template>

<style scoped>
.admin-card {
    max-width: 100%; /* Se ajusta al contenedor */
    margin: 0 auto; /* Centra la tarjeta */
}

.admin-card h2 {
    border-bottom: 2px solid #e2e8f0; /* Línea debajo del título */
}

.admin-card div {
    border-bottom: 1px solid #e2e8f0; /* Separadores entre elementos */
    padding-bottom: 10px;
}

.admin-card div:last-child {
    border-bottom: none; /* Elimina el borde del último elemento */
}

.admin-card svg {
    color: #4a5568; /* Color de los iconos */
}

button {
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    font-size: 1rem;
}

button svg {
    color: #fff; /* Color de los iconos en botones */
}
</style>
