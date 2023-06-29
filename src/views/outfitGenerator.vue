<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Generador de Outfit</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <outfit-generator-form name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import OutfitGeneratorForm from "@/components/OutfitGeneratorForm.vue";
</script>
