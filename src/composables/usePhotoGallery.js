import { ref, onMounted, watch } from 'vue';
import store from '../store/index';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export const usePhotoGallery = () => {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = Date.now() + '.jpeg';
    const savedFileImage = {
      filepath: fileName,
      webviewPath: photo.webPath
    };
    store.commit('users/addPhoto', savedFileImage)
  };

  return {
    takePhoto
  };
};

