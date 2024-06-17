<template>
    <!-- Conteneur principal pour un élément de recette -->
    <ion-item class="conteneur-recette">
      <!-- Élément de liste contenant les détails d'une recette et lié vers sa page de détails -->
      <ion-item class="details-recette" :router-link="`/details/${props.recette.idMeal}`">
        <!-- Avatar à gauche montrant la couverture de la recette -->
        <ion-avatar slot="start">
          <ion-img :src="props.recette.strMealThumb"></ion-img>
        </ion-avatar>
        <!-- Label pour une recette -->
        <ion-label class="livre-titre">
          <h2>{{ props.recette.strMeal }}</h2>
        </ion-label>
      </ion-item>
    </ion-item>
  </template>
  
  <!-- Script de configuration -->
  <script setup lang="ts">
  // Importation des composants Ionic utilisés
  import { IonItem, IonAvatar, IonIcon, IonImg, IonLabel, IonButton } from '@ionic/vue'
  // Importation du type Recette pour typer les propriétés du composant
  import { Recette } from '@/types'
  
  // Définition des propriétés attendues par le composant
  const props = defineProps<{ recette: Recette }>();
  </script>
  
  <!-- Styles spécifiques au composant RecetteItem -->
  <style scoped>
  /* Style pour le conteneur principal de la recette */
  .conteneur-recette {
    display: flex;
    flex: 1;
  }
  
  /* Effet au survol du conteneur principal */
  .conteneur-recette:hover {
    --ion-item-background: var(--ion-color-dark);
    --ion-item-color: var(--ion-color-light);
  }
  
  /* Style pour les détails du livre */
  .details-recette {
    display: flex;
    flex: 1;
  }
  </style>