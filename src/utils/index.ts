import { ref, computed} from 'vue';
import { useRaffleStore } from '@/stores/raffles';

export const utilityFunctions = () => {

    const store = useRaffleStore();
    const searchQuery = ref<string>('')
    const currentPage = ref<number>(1);
    const itemsPerPage = ref<number>(10);
    const priceBS = ref<number | undefined>(0)

    // Funcion de Filtrado

    const filteredTickets = computed(() => {
        if (!searchQuery.value) {
            return store.tickets;
        }
    
        
    const lowerCaseQuery = searchQuery.value.toLowerCase();
        return store.tickets.filter((ticket) => {
            
            return (
            ticket.name.toLowerCase().includes(lowerCaseQuery) ||
            ticket.document.toLowerCase().includes(lowerCaseQuery) ||
            ticket.email.toLowerCase().includes(lowerCaseQuery) ||
            ticket.phone.toLowerCase().includes(lowerCaseQuery) ||
            ticket.address.toLowerCase().includes(lowerCaseQuery) 
            );
        });
    });

        // Calcular el número total de páginas
        const totalPages = computed(() => {
            return Math.ceil(filteredTickets.value.length / itemsPerPage.value);
        });

        // Obtener los tickets de la página actual
        const paginatedTickets = computed(() => {
            const start = (currentPage.value - 1) * itemsPerPage.value;
            const end = start + itemsPerPage.value;
            return filteredTickets.value.slice(start, end);
        });

        // Funciones para navegar entre páginas
        const nextPage = () => {
            if (currentPage.value < totalPages.value) {
                currentPage.value++;
            }
        };

        const prevPage = () => {
            if (currentPage.value > 1) {
                currentPage.value--;
            }
        };


        //Calcular el precio a tasa BCV

        const taxesBCV = async()=> {

            try {
                const response = await fetch("https://pydolarve.org/api/v1/dollar?page=bcv")
                const bs = await response.json()
                priceBS.value = bs.monitors.bvc.price
                return priceBS.value
        
            } catch (error) {
                console.log(error)
            }
            
        }
        



    return {
        searchQuery,
        currentPage,
        itemsPerPage,
        totalPages,
        priceBS,
        paginatedTickets,
        nextPage,
        prevPage,
        taxesBCV

    }
}