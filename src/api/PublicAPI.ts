import type { RaffleById, TicketCreation } from "@/types";
import api from '../lib/axios'
import { isAxiosError } from "axios";


export async function getPublicRaffles(){
        try {
        const url = '/public/allRaffles'   
        const { data } = await api.get(url)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getPublicRaffleById(id: RaffleById){

    try {
        const url = `/public/${id}`
        const { data } = await api.get(url)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }

}

export async function createTicketByRaffle(id: RaffleById, formData: TicketCreation){
    
    try {
        
        const url = `/public/${id}/ticket`
        const { data } = await api.post(url, formData)
        console.log(data)
        return data
        
    } catch (error) {
        console.log(error)
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}