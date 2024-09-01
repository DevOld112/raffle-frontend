<script setup lang="ts">
import faqs from "../data/faqs";
import { ref } from "vue";

function toggleFaq(faqId: number) {
  isOpen.value = isOpen.value === faqId ? null : faqId;
}

let isOpen = ref(1);

</script>
<template>
  <!-- Questions Section Start -->
  <div id="faq" class="container shadow-xl rounded-lg px-5 mx-auto">
    <div class="w-4/5 md:w-3/5 mx-auto mt-10">
      <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center">
        Preguntas Frecuentes
      </h2>
      <p class="text-center mt-7 font-bold font-theme-content text-lg">
        Aquí encontrarás respuestas a las preguntas más comunes sobre nuestra plataforma de rifas. Si tienes alguna otra pregunta o necesitas más información, no dudes en contactarnos por correo electrónico.
      </p>
    </div>

    <section class="py-16 pt-18">
      <div class="mt-10 w-full mx-auto">
        <ul class="shadow-lg space-y-2">
          <template v-for="(faq, index) in faqs" :key="faq.id">
            <li @click="toggleFaq(faq.id)" 
                :class="isOpen === faq.id ? 'text-teal-600' : ''" 
                class="font-theme-content font-bold text-2xl cursor-pointer bg-slate-700 rounded-2xl hover:text-teal-600 py-5 flex justify-between items-center transition-all duration-1500  px-6">
              <a href="#">{{ faq.title }}</a>
              <svg :class="isOpen === faq.id ? 'rotate-180 text-teal-600' : 'rotate-0 text-theme-primary'" 
                  class="transform transition-transform duration-1500" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="12">
                <path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8" />
              </svg>
            </li>
            <transition
              name="faq-transition"

            >
              <p v-if="isOpen === faq.id" 
                 class=" text-xl font-bold px-6 font-theme-content text-md lg:text-lg py-5  text-justify overflow-hidden">
                {{ faq.description }}
              </p>
            </transition>
          </template>
        </ul>
      </div>
    </section>
  </div>
  <!-- Questions Section End -->
</template>

<style scoped>

.faq-transition-enter-active, .faq-transition-leave-active {
  transition: max-height 1.5s ease, opacity 1.5s ease;
}
.faq-transition-enter, .faq-transition-leave-to {
  max-height: 0;
  opacity: 0;
}
.faq-transition-enter-to, .faq-transition-leave {
  max-height: 500px; 
  opacity: 1;
}
</style>

