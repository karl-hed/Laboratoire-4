<template>


      
      <!-- <recherche-page :elementRecherche="$route.params.id"></recherche-page> -->

    <ion-page>
        <ion-header :translucent="true">
        <ion-toolbar>
            <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-title>{{ $route.name ? $route.name : "no name" }}</ion-title>
        </ion-toolbar>
        </ion-header>
    
        <ion-content :fullscreen="true">
        <ion-card>
            <ion-list v-if="recettesArray.length > 0">
                <ion-item v-for="recette in recettesArray" :key="recette.strMeal"> 
                    <recette-item :recette="recette"></recette-item>
                </ion-item>
            </ion-list>
            <ion-skeleton-text v-else class="skeleton" animated></ion-skeleton-text>    
        </ion-card>
        </ion-content>
  </ion-page>
    

  
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonFooter, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonList, IonHeader, IonButtons, IonMenuButton, IonSkeletonText } from '@ionic/vue'
  import MonHeader from '@/components/MonHeader.vue'
  import ComposantRecette from '@/components/ComposantRecette.vue';
  import RecherchePage from '@/views/RecherchePage.vue';
  import { Recette } from '../types';
  import { loadingController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import RecetteItem from '@/components/RecetteItem.vue';


  const props = defineProps<{ id: string | string[] }>();
  console.log(`id = ${props.id}`);
  const recettesArray = ref<Recette[]>([]);
  let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';


  if (props.id !== null) {
    onMounted(async () => {
    const loading = await loadingController.create({ message: 'Attendre SVP...', });
    await loading.present();
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.id}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          //console.log(data['meals'][0]);
          //console.log(data['meals'][0]);
          //console.log(`data['meals'][0].length = ${data['meals'][0].value.length}`);
          
          data['meals'].forEach((meal: Recette) => {
              //console.log(meal);
              //console.log(meal.strMeal);
              const ingredientsArray: { strMeasure: string, name: string }[] = [];

              for (let i = 1; i <= 20; ++i) {
                  if (meal['strIngredient' + i] !== "" && meal['strIngredient' + i] !== null) {
                      ingredientsArray.push({ strMeasure: meal['strMeasure' + i], name: `${meal['strIngredient' + i]}` })
                  }
              }
              const recetteValue: Recette = {
                  strMeal: meal.strMeal,
                  strMealThumb: meal.strMealThumb,
                  strArea: meal.strArea,
                  strCategory: meal.strCategory,
                  strIngredients: ingredientsArray,
                  strInstructions: meal.strInstructions,
                  idMeal: meal.idMeal
              };
              //console.log(meal);
              recettesArray.value.push(recetteValue);
              //console.log(recettesArray.value[0].strMeal);
          })
          loading.dismiss();
        });
  });
  }
  
  
  
  </script>
  
  <style scoped></style>