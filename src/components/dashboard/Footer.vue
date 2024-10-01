<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useRouter } from 'vue-router';

    const router = useRouter()

    const login = () => router.push({name: 'login'})

library.add(faFacebook, faTwitter, faInstagram, faSignInAlt);

</script>
<template>
    <footer class="bg-gray-900 text-white p-6 text-center  md:space-y-4 md:flex md:items-center md:justify-between grid grid-cols-1 place-items-center space-y-5">
        <div class="lg:flex gap-10 fa-2x hidden md:order-1">
            <a href="https://www.facebook.com/soniasilvashema" target="_blank" class="hover:text-teal-400">
                <font-awesome-icon text="Visita Nuestra Pagina en Facebook" :icon="['fab', 'facebook']" />
            </a>
            <a href="https://www.instagram.com/rifasganadoraspc/" target="_blank" class="hover:text-teal-400">
                <font-awesome-icon text="Visita Nuestro Instagram" :icon="['fab', 'instagram']" class="hover:text-teal-400 cursor-pointer transition ease-in 0.2s" />
            </a>
            <a>
                <font-awesome-icon :icon="['fas', 'sign-in-alt']" text="Portal de Administracion" class="hover:text-teal-400 cursor-pointer transition ease-in 0.2s text-2xl hover:fa-4x" @click="login" />
            </a>
        </div>

        
        <div class="order-3 md:order-2 ">
            <p class="text-lg font-semibold">Desarrollado por <span class="text-teal-400 font-bold italic ">Wilmer Lopez</span></p>
            <p class="text-xs text-gray-400 mt-4 mb-4">© {{ new Date().getFullYear() }} Todos los derechos reservados</p>
        </div>

        <div class="space-y-4 order-2 md:order-3 ">
            <p class="text-sm md:text-base">📞Telefono: <span class="font-bold text-teal-400">+51 994-267-324</span></p>
            <p class="text-sm md:text-base">📍Direccion: <span class="font-bold text-teal-400">Calle Hefesto 253, Lima, Perú</span></p>
        </div>
    </footer>
</template>
