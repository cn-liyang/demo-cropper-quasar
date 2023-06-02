<script lang="ts" setup>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

defineProps<{
  src: string;
}>();

const cropperDialogImgId = uid();

let cropper: Cropper;

function onLoad(id: string) {
  return new Cropper(<HTMLImageElement>document.getElementById(id), {
    viewMode: 1,
    dragMode: "move",
    aspectRatio: 1.58,
    autoCropArea: 0.9,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
  });
}
</script>

<template>
  <q-dialog full-width full-height persistent>
    <q-card flat>
      <q-bar class="bg-primary text-white">
        <span class="text-body2">图片剪裁：</span>
        <q-space />
        <q-btn v-close-popup dense flat icon="close" />
      </q-bar>
      <q-card-section horizontal style="width: 100%">
        <img
          :id="cropperDialogImgId"
          @load="cropper = onLoad(cropperDialogImgId)"
          :src="src"
          alt="Input Image"
          style="width: 100%"
        />
      </q-card-section>
      <CropperDialogActions :cropper="cropper" />
    </q-card>
  </q-dialog>
</template>
