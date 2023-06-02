<script lang="ts" setup>
import Cropper from "cropperjs";

const props = defineProps<{
  cropper: Cropper;
}>();

function doRotate() {
  props.cropper.rotate(-90);
}

function doReset() {
  props.cropper.reset();
}

function doZoomI() {
  props.cropper.zoom(0.05);
}

function doZoomO() {
  props.cropper.zoom(-0.05);
}

function doMoveL() {
  props.cropper.move(-10, 0);
}

function doMoveR() {
  props.cropper.move(10, 0);
}

function doMoveU() {
  props.cropper.move(0, -10);
}

function doMoveD() {
  props.cropper.move(0, 10);
}

function doCrop() {
  const htmlCanvasElement = props.cropper.crop().getCroppedCanvas();
  const dataURL = htmlCanvasElement.toDataURL();
  console.log("dataURL", dataURL);
}
</script>

<template>
  <!--  <q-card-actions class="flex justify-between q-gutter-sm">-->
  <q-card-actions class="column q-gutter-y-sm">
    <div class="full-width row no-wrap justify-between">
      <q-btn-group rounded>
        <q-btn push round color="secondary" icon="zoom_in" @click.prevent="doZoomI()" />
        <q-btn push round color="secondary" icon="zoom_out" @click.prevent="doZoomO()" />
      </q-btn-group>
      <q-btn-group rounded>
        <q-btn push round color="info" icon="arrow_back" @click.prevent="doMoveL()" />
        <q-btn push round color="info" icon="arrow_forward" @click.prevent="doMoveR()" />
        <q-btn push round color="info" icon="arrow_upward" @click.prevent="doMoveU()" />
        <q-btn push round color="info" icon="arrow_downward" @click.prevent="doMoveD()" />
      </q-btn-group>
    </div>
    <div class="full-width row no-wrap justify-between">
      <q-btn push color="secondary" icon="settings_backup_restore" round @click.prevent="doReset()" />
      <q-btn push color="secondary" icon="rotate_90_degrees_ccw" round @click.prevent="doRotate()" />
      <q-btn push color="primary" icon="crop" round @click.prevent="doCrop()" />
      <q-btn push color="primary" icon="transform" round @click.prevent="doCrop()" />
    </div>
  </q-card-actions>
</template>
