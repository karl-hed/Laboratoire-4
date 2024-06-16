<template>
    <!-- copie de Liste.vue mais pour savoir si on peut passer un props de App.vue a ce fichier avec le string de recherche ('seafood', 'chicken', ...) -->
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
  import { IonContent,
           IonHeader, 
           IonPage, 
           IonTitle, 
           IonToolbar,
           IonButton,
           IonButtons,
           IonMenuButton,
           IonImg,
           IonItem,
           IonList,
           IonLabel,
           IonSkeletonText,
           IonCard } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import { loadingController } from '@ionic/vue';
  import { Recette } from '../types';
  import MonHeader from '@/components/MonHeader.vue';
  import RecetteItem from '@/components/RecetteItem.vue';
  
  const recette = ref<Recette | null>(null);
  const recettesArray = ref<Recette[]>([]);
  const props = defineProps<{ categorie: string | string[] }>();

    onMounted(async () => {
      const loading = await loadingController.create({ message: 'Attendre SVP...', });
      await loading.present();
      console.log(props.categorie);
      //const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.categorie}`;
      
      const ingredientsStringList = ["strIngredient1", "strIngredient2", "strIngredient3", "strIngredient4", "strIngredient5", "strIngredient6", "strIngredient7", ]
      
      fetch(url)
          .then(response => response.json())
          .then(data => {
            //console.log(data);
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
  
  </script>
  
  <style scoped>

  ion-label {
    display: inline;
  }

  .img-list {
    width: 2vh;
  }
  
  .img-recette {
    width:fit-content;
    /* width: 20%; */
    padding: 10px;
    align-items: center;
    /* justify-content: center; */
  }
  
  .meal-text {
    font-size: 20px;
    font-weight: bold;
  }
  
  .meal-instructions {
    margin: 10px;
    text-align: justify;
  }
  
  #container {
    text-align: center;
    
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    
    color: #8c8c8c;
    
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  