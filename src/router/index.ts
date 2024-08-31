import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      path:'/proffit',
      name:'proffit',
      component: () => import('../views/proffits/ProffitLayoutView.vue')
    },
    {
      path: '/raffle/:id/tickets',
      name: 'tickets',
      component: () => import('../views/tickets/TicketsLayoutView.vue'),
      children: [
        {
          path:'all',
          name: 'allTickets',
          component: () => import('../views/tickets/TicketsView.vue')
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

export default router
