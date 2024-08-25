import { z } from 'zod'

/** Auth & Users */

export const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    password_confirmation: z.string(),
    token: z.string()
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
    totalAmount: z.number()
})

/** Tickets */

export const ticketSchema = z.object({
    raffleId: z.object({
        _id: z.string()
    }),
    document: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    quantity: z.number(),
    paymentReference: z.string()
})



/** Types - Schemas */

export type Auth = z.infer<typeof authSchema>

export type UserLoginForm = Pick<Auth, 'email'| 'password'>
export type ForgotPasswordForm = Pick<Auth, 'email'>
export type UserInDashboard = Pick<Auth, 'name' | 'email'>

export type Raffle = z.infer<typeof rafflesSchema>

export type RaffleCard = Pick<Raffle, '_id' |'title'| 'description' | 'price' | 'tickets'>
export type RaffleById = Pick<Raffle, '_id'>
export type RaffleCreation = Pick<Raffle, 'title' | 'description'| 'premiums' |'price'>

export type Ticket = z.infer<typeof ticketSchema>

export type TicketByRaffle = string | string[];


export interface Toast {
    open(options: { message: string; type: 'success' | 'error' }): void;
}
