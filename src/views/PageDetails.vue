<template>
    <ion-page>
      <mon-header>
  
      </mon-header>
  
      <composant-livre :livreId="$route.params.id">
  
      </composant-livre>
  
      <ion-footer>
        <ion-toolbar color="secondary">
          <ion-title>Pied de page</ion-title>
        </ion-toolbar>
      </ion-footer>
  
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonFooter, IonToolbar, IonTitle } from '@ionic/vue'
  import MonHeader from '@/components/MonHeader.vue'
//   import ComposantLivre from '@/components/ComposantLivre.vue'
  
  
  </script>
  
  <style scoped></style>