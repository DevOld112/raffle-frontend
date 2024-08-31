<script setup lang="ts">
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
import type { TicketCard, RaffleByTicketId } from '../types/index';
import { raffleServiceHandler } from '../utils/services';



const route = useRoute();
const props = defineProps<{ ticket: TicketCard }>();
const raffleId = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const ticketId = String(props.ticket._id);
const service = raffleServiceHandler();


const dataId: RaffleByTicketId = {
  _id: ticketId,
  raffleId,
  ticketId
};


const cancelTicket = async (dataId: RaffleByTicketId) => await service.deleteTicketService(dataId)

;
</script>

<template>
  <tr class="border-b hover:bg-gray-50">
    <td class="py-2 px-4">{{ ticket.document }}</td>
    <td class="py-2 px-4">{{ ticket.name }}</td>
    <td class="py-2 px-4">{{ ticket.email }}</td>
    <td class="py-2 px-4">{{ ticket.phone }}</td>
    <td class="py-2 px-4">{{ ticket.address }}</td>
    <td class="py-2 px-4">{{ ticket.quantity }}</td>
    <td class="py-2 px-4 font-bold">{{ ticket.paymentReference }}</td>
    <td class="py-2 px-4 flex space-x-2 my-2">
      <button class="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
        <i class="fas fa-check"></i>
      </button>
      <button @click="cancelTicket(dataId)" class="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
        <i class="fas fa-trash"></i>
      </button>
    </td>
  </tr>
</template>

<style scoped>
button {
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1.2rem; 
}
</style>
