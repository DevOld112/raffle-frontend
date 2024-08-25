import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { getUser } from '@/api/AuthAPI'
import type { UserInDashboard } from '@/types'

export const useUserStore = defineStore('user', () => {

    const user = ref<UserInDashboard | null>(null);

    const getUserInterface = async() => {
        try {
            const data = await getUser()

            user.value = data


            return user;
        } catch (error) {
            
        }
    }


    return {
        user,
        getUserInterface
    }
})