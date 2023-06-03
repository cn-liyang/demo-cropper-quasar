<script lang="ts" setup>
import Cropper from "cropperjs";

const props = defineProps<{
  cropper: Cropper;
}>();

function doRotateR() {
  props.cropper.rotate(1);
}

function doRotateL() {
  props.cropper.rotate(-1);
}

function doRotateR90() {
  props.cropper.rotate(90);
}

function doRotateL90() {
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
  <q-page-sticky position="bottom" :offset="[0, 18]" class="column">
    <div class="column q-gutter-y-sm">
      <q-btn-group rounded spread>
        <q-btn fab-mini push color="dark" icon="arrow_back" @click.prevent="doMoveL()">
          <q-tooltip>左移</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="arrow_forward" @click.prevent="doMoveR()">
          <q-tooltip>右移</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="arrow_upward" @click.prevent="doMoveU()">
          <q-tooltip>上移</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="arrow_downward" @click.prevent="doMoveD()">
          <q-tooltip>下移</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="zoom_in" @click.prevent="doZoomI()">
          <q-tooltip>放大</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="zoom_out" @click.prevent="doZoomO()">
          <q-tooltip>缩小</q-tooltip>
        </q-btn>
      </q-btn-group>
      <q-btn-group rounded spread>
        <q-btn fab-mini push color="dark" icon="rotate_right" @click.prevent="doRotateR()">
          <q-tooltip>右转1°</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="rotate_left" @click.prevent="doRotateL()">
          <q-tooltip>左转1°</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="rotate_90_degrees_cw" @click.prevent="doRotateR90()">
          <q-tooltip>右转90°</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="rotate_90_degrees_ccw" @click.prevent="doRotateL90()">
          <q-tooltip>左转90°</q-tooltip>
        </q-btn>
        <q-btn
          fab-mini
          push
          color="dark"
          text-color="secondary"
          icon="settings_backup_restore"
          @click.prevent="doReset()"
        >
          <q-tooltip>还原</q-tooltip>
        </q-btn>
        <q-btn fab-mini push color="dark" icon="crop" text-color="primary" @click.prevent="doCrop()">
          <q-tooltip>截图</q-tooltip>
        </q-btn>
      </q-btn-group>
    </div>
  </q-page-sticky>
</template>
