import type { RaffleById, TicketByRaffle } from "@/types";
import api from '../lib/axios'
import { isAxiosError } from "axios";

export async function getAllTicketsByRaffles(raffleId: TicketByRaffle){
    try {
        const url = `/raffle/${raffleId}/ticket`
        const { data } = await api.get(url)
        console.log(data)
        return data

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}