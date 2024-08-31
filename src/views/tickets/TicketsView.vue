<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
import { useRaffleStore } from '@/stores/raffles';
import TicketCard from '@/components/TicketCard.vue';
import type { Ticket } from '@/types/index';


const store = useRaffleStore();
const route = useRoute();
const id = route.params.id;
const tickets = ref<Ticket[]>([]);

onMounted(async () => {
    if (id) {
      await store.fetchTickets(id);
    }
});

onUpdated(async() => {
  if (id) {
      await store.fetchTickets(id);
    }
})

</script>

<template>
  <div v-if="store.tickets.length > 0">

    <h1 class="font-medium text-left text-2xl mb-10">Listado de Tickets Activos</h1>

    <div class="overflow-x-auto">
      <table class="w-full min-w-full bg-white rounded-md text-left border-collapse shadow-md">
  <thead>
    <tr class="bg-teal-200 text-gray-700 text-center">
      <th class="py-3 px-4 border-b">Documento</th>
      <th class="py-3 px-4 border-b">Nombre</th>
      <th class="py-3 px-4 border-b">Email</th>
      <th class="py-3 px-4 border-b">Teléfono</th>
      <th class="py-3 px-4 border-b">Dirección</th>
      <th class="py-3 px-4 border-b">Cantidad</th>
      <th class="py-3 px-4 border-b">Ref. Pago</th>
      <th class="py-3 px-4 border-b">Acciones</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <TicketCard
      v-for="ticket in store.tickets"
      :key="ticket._id"
      :ticket="ticket"
    />
  </tbody>
</table>
    </div>

  </div>

  <div class="flex items-center justify-center my-20" v-else>
    <h4 class="text-2xl font-extrabold italic text-gray-500">No hay tickets pendientes</h4>
  </div>
</template>

<style>
/* Escalar la fuente y el espaciado en dispositivos pequeños */
@media (max-width: 640px) {
  th, td {
    padding: 8px;
    font-size: 0.875rem; /* Tamaño de fuente más pequeño */
  }
  
  button {
    font-size: 1.2rem; /* Ajuste del tamaño del icono en botones */
  }
}
</style>