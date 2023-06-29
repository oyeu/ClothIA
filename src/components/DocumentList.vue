<template>
  <ion-list :inset="true">
    <ion-item button detail="false">
      <ion-label>
        <h3>Plan de negocios</h3>
      </ion-label>
      <a :href="getFileUrl('../../Entrega/Plan de negocios.docx')" download
        >Descargar</a
      >
    </ion-item>
    <ion-item button detail="false">
      <ion-label>
        <h3>Plan de mercadeo</h3>
      </ion-label>
      <a :href="getFileUrl('../../Entrega/Plan de mercadeo.docx')" download
        >Descargar</a
      >
    </ion-item>
    <ion-item button detail="false">
      <ion-label>
        <h3>Material publicitario</h3>
      </ion-label>
      <a :href="getFileUrl('../../Entrega/Material publicitario.docx')" download
        >Descargar</a
      >
    </ion-item>
    <ion-item button detail="false">
      <ion-label>
        <h3>Reporte tecnico</h3>
      </ion-label>
      <a :href="getFileUrl('../../Entrega/Reporte tecnico.docx')" download
        >Descargar</a
      >
    </ion-item>
    <ion-item button detail="false">
      <ion-label>
        <h3>Modelo final</h3>
      </ion-label>
      <a :href="getFileUrl('../../Entrega/Modelo Final.ipynb')" download
        >Descargar</a
      >
    </ion-item>
    <ion-item button detail="false">
      <ion-label>
        <h3>Prototipo</h3>
      </ion-label>
      <a :href="getFileUrl('../../Entrega/Prototipo.ipynb')" download
        >Descargar</a
      >
    </ion-item>
  </ion-list>
</template>

<script setup>
import { IonList, IonLabel, IonItem } from "@ionic/vue";
const getFileUrl = (fileName) => {
  // Assuming your files are stored in a folder named "files" within your project
  const fileFolder = "files";
  return `${fileFolder}/${fileName}`;
};
</script>

<style>
</style>