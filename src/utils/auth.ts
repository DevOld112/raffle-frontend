import { useRouter } from 'vue-router'
import type { UserLoginForm ,Toast } from '@/types/index'
import { ref, inject } from 'vue'
import { useUserStore } from '@/stores/user'
import { loginUser } from '@/api/AuthAPI';

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

    const logout = () => {
        try {
        const result = confirm('¿Deseas Cerrar Sesion?')
        if(result){
            localStorage.removeItem('AUTH_TOKEN')
            toast.open({
                message: 'Sesión cerrada correctamente',
                type: 'success'
            })
        }

        store.user = null; 
        userLogin.value = false;
        
        setTimeout(() => {
            router.push({name: 'login'})
        }, 2000);    
        } catch (error) {
        console.log(error)
        }
    }

    return { 
        login,
        logout
    }
}