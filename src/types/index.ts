import { z } from 'zod'

/** Auth & Users */

export const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
    token: z.string(),
    bankEntity: z.string(),
    accountBank: z.string(),
    binanceID: z.string(),
    phone: z.string(),
})

/** Raffles */

export const rafflesSchema = z.object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    premiums: z.string(),
    quantity: z.number(),
    tickets: z.array(z.object({

    })),
    availableQuantity: z.number(),
    price: z.number(),
    totalAmount: z.number(),
    endDate: z.date(),

})

/** Tickets */

export const ticketSchema = z.object({
    _id: z.string(),
    raffleId: z.object({
        _id: z.string()
    }),
    document: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    quantity: z.number(),
    paymentReference: z.string(),
    status: z.object({
        PENDING: z.string(),
        COMPLETED: z.string()
    })
})



/** Types - Schemas */

export type Auth = z.infer<typeof authSchema>

export type UserLoginForm = Pick<Auth, 'email'| 'password'>
export type ForgotPasswordForm = Pick<Auth, 'email'>
export type UserInDashboard = Pick<Auth, 'name' | 'email' | 'bankEntity' | 'accountBank' | 'binanceID' | 'phone'>
export type PaymentUser =  Pick<Auth, 'bankEntity' | 'accountBank' | 'binanceID' | 'phone'>

export type Raffle = z.infer<typeof rafflesSchema>

export type RaffleCard = Pick<Raffle, '_id' |'title'| 'description' | 'price' | 'tickets' >
export type RaffleById = Pick<Raffle, '_id'>
export type RaffleCreation = Pick<Raffle, 'title' | 'description'| 'premiums' |'price'| 'endDate' >
export type RaffleUpdate = {
    title: string;
    description: string;
    premiums: string;
    price: number;
    endDate: string; 
};



export type Ticket = z.infer<typeof ticketSchema>

export type TicketByRaffle = string | string[];
export type TicketCard = Pick<Ticket, 'document'| 'name' | 'email' | 'paymentReference'| 'quantity' | 'phone' | 'address' | '_id' | 'status' >
export type TicketCreation= Pick<Ticket, 'document'| 'name' | 'email' | 'paymentReference'| 'quantity' | 'phone' | 'address' >
export type TicketId = Pick<Ticket, '_id'>


export interface RaffleByTicketId {
    _id: string;
    raffleId: string;
    ticketId: string;
  }


export interface Toast {
    open(options: { message: string; type: 'success' | 'error' }): void;
}
