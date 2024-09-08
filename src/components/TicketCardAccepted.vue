<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useRoute } from 'vue-router';
import type { TicketCard } from '../types/index';

const route = useRoute();
const props = defineProps<{ ticket: TicketCard }>();

const editableTicketNumber = ref([...props.ticket.ticketNumber]);

const handleTicketNumberChange = (newNumber: number, index: number) => {
  editableTicketNumber.value[index] = newNumber;
};
</script>

<template>
  <tr class="border-b font-bold bg-gray-500 hover:bg-gray-600 text-center">
    <td class="py-2 px-4">{{ ticket.document }}</td>
    <td class="py-2 px-4">{{ ticket.name }}</td>
    <td class="py-2 px-4">{{ ticket.email }}</td>
    <td class="py-2 px-4">{{ ticket.phone }}</td>
    <td class="py-2 px-4">{{ ticket.address }}</td>
    <td class="py-2 px-4">{{ ticket.quantity }}</td>

    
    <td class="py-2 px-4 font-bold text-black flex justify-center space-x-2">
      <div
        v-for="(number, index) in editableTicketNumber"
        :key="index"
        class="flex items-center"
      >
        <input
          type="number"
          v-model="editableTicketNumber[index]"
          @change="handleTicketNumberChange(editableTicketNumber[index], index)"
          class="w-16 border border-gray-300 text-center"
          max="1000"
        />
      </div>
    </td>
  </tr>
</template>

<style scoped>
input {
  width: 60px;
  padding: 4px;
  font-size: 1rem;
  text-align: center;
}
</style>
