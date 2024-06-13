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

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>


      
        <div class="ion-text-center">
          <ion-img :src="img"></ion-img>
          <p>{{ meal }}</p>
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
         IonImg } from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { loadingController } from '@ionic/vue';

const meal = ref("");
const img = ref("");


  onMounted(async () => {
    const loading = await loadingController.create({ message: 'Attendre SVP...', });
    await loading.present();
    //let url = 'https://StephaneDGill.github.io/disque.json';
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        console.log(data['meals'][0]);
        console.log(`data['meals'][0].idMeal = ${data['meals'][0].idMeal}`);
        //meal.value = data.titre_album;
        meal.value = data.meals[0].strMeal;
        img.value = data.meals[0].strMealThumb;
        loading.dismiss();
        }); 
  });

</script>

<style scoped>
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
