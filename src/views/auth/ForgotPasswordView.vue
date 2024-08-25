<script setup lang="ts">
import type { ForgotPasswordForm } from '@/types';


    const handleSubmit = async(formData: ForgotPasswordForm) => {
        console.log(formData)
    }


</script>

<template>
    <h1 class="text-6xl font-extrabold text-center mt-10">Olvide Password</h1>
    <p class="text-2xl text-center my-5">Recupera el Acceso a tu Cuenta</p>

    <FormKit
        id="forgotPassword"
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

        <FormKit type="submit">Enviar Instrucciones</FormKit>

    </FormKit>
    
</template>