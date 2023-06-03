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
    autoCropArea: 1,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
  });
}
</script>

<template>
  <DialogLayout title="图片剪裁">
    <img
      :id="cropperDialogImgId"
      @load="cropper = onLoad(cropperDialogImgId)"
      :src="src"
      alt="Input Image"
      style="max-width: 100%"
    />
    <CropperDialogSticky :cropper="cropper" />
  </DialogLayout>
</template>
