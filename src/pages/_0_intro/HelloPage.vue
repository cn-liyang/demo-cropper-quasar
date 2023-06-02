<script lang="ts" setup>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

const inputId = "inputId";

tryOnMounted(() => {
  new Cropper(<HTMLImageElement>document.getElementById(inputId));
});
</script>

<template>
  <div style="max-width: 640px">
    <div>
      <img :id="inputId" :src="$getAssetsImage('picture.jpg')" alt="Input Image" style="max-width: 100%" />
    </div>
  </div>
</template>
