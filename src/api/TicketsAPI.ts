import type { Raffle, RaffleById, Ticket, TicketByRaffle } from "@/types";
import api from '../lib/axios'
import { isAxiosError } from "axios";

export type TicketAPI = {
    raffleId: Raffle['_id'],
    ticketId: Ticket['_id']
}

export async function getAllTicketsByRaffles(raffleId: TicketByRaffle){
    try {
        const rafflePending = []
        const url = `/raffle/${raffleId}/ticket`
        const { data } = await api.get(url)
        console.log(data)
        
        for(let i = 0; i < data.length; i++){
            if(data[i].status === 'pending'){
            rafflePending.push(data[i])
            }
        }

        console.log(rafflePending)
        
        return rafflePending;

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

export async function acceptTicket({raffleId, ticketId} : Pick<TicketAPI, 'raffleId'|'ticketId'>){
    try {
        const url = `/raffle/${raffleId}/ticket/${ticketId}`
        const { data } = await api.post<string>(url)
        return data
    } catch (error) {
        console.log(error)
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}