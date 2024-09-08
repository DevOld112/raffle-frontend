<script setup lang="ts">
import type { UserLoginForm, Toast } from '@/types';
import { FormKit } from '@formkit/vue';
import { sesionAuth } from '@/utils/auth'

const sesion = sesionAuth()

const handleSubmit = async(formData: UserLoginForm) => sesion.login(formData)

</script>

<template>
    

    <div class="p-4 space-y-5 rounded-lg bg-slate-800 text-xl">
        <h1 class="text-6xl font-extrabold text-center mt-10 mb-5">Iniciar Sesion</h1>
        
        <div class="w-full p-6 bg-gray-700 rounded-lg shadow-md my-5">
        <fieldset class="border  border-gray-300 rounded-md p-4">
            <legend class="ml-3 text-lg p-2  bg-gray-500 font-semibold rounded-md">
                Autenticacion
            </legend>

                <p class="text-2xl text-center my-5">Loguea con tu cuenta</p>

                <FormKit
                id="loginForm"
                type="form"
                :actions="false"
                @submit="handleSubmit"
                >
                    <FormKit
                        type="email"
                        label="Correo Electronico"
                        name="email"
                        placeholder="Correo@gmail.com"
                        validation="required|email"
                        :validation-messages="{
                        required:'El Email es Obligatorio',
                        email: 'Email No Valido'
                        }"
                    />

                    <FormKit 
                        type="password"
                        label="Password"
                        name="password"
                        placeholder="Password de usuario"
                        validation="required|length:8"
                        :validation-messages="{
                        required:'El Password es Obligatorio'
                        }"
                    />

                    <FormKit type="submit">Iniciar Sesion</FormKit>

                </FormKit>
        </fieldset>
        </div>
    </div>
</template>