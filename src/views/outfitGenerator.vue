<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Generador de Outfit</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

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
