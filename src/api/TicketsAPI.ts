import type { Raffle, RaffleById, Ticket, TicketByRaffle } from "@/types";
import api from '../lib/axios'
import { isAxiosError } from "axios";

export type TicketAPI = {
    raffleId: Raffle['_id'],
    ticketId: Ticket['_id']
}

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

export async function deleteTicket({raffleId, ticketId} : Pick<TicketAPI, 'raffleId'|'ticketId'>){
    try {
        const url = `/raffle/${raffleId}/ticket/${ticketId}`
        const { data } = await api.delete<string>(url)
        return data
    } catch (error) {
        console.log(error)
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}