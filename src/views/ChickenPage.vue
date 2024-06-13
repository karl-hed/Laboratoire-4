<template>
    <ion-page>
      <MonHeader></MonHeader>
      <ion-content>
        <ion-item class="item">
          <ion-label>Titre album: </ion-label>
          <ion-label>{{ titre }}</ion-label>
        </ion-item>
      </ion-content>
      <ion-footer>
        <ion-toolbar color="secondary">
          <ion-title>Pied de page</ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonPage, IonTitle, IonToolbar, IonFooter, IonLabel, IonItem } from '@ionic/vue';
  import { loadingController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import MonHeader from "../components/MonHeader.vue"

  const titre = ref("");

  onMounted(async () => {
    const loading = await loadingController
        .create({
        message: 'Attendre SVP...',
        });
    await loading.present();
    //let url = 'https://StephaneDGill.github.io/disque.json';
    let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        console.log(data['meals'][0]);
        console.log(`data['meals'][0].idMeal = ${data['meals'][0].idMeal}`);
        //titre.value = data.titre_album;
        loading.dismiss();
        }); 
  });
</script>
<style scoped>
/* Styles... */
.item{
}
</style>