<template>
    <!-- Conteneur principal pour un élément de livre -->
    <ion-item class="conteneur-livre">
      <!-- Élément de liste contenant les détails du livre et lié vers sa page de détails -->
      <ion-item class="details-livre" :router-link="`/details/${props.recette.idMeal}`">
        <!-- Avatar à gauche montrant la couverture du livre -->
        <ion-avatar slot="start">
          <ion-img :src="props.recette.strMealThumb"></ion-img>
        </ion-avatar>
        <!-- Label pour le titre du livre -->
        <ion-label class="livre-titre">
          <h2>{{ props.recette.strMeal }}</h2>
        </ion-label>
      </ion-item>
    </ion-item>
  </template>
  
  <!-- Script de configuration pour le composant LivreItem -->
  <script setup lang="ts">
  // Importation des composants Ionic utilisés
  import { IonItem, IonAvatar, IonIcon, IonImg, IonLabel, IonButton } from '@ionic/vue'
  // Importation du type Livre pour typer les propriétés du composant
  import { Recette } from '@/types'
  
  // Importation des icônes pour les boutons d'action
  import { add, remove } from 'ionicons/icons';
  
  // Définition des propriétés attendues par le composant
  const props = defineProps<{ recette: Recette }>();
  </script>
  
  <!-- Styles spécifiques au composant LivreItem -->
  <style scoped>
  /* Style pour le conteneur principal du livre */
  .conteneur-livre {
    display: flex;
    flex: 1;
  }
  
  /* Effet au survol du conteneur principal */
  .conteneur-livre:hover {
    --ion-item-background: var(--ion-color-dark);
    --ion-item-color: var(--ion-color-light);
  }
  
  /* Style pour les détails du livre */
  .details-livre {
    display: flex;
    flex: 1;
  }
  </style>