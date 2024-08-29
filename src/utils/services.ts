import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { createRaffle, deleteRaffle } from '@/api/RafflesApi';
import { deleteTicket } from '@/api/TicketsAPI'
import type { Toast, RaffleById, RaffleCreation, Ticket } from '@/types';
import Swal from 'sweetalert2';

interface DataId {
    raffleId: string;
    ticketId: string;
  }

export const raffleServiceHandler = () => {

    const router = useRouter()
    const toast = inject<Toast>('toast')!

    async function createRaffleService(formData: RaffleCreation){
        try {
            const data = await createRaffle(formData)

            console.log(data)
            
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
    
                setTimeout(() => {
                    router.push({ name: 'raffles' });
                }, 1500);
            }
    
        } catch (error) {
            console.log(error);
            toast?.open({
                message: 'Ocurrió un error al eliminar el ticket',
                type: 'error'
            });
        }
    }


    return {
        createRaffleService,
        deleteRaffleService,
        deleteTicketService
    }

}