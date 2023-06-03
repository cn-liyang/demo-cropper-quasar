import { Fn } from "@vueuse/core";
import Cropper from "cropperjs";

const [useCropperProvidingState, usCropperInjectedState] = createInjectionState(() => {
  const imgSrcModel = ref("");
  let cropper: Cropper;

  function onLoad(id: string, fn: Fn) {
    cropper = new Cropper(<HTMLImageElement>document.getElementById(id), {
      viewMode: 1,
      dragMode: "move",
      aspectRatio: 1.58,
      autoCropArea: 1,
      cropBoxMovable: false,
      cropBoxResizable: false,
      toggleDragModeOnDblclick: false,
      ready: fn,
    });
  }

  function doRotateR() {
    cropper.rotate(1);
  }

  function doRotateL() {
    cropper.rotate(-1);
  }

  function doRotateR90() {
    cropper.rotate(90);
  }

  function doRotateL90() {
    cropper.rotate(-90);
  }

  function doZoomI() {
    cropper.zoom(0.05);
  }

  function doZoomO() {
    cropper.zoom(-0.05);
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

  function doReset() {
    cropper.reset();
  }

  function doCrop() {
    const htmlCanvasElement = cropper.crop().getCroppedCanvas();
    const dataURL = htmlCanvasElement.toDataURL();
    console.log("dataURL", dataURL);
  }

  return {
    imgSrcModel,
    onLoad,
    doZoomI,
    doZoomO,
    doMoveL,
    doMoveR,
    doMoveU,
    doMoveD,
    doRotateR,
    doRotateL,
    doRotateR90,
    doRotateL90,
    doReset,
    doCrop,
  };
});

export { useCropperProvidingState };

export function useCropperInjectedStateOrDefault() {
  return (
    usCropperInjectedState() ?? {
      imgSrcModel: ref(""),
      onLoad: () => undefined,
      doZoomI: () => undefined,
      doZoomO: () => undefined,
      doMoveL: () => undefined,
      doMoveR: () => undefined,
      doMoveU: () => undefined,
      doMoveD: () => undefined,
      doRotateR: () => undefined,
      doRotateL: () => undefined,
      doRotateR90: () => undefined,
      doRotateL90: () => undefined,
      doReset: () => undefined,
      doCrop: () => undefined,
    }
  );
}
