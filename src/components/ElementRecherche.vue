<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ props.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-card>
          <ion-list v-if="recettesArray.length > 0">
            <ion-item v-for="recette in recettesArray" :key="recette.idMeal">
              <recette-item :recette="recette"></recette-item>
            </ion-item>
          </ion-list>
          <ion-skeleton-text v-else class="skeleton" animated></ion-skeleton-text>
        </ion-card>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonList, IonHeader, IonButtons, IonMenuButton, IonSkeletonText } from '@ionic/vue';
  import { Recette } from '../types';
  import { loadingController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import RecetteItem from '@/components/RecetteItem.vue';
  
  const props = defineProps<{ id: string }>();
  console.log(`id = ${props.id}`);
  const recettesArray = ref<Recette[]>([]);
  
  if (props.id !== null) {
    onMounted(async () => {
      const loading = await loadingController.create({ message: 'Attendre SVP...' });
      await loading.present();
  
      const abortController = new AbortController();
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.id}`;
  
      // Set timeout to abort the fetch request after 3 minutes
      const timeoutId = setTimeout(() => {
        abortController.abort();
      }, 180000);
  
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const data = await response.json();
        data.meals.forEach((meal: any) => {
          const ingredientsArray: { strMeasure: string, name: string }[] = [];
          for (let i = 1; i <= 20; ++i) {
            if (meal['strIngredient' + i] !== "" && meal['strIngredient' + i] !== null) {
              ingredientsArray.push({ strMeasure: meal['strMeasure' + i], name: `${meal['strIngredient' + i]}` });
            }
          }
          const recetteValue: Recette = {
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
            strArea: meal.strArea,
            strCategory: meal.strCategory,
            strIngredients: ingredientsArray,
            strInstructions: meal.strInstructions,
            idMeal: meal.idMeal,
          };
          recettesArray.value.push(recetteValue);
        });
      } catch (error) {
        if (error.name === 'AbortError') {
          console.error('Fetch aborted due to timeout');
        } else {
          console.error('Fetch error:', error);
        }
      } finally {
        clearTimeout(timeoutId);
        loading.dismiss();
      }
    });
  }
  </script>
  
  <style scoped></style>
  