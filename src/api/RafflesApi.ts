import type { Raffle, RaffleById, RaffleCreation, PaymentUser } from "@/types";
import api from '../lib/axios'
import { isAxiosError } from "axios";

export async function getAllRaffles(){
    try {
        const url = '/raffle/allRafflesByUser'   
        const { data } = await api.get(url)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}


export async function getRaffleById(id: RaffleById){

    try {
        const url = `/raffle/${id}`
        const { data } = await api.get(url)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }

}




export async function deleteRaffle(id : RaffleById){
    try {
        const url = `/raffle/${id}`
        const { data } = await api.delete(url)
        console.log(data)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function createRaffle(formData: RaffleCreation){
    try {
        const url = '/raffle/create-raffle'
        const { data } = await api.post(url, formData)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateRaffle(id: string, formData: RaffleCreation){
    try {
        const url = `/raffle/${id}`
        const { data } = await api.put(url ,formData)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

