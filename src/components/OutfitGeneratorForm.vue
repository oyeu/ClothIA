<template>
  <div id="container">
    <ion-item>
      <ion-select aria-label="Estilo" placeholder="Elige un estilo">
        <ion-select-option value="1">Casual</ion-select-option>
        <ion-select-option value="2">Elegante</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-fab>
      <ion-fab-button> Generar </ion-fab-button>
    </ion-fab>
  </div>
</template>

<script setup>
import {
  IonCard,
  IonFab,
  IonFabButton,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
defineProps({
  name: String,
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
