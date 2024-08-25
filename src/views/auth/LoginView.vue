<script setup lang="ts">
import type { UserLoginForm, Toast } from '@/types';
import { FormKit } from '@formkit/vue';
import { loginUser } from '@/api/AuthAPI';
import { inject } from 'vue';
import { useRouter } from 'vue-router';



const router = useRouter()
const toast = inject<Toast>('toast')!;


const handleSubmit = async(formData: UserLoginForm) => {
    try {
        const { data } = await loginUser(formData)

        toast.open({
            message: 'Credenciales Correctas',
            type: 'success'
        })

        setTimeout(() => {
            router.push({name: 'raffles'})
        }, 2000)

    } catch (error) {
        toast.open({
            message: 'Credenciales Invalidas',
            type: 'error'
        })
        
    }
}

</script>

<template>
    <h1 class="text-6xl font-extrabold text-center mt-10">Iniciar Sesion</h1>
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
    



</template>