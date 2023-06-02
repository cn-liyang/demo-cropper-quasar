<script lang="ts" setup>
const cropperDialogToggle = ref(false);
const srcModel = ref("");

async function asyncInputImageFile(file: File) {
  const dataUrl = await asyncAltImageFile2DataUrl(file);
  setRef(srcModel, dataUrl);
  setRef(cropperDialogToggle, true);
}
</script>

<template>
  <div class="column items-center q-gutter-y-md">
    <InputFileImage @action="asyncInputImageFile" />
  </div>

  <CropperDialog v-model="cropperDialogToggle" :src="srcModel" />
</template>
