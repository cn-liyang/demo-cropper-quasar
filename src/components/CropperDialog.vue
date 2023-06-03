<script lang="ts" setup>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

defineProps<{
  imgSrc: string;
}>();
const { ready, stop } = useTimeoutInjectedStateOrDefault();
const cropperDialogImgId = uid();

let cropper: Cropper;

function onLoad(id: string) {
  cropper?.destroy();
  cropper = new Cropper(<HTMLImageElement>document.getElementById(id), {
    viewMode: 1,
    dragMode: "move",
    aspectRatio: 1.58,
    autoCropArea: 1,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    ready: () => stop(),
  });
}
</script>

<template>
  <DialogLayout title="图片剪裁">
    <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <img
        v-show="ready"
        :id="cropperDialogImgId"
        @load="onLoad(cropperDialogImgId)"
        :src="imgSrc"
        alt="Input Image"
        style="max-width: 100%"
      />
    </transition>
    <q-inner-loading :showing="!ready">
      <q-spinner-cube size="2.5em" color="primary" />
    </q-inner-loading>
    <CropperDialogSticky :cropper="cropper" />
  </DialogLayout>
</template>
