import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getUser } from '@/api/AuthAPI'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [

      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/auth/AuthLayoutView.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue')
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('../views/auth/ForgotPasswordView.vue')
        }
      ]
    },
    {
      path: '/panel',
      name: 'panel',
      component: () => import('../views/raffles/RafflesLayoutView.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'raffles',
          name: 'raffles',
          component: () => import('../views/raffles/RafflesView.vue'),
        },
        {
          path: 'raffle/:id',
          name: 'RaffleDetails',
          component: () => import('../views/raffles/RaffleDetailView.vue'),
        },
        {
          path: 'raffle/create',
          name: 'createRaffle',
          component: () => import('../views/raffles/RaffleCreateView.vue')
        },
        {
          path: 'raffle/update/:id',
          name: 'updateRaffle',
          component: () => import('../views/raffles/RaffleUpdateView.vue')
        },
      ]
    },
    {
      path:'/usuario',
      name:'proffit',
      meta: { requiresAuth: true },
      component: () => import('../views/user/ProffitLayoutView.vue')
    },
    {
      path: '/raffle/:id/',
      name: 'tickets',
      meta: { requiresAuth: true },
      component: () => import('../views/tickets/TicketsLayoutView.vue'),
      children: [
        {
          path:'tickets',
          name: 'allTickets',
          component: () => import('../views/tickets/TicketsView.vue')
        },
        {
          path: 'clients',
          name: 'clients',
          component: () => import('../views/raffles/RafflesClientView.vue')
        }
      ]
    },
    { 
      path: '/public/raffle/:id',
      name:'rafflePublic',
      component: () => import('../landing-page/landing-page/sections/RaffleSection/RaffleDetailUser.vue')
    }
  ]
})

router.beforeEach( async(to, from, next) => {

  const requiresAuth = to.matched.some(url => url.meta.requiresAuth)

  if(requiresAuth){
    try {
      const { data } = await getUser()
    
        next()
      
    } catch (error) {
      next({name:'login'})
    }
  } else {
    next()
  }


})



export default router
