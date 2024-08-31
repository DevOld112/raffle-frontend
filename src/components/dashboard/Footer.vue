<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook, faTwitter, faInstagram);

</script>

<template>
    <footer class="bg-gray-900 text-white p-6 text-center space-y-2 md:space-y-4 flex items-center justify-between ">
        <div class="lg:flex gap-10 fa-2x hidden">
            <font-awesome-icon :icon="['fab', 'facebook']" />
            <font-awesome-icon :icon="['fab', 'twitter']" />
            <font-awesome-icon :icon="['fab', 'instagram']" />
        </div>

        
            <div>
                <p class="text-lg font-semibold">Desarrollado por <span class="text-teal-400 font-bold italic">Wilmer Lopez</span></p>
                <p class="text-xs text-gray-400 mt-4">© {{ new Date().getFullYear() }} Todos los derechos reservados</p>
            </div>
            <div class="space-y-4">
                <p class="text-sm md:text-base">📞Telefono: <span class="font-bold  text-teal-400">+51 994-267-324</span> </p>
                <p class="text-sm md:text-base">📍Direccion: <span class="font-bold  text-teal-400">Calle Hefesto 253, Lima, Perú</span> </p>
                
            </div>
        
        
    </footer>
</template>