<script lang="ts" setup>
import "cropperjs/dist/cropper.css";

const cropperDialogImgId = uid();
const { ready, stop } = useTimeoutInjectedStateOrDefault();
const { imgSrcModel, onLoad } = useCropperInjectedStateOrDefault();
</script>

<template>
  <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <img
      v-show="ready"
      :id="cropperDialogImgId"
      @load="onLoad(cropperDialogImgId, stop)"
      :src="imgSrcModel"
      alt="Input Image"
      style="max-width: 100%"
    />
  </transition>
  <q-inner-loading :showing="!ready">
    <q-spinner-cube size="2.5em" color="primary" />
  </q-inner-loading>
</template>
