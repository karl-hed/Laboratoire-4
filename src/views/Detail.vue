<template>
    <ion-page>
      <MonHeader></MonHeader>
      <ion-content>
        <ion-item class="item">
          <ion-label>id: </ion-label>
          <ion-label>{{ $route.params.id }}</ion-label>
        </ion-item>
      </ion-content>
      <MonFooter></MonFooter>
    </ion-page>
</template>

<script setup lang="ts">
  import { IonContent, IonPage, IonTitle, IonToolbar, IonFooter, IonLabel, IonItem } from '@ionic/vue';
  import { loadingController } from '@ionic/vue';
  import { ref, onMounted } from 'vue';
  import MonHeader from "../components/MonHeader.vue";
  import MonFooter from "../components/MonFooter.vue";

</script>
<style scoped>
/* Styles... */
.item{
}
</style>