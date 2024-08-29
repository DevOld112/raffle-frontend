import Swal from 'sweetalert2';
declare module 'vue-sweetalert2' {
    interface SweetAlertOptions extends Swal.Options {}
}
