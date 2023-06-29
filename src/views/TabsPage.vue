<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="closet" href="/tabs/closet">
          <ion-icon aria-hidden="true" :icon="accessibility" />
          <ion-label>Closet</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="outfitGenerato" href="/tabs/outfitGenerator">
          <ion-icon :icon="shirt" />
          <ion-label>Generar outfit</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="clothingUpload" @click="addPhotoToCloset"
          ><!--href="/tabs/clothingUpload"> -->
          <ion-icon aria-hidden="true" :icon="camera" />
          <ion-label>Subir prenda</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="documentList" href="/tabs/documentList">
          <ion-icon aria-hidden="true" :icon="document" />
          <ion-label>Documentos Entrega 4</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { camera, shirt, accessibility, document } from "ionicons/icons";
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { usePhotoGallery } from "@/composables/usePhotoGallery";
import { useRouter } from "vue-router";
const router = useRouter();
const { takePhoto } = usePhotoGallery();
const addPhotoToCloset = async () => {
  try {
    await takePhoto();
    router.push("closet");
  } catch (error) {
    console.error(error);
  }
};
</script>

