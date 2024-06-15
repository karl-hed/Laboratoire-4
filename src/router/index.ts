import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PageCinq from '../views/PageCinq.vue';
import ChickenPage from '../views/ChickenPage.vue';
import Detail from '../views/Detail.vue';
import Liste from '../views/Liste.vue';
import PageDetails from '../views/PageDetails.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/chickenPage',
    name: 'ChickenPage',
    component: ChickenPage
  },
  {
    path: '/pageCinq',
    name: 'PageCinq',
    component: PageCinq
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/seafoodPage',
    name: 'Seafood',
    component: Liste
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: PageDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
