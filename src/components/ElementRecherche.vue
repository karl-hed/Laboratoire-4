<template>


      <!-- <composant-recette :idMeal="$route.params.id"></composant-recette> -->
      <recherche-page :elementRecherche="$route.params.id"></recherche-page>

  
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonFooter, IonToolbar, IonTitle } from '@ionic/vue'
  import MonHeader from '@/components/MonHeader.vue'
//   import ComposantLivre from '@/components/ComposantLivre.vue'
  import ComposantRecette from '@/components/ComposantRecette.vue';
  import RecherchePage from '@/views/RecherchePage.vue';
  
  
  </script>
  
  <style scoped></style>