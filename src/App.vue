<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Mes Recettes</ion-list-header>
            <!-- <ion-menu-toggle :auto-hide="true"> -->
              <ion-item href="/">
                <ion-icon slot="start" :md="home"></ion-icon>
                <ion-label>Accueil</ion-label>
              </ion-item>
              <ion-item href="/pageCinq">
                <ion-icon slot="start" :md="heart"></ion-icon>
                <ion-label>Page 5</ion-label>
              </ion-item>
              <ion-item href="/chickenPage">
                <ion-icon slot="start" :md="heart"></ion-icon>
                <ion-label>Chicken</ion-label>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :md="calendar"></ion-icon>
                <ion-label>Page 2</ion-label>
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
         IonLabel } from '@ionic/vue';
import {
  heart, calendar, home
} from 'ionicons/icons';
</script>
