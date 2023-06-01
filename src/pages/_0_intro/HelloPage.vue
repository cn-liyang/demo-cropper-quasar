<script lang="ts" setup>
import Cropper from "cropperjs";

const inputId = "inputId";
const outputId = "outputId";
const srcModel = ref("");

async function asyncGetImageFile(file: File) {
  setRef(srcModel, await asyncAltImageFile2DataUrl(file));
}
window.addEventListener("DOMContentLoaded", function () {
  const cropper = new Cropper(<HTMLImageElement>document.getElementById(inputId), {
    viewMode: 3,
    dragMode: "move",
    autoCropArea: 0.65,
    restore: false,
    modal: false,
    guides: false,
    highlight: false,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
  });
});
</script>

<template>
  <div class="column items-center q-gutter-y-md">
    <InputFileImage @action="asyncGetImageFile" />
    <InputImage :id="inputId" :src="srcModel" />
  </div>
</template>
