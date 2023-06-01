<script lang="ts" setup>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

const inputId = "inputId";

tryOnMounted(() => {
  const cropper = new Cropper(<HTMLImageElement>document.getElementById(inputId), {
    dragMode: "move",
    aspectRatio: 16 / 9,
    autoCropArea: 0.65,
    restore: false,
    guides: false,
    center: false,
    highlight: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
  });
});
</script>

<template>
  <div style="max-width: 640px">
    <div>
      <img :id="inputId" :src="$getAssetsImage('picture.jpg')" alt="Input Image" style="max-width: 100%" />
    </div>
  </div>
</template>
