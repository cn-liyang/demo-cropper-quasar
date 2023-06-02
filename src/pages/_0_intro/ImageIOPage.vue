<script lang="ts" setup>
const inputId = "inputId";

const srcModel = ref("");

async function asyncInputImageFile(file: File) {
  const dataUrl = await asyncAltImageFile2DataUrl(file);
  setRef(srcModel, dataUrl);
}
</script>

<template>
  <div class="column items-center q-gutter-y-md">
    <InputFileImage @action="asyncInputImageFile" />
    <InputImage v-if="srcModel" :id="inputId" :src="srcModel" />
  </div>
</template>
