<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Subir prenda</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="addPhotoToCloset">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { camera, trash, close } from "ionicons/icons";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
  IonFabButton,
  IonFab,
} from "@ionic/vue";
import { usePhotoGallery } from "@/composables/usePhotoGallery";
import { useRouter } from "vue-router";
const router = useRouter();
const { takePhoto } = usePhotoGallery();
const addPhotoToCloset = () => {
  try {
    takePhoto();
    router.push("closet");
  } catch (error) {
    console.error(error);
  }
};
</script>