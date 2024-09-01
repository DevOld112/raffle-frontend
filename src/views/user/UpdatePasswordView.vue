<script setup lang="ts">


const updatePassword = async () => {

};


</script>

<template>
    <div class="max-w p-6 bg-gray-600 shadow-md rounded-lg mt-10">

        <h3 class="my-10 font-bold text-2xl">Actualizar Contraseña</h3>
    
        <div class="bg-yellow-200 w-full p-2 my-5 rounded-lg flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-16 h-16 text-yellow-800 mr-3">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-yellow-800 font-extrabold text-2xl">Importante:</span>
            <h5 class="text-yellow-600 font-extrabold ml-3">Por favor, asegúrate de que tu nueva contraseña sea segura y única.</h5>
        </div>

        <FormKit
            id="updatePasswordForm"
            type="form"
            :actions="false"
            @submit="updatePassword"
        >
            <FormKit
                type="password"
                label="Contraseña Actual"
                name="currentPassword"
                placeholder="Introduce tu contraseña actual"

            />

            <FormKit
                type="password"
                label="Nueva Contraseña"
                name="newPassword"
                placeholder="Introduce tu nueva contraseña"

            />

            <FormKit
                type="password"
                label="Confirmar Nueva Contraseña"
                name="confirmPassword"
                placeholder="Confirma tu nueva contraseña"

            />

            <FormKit type="submit">Actualizar Contraseña</FormKit>
        </FormKit>
    </div>
</template>