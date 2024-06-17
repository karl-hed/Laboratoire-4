<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Mes Recettes</ion-list-header>
            <!-- <ion-menu-toggle :auto-hide="true"> -->
              <!-- <ion-item v-for="route in $router.options.routes.filter((v) => v.name)" :key="route.path" :href="route.path">
                <ion-label>{{ route.name }}</ion-label>
              </ion-item> -->
              <ion-item href="/">
                <ion-icon slot="start" :md="home"></ion-icon>
                <ion-label>Accueil</ion-label>
              </ion-item>
              <ion-item href="/chickenList">
                <ion-icon slot="start" src="assets/images/chicken-2-svgrepo-com.svg"></ion-icon>
                <ion-label>Chicken</ion-label>
              </ion-item>
              <ion-item href="/seafoodPage">
                <ion-icon slot="start" :md="fishOutline"></ion-icon>
                <ion-label>Seafood</ion-label>
              </ion-item>
              <ion-item href="/dessertList">
                <ion-icon slot="start" src="assets/images/cupcake-svgrepo-com.svg"></ion-icon>
                <ion-label>Dessert</ion-label>
              </ion-item>
              <ion-item>
                <ion-searchbar
                  placeholder="Rechercher"
                  @search="rechercheFonction($event)">
                </ion-searchbar>
              </ion-item>
            <!-- </ion-menu-toggle> -->
          </ion-list>
        </ion-content>
      </ion-menu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp,
         IonRouterOutlet, 
         IonMenu, 
         IonContent,
         IonList,
         IonListHeader,
         IonMenuToggle,
         IonItem,
         IonSplitPane,
         IonIcon,
         IonLabel,
         IonInput,
         IonSearchbar } from '@ionic/vue';
import {
  heart, home, fishOutline, fishSharp
} from 'ionicons/icons';
import ComposantListe from '@/components/ComposantListe.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import ElementRecherche from './components/ElementRecherche.vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import { useRouter } from "vue-router";

//const route = useRoute();
const router = useRouter();

const rechercheFonction = (event: Event) => {
  console.log(event.target);
  console.log(event.target.value);
  router.push(`/elementRecherche/${event.target.value}`);
  
}

const recherche = ref('');
console.log(recherche);


</script>
