<template>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home"></ion-back-button>
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.name ? $route.name : "no name" }}</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonButtons,
         IonMenuButton,
         IonBackButton } from '@ionic/vue';
</script>

<style scoped></style>