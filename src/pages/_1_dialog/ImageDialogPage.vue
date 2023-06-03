<script lang="ts" setup>
const { start } = useTimeoutProvidingState(5000);
const { imgSrcModel } = useCropperProvidingState();
const cropperDialogToggle = ref(false);

async function asyncInputImageFile(file: File) {
  start();
  const dataUrl = await asyncAltImageFile2DataUrl(file);
  setRef(imgSrcModel, dataUrl);
  setRef(cropperDialogToggle, true);
}
</script>

<template>
  <div class="column items-center q-gutter-y-md">
    <InputFileImage @action="asyncInputImageFile" />
  </div>

  <CropperDialog v-model="cropperDialogToggle" />
</template>
