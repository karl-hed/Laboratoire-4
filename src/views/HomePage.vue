<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" v-if="recette">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>


      
        <div class="ion-text-center">
          <ion-img :src="recette.img"></ion-img>
          <p class="meal-text">{{ recette.nomRecette }}</p>
          <p>Origine: {{ recette.area }}</p>
          <p>Category: {{ recette.categorie }}</p>
          <p class="meal-text">Ingrédients</p>
          <ion-list>
            <ion-item v-for="ingredient in recette.ingredients" :key="ingredient.name">
              <ion-label>{{ ingredient.name }}</ion-label>
            </ion-item>
          </ion-list>
          <p class="meal-text">Instructions</p>
          <p class="meal-instructions">{{ recette.instructions }}</p>
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
         IonLabel } from '@ionic/vue';
import { ref, onMounted, reactive } from 'vue';
import { loadingController } from '@ionic/vue';
import { Recette } from '../types';

const meal = ref("");
const img = ref("");
const area = ref("");
const categorie = ref("");
const ingredients = reactive([{}]);
const instructions = ref("");

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
        const ingredientsArray: { mesure: string, name: string }[] = [];
 
        //meal.value = data.meals[0].strMeal;
        //recetteValue.nomRecette = data.meals[0].strMeal;
        img.value = data.meals[0].strMealThumb;
        area.value = data.meals[0].strArea;
        categorie.value = data.meals[0].strCategory;
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
        instructions.value = data.meals[0].strInstructions;
        console.log(ingredients);
        loading.dismiss();
        recette.value = recetteValue;
        });
  });

</script>

<style scoped>

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
