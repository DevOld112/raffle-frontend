import { ref } from 'vue';
import { defineStore } from 'pinia';
import { getAllRaffles, getRaffleById } from '@/api/RafflesApi';
import type { Raffle, RaffleById, Ticket, TicketByRaffle, TicketCard } from '@/types';
import type { TicketAPI } from '@/api/TicketsAPI';
import { getAllTicketsByRaffles, getAllTicketsByRafflesAccepted, updateTicketNumbers, getTicketById } from '@/api/TicketsAPI';

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
        totalAmount: 0,
        endDate: new Date(),
        bankEntity: '',
        accountBank: '',
        binanceID: '',
        phone: ''
    });
    const tickets = ref<Ticket[]>([]);
    const ticket = ref<Ticket>({
        _id: '',
        raffleId: {
        _id: ''
        },
        document: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        quantity: 0,
        paymentReference: '',
        status: {
        PENDING: '',
        COMPLETED: ''
        },
        ticketNumber: []
      })

    const fetchRaffles = async () => {
        try {
            const data = await getAllRaffles();
            raffles.value = data; 
            return raffles;
        } catch (error) {
            console.log(error);
        }
    };


    const fetchRaffle = async (id: RaffleById) => {
        try {
            const data = await getRaffleById(id);
            raffle.value = data;
            return raffle;
        } catch (error) {
            console.log(error);
        }
    };


    const fetchTickets = async (id: TicketByRaffle) => {
        try {
            const data = await getAllTicketsByRaffles(id);
            tickets.value = Array.isArray(data) ? data : [];
            return tickets
        } catch (error) {
            console.log(error);
        }
    };

    const fetchTicketsAccepted = async (id: TicketByRaffle) => {
        try {
            const data = await getAllTicketsByRafflesAccepted(id);
            tickets.value = Array.isArray(data) ? data : [];
            return tickets
        } catch (error) {
            console.log(error);
        }
    };

    const fetchTicketById = async(id : TicketAPI) => {
        try {
            const data = await getTicketById(id);
            if (data) {
                ticket.value = data as Ticket ; 
            } else {
                console.error("El ticket no se encontró."); 
            console.log(ticket.value);
            }
        } catch (error) {
            console.error(error); 
        }
    }



    return {
        raffle,
        raffles,
        ticket,
        tickets,
        fetchRaffles,
        fetchRaffle,
        fetchTickets,
        fetchTicketsAccepted,
        fetchTicketById

    };
});
