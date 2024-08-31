import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { createRaffle, deleteRaffle, updateRaffle } from '@/api/RafflesApi';
import { deleteTicket, getAllTicketsByRaffles } from '@/api/TicketsAPI';
import { createTicketByRaffle } from '@/api/PublicAPI';
import type { Toast, RaffleById, RaffleCreation, Ticket, TicketCreation, TicketId } from '@/types';
import Swal from 'sweetalert2';
import { useRaffleStore } from '@/stores/raffles';

interface DataId {
    raffleId: string;
    ticketId: string;
}

const store = useRaffleStore();

export const raffleServiceHandler = () => {

    const router = useRouter()
    const toast = inject<Toast>('toast')!

    async function createRaffleService(formData: RaffleCreation){
        try {
            const data = await createRaffle(formData)
            
            toast.open({
                message: data,
                type: 'success'
            })
    
            setTimeout(() => {
                router.push({name: 'raffles'})
            }, 1500);
        } catch (error) {
            toast.open({
                message: 'Existe algun campo vacio, por favor revisar',
                type: 'error'
            })
        }
    }

    async function deleteRaffleService(id: RaffleById){
        try {
            const result = await Swal.fire({
                title: '¿Deseas eliminar este sorteo?',
                text: 'Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            });
    
            if (result.isConfirmed) {
                const data = await deleteRaffle(id);
                toast.open({
                    message: data,
                    type: 'success'
                });
    
                setTimeout(() => {
                    router.push({ name: 'raffles' });
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            toast.open({
                message: 'Ocurrió un error al intentar eliminar el sorteo.',
                type: 'error'
            });
        }
    }

    async function updateRaffleService(id: string, formData: RaffleCreation){
        try {
            const result = await Swal.fire({
                title: '¿Deseas Modificar este sorteo?',
                text: 'Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, Modificar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            });
    
            if (result.isConfirmed) {
                const data = await updateRaffle(id, formData);
                toast.open({
                    message: data,
                    type: 'success'
                });
    
                setTimeout(() => {
                    router.push({ name: 'raffles' });
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            toast.open({
                message: 'Ocurrió un error al intentar modificar el sorteo.',
                type: 'error'
            });
        }
    }

    async function deleteTicketService(dataId : DataId){
        try {
            const result = await Swal.fire({
                title: '¿Deseas eliminar esta rifa?',
                text: 'Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });
    
            if (result.isConfirmed) {
                const data = await deleteTicket(dataId);
                toast?.open({
                    message: data || 'Ticket eliminado con éxito',
                    type: 'success'
                });
                
            }
    
        } catch (error) {
            console.log(error);
            toast?.open({
                message: 'Ocurrió un error al eliminar el ticket',
                type: 'error'
            });
        }
    }

    async function createTicket(id: TicketId, formData: TicketCreation){
        try {
            const data = await createTicketByRaffle(id, formData)
            toast.open({
                message: 'Peticion Enviada Correctamente',
                type: 'success'
            })

            console.log(data)
    
            setTimeout(() => {
                router.push({name: 'home'})
                return data;
            }, 1500);
        } catch (error) {
            toast.open({
                message: 'Existe algun campo vacio, por favor revisar',
                type: 'error'
            })
        }
    }


    return {
        createRaffleService,
        deleteRaffleService,
        updateRaffleService,
        deleteTicketService,
        createTicket
    }

}