import { ref } from 'vue';
import { defineStore } from 'pinia';
import {  getPublicRaffles, getPublicRaffleById } from '@/api/PublicAPI';
import type { Raffle, RaffleById, Ticket, TicketByRaffle } from '@/types';
import { getAllTicketsByRaffles } from '@/api/TicketsAPI';

export const usePublicStore = defineStore('public', () => {
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
    const tickets = ref<Ticket[]>([]);



    const fetchPublicRaffles = async() =>{
        try {
            const data = await getPublicRaffles();
            raffles.value = data;
            return raffles;
        } catch (error) {
            console.log(error);
        }
    }


    const fetchPublicRaffle = async (id: RaffleById) => {
        try {
            console.log(id)
            const data = await getPublicRaffleById(id);
          
            raffle.value = data;
            return raffle;
        } catch (error) {
            console.log(error);
        }
    };




    return {
        raffle,
        raffles,
        tickets,
        fetchPublicRaffles,
        fetchPublicRaffle,

    };
});
