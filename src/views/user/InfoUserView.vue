<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const userStore = useUserStore();

onMounted(() => {
    userStore.getUserInterface();
});
</script>


<template>
    <div class="max-w p-6 bg-gray-600 shadow-md rounded-lg mt-10">
        <h2 class="text-3xl font-extrabold  mb-6 border-b pb-3 text-center lg:text-left">Información del Usuario</h2>
        
        <div v-if="userStore.user" class="space-y-6">
            <!-- Nombre -->
            <div class="md:flex items-center justify-between grid grid-cols-1 place-items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-user text-blue-600"></i>
                    <label class="text-lg font-semibold ">Nombre:</label>
                </div>
                <p class="text-lg font-medium ">{{ userStore.user.name }}</p>
            </div>
            <!-- Correo Electrónico -->
            <div class="md:flex items-center justify-between grid grid-cols-1 place-items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-envelope text-green-600"></i>
                    <label class="text-lg font-semibold ">Correo Electrónico:</label>
                </div>
                <p class="text-lg font-medium ">{{ userStore.user.email }}</p>
            </div>
            <!-- Entidad Bancaria -->
            <div class="md:flex items-center justify-between grid grid-cols-1 place-items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-university text-purple-600"></i>
                    <label class="text-lg font-semibold">Entidad Bancaria:</label>
                </div>
                <p class="text-lg font-medium ">{{ userStore.user.bankEntity }}</p>
            </div>
            <!-- Cuenta Bancaria -->
            <div class="md:flex items-center justify-between grid grid-cols-1 place-items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-credit-card text-indigo-600"></i>
                    <label class="text-lg font-semibold ">Cuenta Bancaria:</label>
                </div>
                <p class="text-lg font-medium ">{{ userStore.user.accountBank }}</p>
            </div>
            <!-- ID de Binance -->
            <div class="md:flex items-center justify-between grid grid-cols-1 place-items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-key text-yellow-600"></i>
                    <label class="text-lg font-semibold ">Cedula de Identidad:</label>
                </div>
                <p class="text-lg font-medium ">{{ userStore.user.binanceID }}</p>
            </div>
            <!-- Teléfono -->
            <div class="md:flex items-center justify-between grid grid-cols-1 place-items-center">
                <div class="flex items-center space-x-2">
                    <i class="fas fa-phone text-red-600"></i>
                    <label class="text-lg font-semibold ">Teléfono:</label>
                </div>
                <p class="text-lg font-medium ">{{ userStore.user.phone }}</p>
            </div>
        </div>
        
        <div v-else class="text-center text-gray-500 mt-4">
            <i class="fas fa-spinner fa-spin text-xl"></i>
            <p>Cargando información del usuario...</p>
        </div>
    </div>
</template>