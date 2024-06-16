<template>


      <!-- <composant-recette :idMeal="$route.params.id"></composant-recette> -->
      <recherche-page :elementRecherche="$route.params.id"></recherche-page>
      <!-- <ion-content :fullscreen="true">
        <ion-card>
            <ion-list v-if="recettesArray.length > 0">
                <ion-item v-for="recette in recettesArray" :key="recette.strMeal"> 
                    <recette-item :recette="recette"></recette-item>
                </ion-item>
            </ion-list>
           <ion-skeleton-text v-else class="skeleton" animated></ion-skeleton-text>    
        </ion-card>
      </ion-content> -->
    

  
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonFooter, IonToolbar, IonTitle, IonContent, IonCard, IonItem, IonList } from '@ionic/vue'
  import MonHeader from '@/components/MonHeader.vue'
//   import ComposantLivre from '@/components/ComposantLivre.vue'
  import ComposantRecette from '@/components/ComposantRecette.vue';
  import RecherchePage from '@/views/RecherchePage.vue';
  import { Recette } from '../types';
  import { loadingController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';


  const props = defineProps<{ id: string | string[] }>();
  console.log(`id = ${props.id}`);
  const recettesArray = ref<Recette[]>([]);
  let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';


  if (props.id !== null) {
    onMounted(async () => {
    const loading = await loadingController.create({ message: 'Attendre SVP...', });
    await loading.present();
    //const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.id}`;
    
    const ingredientsStringList = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", ]
    
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
          recettesArray.value.forEach((recette) => {
              //console.log(`strMeal: ${recette.strMeal}`);
          });
          
          /*
          console.log(`data['meals'][0].idMeal = ${data['meals'][0].idMeal}`);
          const ingredientsArray: { mesure: string, name: string }[] = [];
          
          for (let i = 1; i <= 20; ++i) {
            if (data.meals[0]['strIngredient' + i] !== "" && data.meals[0]['strIngredient' + i] !== null) {
              ingredientsArray.push({ mesure: data.meals[0]['strMeasure' + i], name: `${data.meals[0]['strIngredient' + i]}` })
            }
          }
          const recetteValue: Recette = {
            nomRecette: data.meals[0].strMeal,
            img: data.meals[0].strMealThumb,
            area: data.meals[0].strArea,
            categorie: data.meals[0].strCategory,
            ingredients: ingredientsArray,
            instructions: data.meals[0].strInstructions,
          };
          console.log(recetteValue.ingredients);
          */
          loading.dismiss();
          //recette.value = recetteValue;
        });
  });
  }
  
  
  
  </script>
  
  <style scoped></style>