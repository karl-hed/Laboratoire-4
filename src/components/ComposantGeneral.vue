<template>
    <ion-item>
        <ion-icon slot="start" :md="heart"></ion-icon>
        <ion-label>Detail</ion-label>
        <composant-liste categorie="Chicken"></composant-liste>
    </ion-item>
</template>

 <!-- Script de configuration pour le composant LivreItem -->
 <script setup lang="ts">
 // Importation des composants Ionic utilisés
 import { IonItem, IonIcon, IonLabel } from '@ionic/vue'
 // Importation du type Livre pour typer les propriétés du composant
 import ComposantListe from '@/components/ComposantListe.vue';
 
 
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