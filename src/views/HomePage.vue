<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Recette du moment</ion-title>
      </ion-toolbar>
    </ion-header>
    

    <ion-content :fullscreen="true" v-if="recette">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header> -->

        <div class="ion-text-center">
          <ion-img :src="recette.strMealThumb" class="img-recette"></ion-img>
          <p class="meal-text">{{ recette.strMeal }}</p>
          <p>Origine: {{ recette.strArea }}</p>
          <p>Category: {{ recette.strCategory }}</p>
          <p class="meal-text">Ingrédients</p>
          <ion-list>
            <ion-item v-for="ingredient in recette.strIngredients" :key="ingredient.name">
              <ion-label>{{ ingredient.strMeasure }} {{ ingredient.name }}</ion-label>
            </ion-item>
          </ion-list>
          <p class="meal-text">Instructions</p>
          <p class="meal-instructions">{{ recette.strInstructions }}</p>
          <p>Page d'accueil</p>
          <ion-button expand="block" color="medium" href="/pageCinq">
            Page Cinq</ion-button>
        </div>
        <div class="ion-text-center">
          <p>Detail</p>
          <ion-button expand="block" color="medium" href="/detail/123">
            Detail</ion-button>
        </div>

    </ion-content>
    <ion-skeleton-text v-else class="skeleton" animated></ion-skeleton-text>    
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
         IonSkeletonText } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { loadingController } from '@ionic/vue';
import { Recette } from '../types';
import MonHeader from '@/components/MonHeader.vue';

const recette = ref<Recette | null>(null);

  onMounted(async () => {
    const loading = await loadingController.create({ message: 'Attendre SVP...', });
    await loading.present();
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          console.log(data['meals'][0]);
          console.log(`data['meals'][0].idMeal = ${data['meals'][0].idMeal}`);
          const ingredientsArray: { strMeasure: string, name: string }[] = [];
          
          for (let i = 1; i <= 20; ++i) {
            if (data.meals[0]['strIngredient' + i] !== "" && data.meals[0]['strIngredient' + i] !== null) {
              ingredientsArray.push({ strMeasure: data.meals[0]['strMeasure' + i], name: `${data.meals[0]['strIngredient' + i]}` })
            }
          }
          const recetteValue: Recette = {
            strMeal: data.meals[0].strMeal,
            strMealThumb: data.meals[0].strMealThumb,
            strArea: data.meals[0].strArea,
            strCategory: data.meals[0].strCategory,
            strIngredients: ingredientsArray,
            strInstructions: data.meals[0].strInstructions,
            idMeal: data.meals[0].idMeal
          };
          console.log(recetteValue.strIngredients);
          loading.dismiss();
          recette.value = recetteValue;
        });
  });

</script>

<style scoped>

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
