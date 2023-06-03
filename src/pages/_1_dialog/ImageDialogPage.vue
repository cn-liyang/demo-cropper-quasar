<script lang="ts" setup>
const { ready, start } = useTimeoutProvidingState(2000);
const cropperDialogToggle = ref(false);
const srcModel = ref("");

async function asyncInputImageFile(file: File) {
  start();
  const dataUrl = await asyncAltImageFile2DataUrl(file);
  setRef(srcModel, dataUrl);
  setRef(cropperDialogToggle, true);
}
</script>

<template>
  <div class="column items-center q-gutter-y-md">
    <InputFileImage @action="asyncInputImageFile" />
  </div>

  <CropperDialog v-model="cropperDialogToggle" :imgSrc="srcModel" />
</template>
