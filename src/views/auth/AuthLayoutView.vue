<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';

const route = useRoute();

const authRoutes = [
    {name: 'login', text: 'Iniciar Sesion'},
    {name: 'forgot-password', text: 'Olvide Mi Password'}
]

</script>

<template>
        <div class="mx-auto lg:w-4/5 mt-20">

<RouterView />

<nav class="mt-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0">

    <RouterLink 
        v-for="authRoute in authRoutes"
        class="uppercase font-bold text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
        :to="{name: authRoute.name}"
        :class="{'hidden' : route.name === authRoute.name}"
    >

        {{ authRoute.text }}
    </RouterLink>

</nav>
</div>
</template>