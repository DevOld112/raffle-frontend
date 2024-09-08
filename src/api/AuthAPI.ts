import type { UserLoginForm, ForgotPasswordForm, PaymentUser } from "@/types";
import api from '../lib/axios'
import { isAxiosError } from "axios";

export async function loginUser(formData: UserLoginForm) {
    try {

        const url = '/auth/login'
        const { data, config } = await api.post(url, formData)


        localStorage.setItem('AUTH_TOKEN', data)
        return data;
        
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function getUser(){
    try {
        const url = '/auth/user'
        const { data } = await api.get(url)

        return data;

    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}

export async function paymentData(formData: PaymentUser) {
    try {
        const url = '/auth/payment'
        const { data } = await api.post(url, formData)
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error)
        }
    }
}