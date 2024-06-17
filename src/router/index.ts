import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ChickenList from '../views/ChickenList.vue';
import Detail from '../views/Detail.vue';
import Liste from '../views/Liste.vue';
import PageDetails from '../views/PageDetails.vue';
import ComposantListe from '@/components/ComposantListe.vue';
import DessertList from '@/views/DessertList.vue';
import ElementRecherche from '@/components/ElementRecherche.vue';

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
    component: PageDetails,
    //props: true
  },
  {
    path: '/composant/:id',
    name: 'ComposantListe',
    component: ComposantListe
  },
  {
    path: '/chickenList',
    name: 'Chicken',
    component: ChickenList
  },
  {
    path: '/dessertList',
    name: 'Dessert',
    component: DessertList
  },
  {
    path: '/elementRecherche/:id',
    name: 'ElementRecherche',
    component: ElementRecherche,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
