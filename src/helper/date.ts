export function formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export function formatDateOrFallback(date: Date | string | null | undefined): string {
    if (!date) {
        return 'Fecha no disponible';
    }
    if (date instanceof Date) {
        return formatDate(date);
    }

    const parsedDate = new Date(date);
 
    if (isNaN(parsedDate.getTime())) {
        return 'Fecha no disponible';
    }
    return formatDate(parsedDate);
}