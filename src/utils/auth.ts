import { useRouter } from 'vue-router'
import type { UserLoginForm ,Toast, PaymentUser } from '@/types/index'
import { ref, inject } from 'vue'
import { useUserStore } from '@/stores/user'
import { loginUser, paymentData } from '@/api/AuthAPI';
import Swal from 'sweetalert2';

export const sesionAuth = () => {
    const store = useUserStore()
    const router = useRouter()
    const toast = inject<Toast>('toast')!;
    const userLogin = ref(false)

    const login = async(formData : UserLoginForm) => {
        try {
            const data = await loginUser(formData)
    
            toast.open({
                message: 'Credenciales Correctas',
                type: 'success'
            })
    
            setTimeout(() => {
                router.push({name: 'raffles'})
            }, 2000)
    
        } catch (error) {
            console.log(error)
            toast.open({
                message: 'Credenciales Invalidas',
                type: 'error'
            })
            
        }
    }

    const logout = async() => {
        try {
            const result = await Swal.fire({
                title: '¿Deseas cerrar sesión?',
                text: 'Tu sesión actual se cerrará.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, cerrar sesión',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            });

            if (result.isConfirmed) {
                localStorage.removeItem('AUTH_TOKEN');
                toast.open({
                    message: 'Sesión cerrada correctamente',
                    type: 'success'
                });
                store.user = null;
                userLogin.value = false;

                setTimeout(() => {
                    router.push({ name: 'login' });
                }, 2000);
            }

        } catch (error) {
            console.log(error);
        }
    }

    const updatePayment = async(formData : PaymentUser) => {
        try {
            const result = await Swal.fire({
                title: '¿Deseas Actualizar tu informacion de pago?',
                text: 'Asegurate que todos tus datos son correctos.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, Actualizar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            });

            if (result.isConfirmed) {

                const data = await paymentData(formData)

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
        }
    }

    return { 
        login,
        logout,
        updatePayment
    }
}