import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { getAllRaffles, getRaffleById } from '@/api/RafflesApi'
import type { Raffle, RaffleById, Ticket, TicketByRaffle  } from '@/types';
import { getAllTicketsByRaffles } from '@/api/TicketsAPI';

export const useRaffleStore = defineStore('raffles', () => {

    const raffles = ref<Raffle[]>([]);
    const raffle = ref<Raffle>({
        _id: '',
        title: '',
        description: '',
        premiums: '',
        quantity: 0,
        tickets: [],
        availableQuantity: 0,
        price: 0,
        totalAmount: 0
    });
    const tickets = ref<Ticket[]>([])

    const fetchRaffles = async () => {
        try {
            const data = await getAllRaffles();
            raffles.value = data; 
        } catch (error) {
            console.log(error);
        }
    };

    const fetchRaffle = async(id : RaffleById) => {
        try {
            const data = await getRaffleById(id)
            raffle.value = data
        } catch (error) {
            console.log(error)
        }
    }

    const fetchTickets = async(id:TicketByRaffle) => {
        try {
            const data = await getAllTicketsByRaffles(id)
            console.log(data)
            tickets.value = data
        } catch (error) {
            console.log(error)
        }
    }


    return {
        raffle,
        raffles,
        tickets,
        fetchRaffles,
        fetchRaffle,
        fetchTickets
    }
})