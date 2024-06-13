<template>
  <ion-app>
    
    <!-- <ion-split-pane content-id="main-content"> -->
      <ion-menu content-id="main-content" type="overlay">
        <ion-content>
          <ion-list id="inbox-list">
            <ion-list-header>Mes Recettes</ion-list-header>
            <!-- <ion-menu-toggle :auto-hide="true"> -->
              <ion-item>
                <ion-icon slot="start" :md="heart"></ion-icon>
                <ion-label>Page 1</ion-label>
              </ion-item>
              <ion-item>
                <ion-icon slot="start" :md="calendar"></ion-icon>
                <ion-label>Page 2</ion-label>
              </ion-item>
            <!-- </ion-menu-toggle> -->
          </ion-list>
        </ion-content>
      </ion-menu>

    <!-- </ion-split-pane> -->
    <ion-router-outlet id="main-content"></ion-router-outlet>
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
  heart, calendar
} from 'ionicons/icons';
</script>
