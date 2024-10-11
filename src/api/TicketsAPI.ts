import type { Raffle, RaffleById, Ticket, TicketByRaffle, TicketNumber, TicketWin } from "@/types";
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
        
        
        for(let i = 0; i < data.length; i++){
            if(data[i].status === 'pending'){
            rafflePending.push(data[i])
            }
        }

        return rafflePending;

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllTicketsByRafflesAccepted(raffleId: TicketByRaffle){
    try {
        const rafflePending = []
        const url = `/raffle/${raffleId}/ticket`
        const { data } = await api.get(url)
        
        for(let i = 0; i < data.length; i++){
            if(data[i].status === 'completed'){
            rafflePending.push(data[i])
            }
        }

        
        
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

export async function updateTicketNumbers({raffleId, ticketId} : Pick<TicketAPI, 'raffleId'|'ticketId'>, formData: TicketNumber){
    try {
        const url = `/raffle/${raffleId}/ticket/${ticketId}/ticketsNumbers`
        const { data } = await api.post<string>(url, formData)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getTicketById({raffleId, ticketId}: TicketAPI) : Promise<Ticket | null>{
    try {
        const url = `/raffle/${raffleId}/ticket/${ticketId}/detail`
        const { data } = await api.get<Ticket>(url)
        console.log(data)
        return data as Ticket
    } catch (error) {
        console.log(error);
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        return null
    }
}

export async function selectTicket(formData : TicketWin){
    try {
        console.log(formData)
    } catch (error) {
        console.log(error);
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}