<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Documentos Entrega 4</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <document-list />
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
import DocumentList from "@/components/DocumentList.vue";
</script>
