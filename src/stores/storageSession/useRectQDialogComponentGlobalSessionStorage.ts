import { IRect } from "src/types/interfaces/size";

export default createGlobalState(() => {
  const model = useSessionStorage(KEY_RECT_Q_DIALOG_COMPONENT, {
    width: 0,
    height: 0,
  });

  function setQDialogComponentRect(rect: IRect) {
    setRef(model, rect);
  }

  function getQDialogComponentRect() {
    return <IRect>getRef(model);
  }

  function setQDialogComponentWidth(width: number) {
    getRef(model).width = width;
  }

  function getQDialogComponentWidth() {
    return getRef(model).width;
  }

  function setQDialogComponentHeight(height: number) {
    getRef(model).height = height;
  }

  function getQDialogComponentHeight() {
    return getRef(model).height;
  }

  return {
    setQDialogComponentRect,
    getQDialogComponentRect,
    setQDialogComponentWidth,
    getQDialogComponentWidth,
    setQDialogComponentHeight,
    getQDialogComponentHeight,
  };
});
