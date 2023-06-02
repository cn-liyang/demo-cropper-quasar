<script lang="ts" setup>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

defineProps<{
  src: string;
}>();

const cropperDialogImgId = uid();

let cropper: Cropper;

function onLoad() {
  cropper = new Cropper(<HTMLImageElement>document.getElementById(cropperDialogImgId), {
    dragMode: "move",
    aspectRatio: 1.58,
    autoCropArea: 0.65,
    cropBoxMovable: false,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
  });
}

function doRotate() {
  cropper.rotate(90);
}

function doZoomI() {
  cropper.zoom(0.1);
}

function doZoomO() {
  cropper.zoom(-0.1);
}

function doMoveL() {
  cropper.move(-10, 0);
}

function doMoveR() {
  cropper.move(10, 0);
}

function doMoveU() {
  cropper.move(0, -10);
}

function doMoveD() {
  cropper.move(0, 10);
}

function doCrop() {
  const htmlCanvasElement = cropper.crop().getCroppedCanvas();
  const dataURL = htmlCanvasElement.toDataURL();
  console.log("dataURL", dataURL);
}
</script>

<template>
  <q-dialog full-width full-height persistent>
    <q-card flat>
      <q-bar class="bg-primary text-white">
        <span class="text-body2">图片剪裁：</span>
        <q-space />
        <q-btn v-close-popup dense flat icon="close" />
      </q-bar>
      <!--      <div style="max-width: 100%; max-height: 100%">-->
      <div>
        <img :id="cropperDialogImgId" @load="onLoad()" :src="src" alt="Input Image" style="max-width: 100%" />
      </div>
      <!--      </div>-->
      <q-card-actions align="between">
        <q-btn-group rounded>
          <q-btn push round color="info" icon="zoom_in" @click.prevent="doZoomI()" />
          <q-btn push round color="info" icon="zoom_out" @click.prevent="doZoomO()" />
        </q-btn-group>
        <q-btn-group rounded>
          <q-btn push round color="secondary" icon="keyboard_arrow_left" @click.prevent="doMoveL()" />
          <q-btn push round color="secondary" icon="keyboard_arrow_right" @click.prevent="doMoveR()" />
          <q-btn push round color="secondary" icon="keyboard_arrow_up" @click.prevent="doMoveU()" />
          <q-btn push round color="secondary" icon="keyboard_arrow_down" @click.prevent="doMoveD()" />
        </q-btn-group>
        <q-btn push color="positive" icon="rotate_right" round @click.prevent="doRotate()" />
        <q-btn push color="primary" icon="crop" round @click.prevent="doCrop()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
