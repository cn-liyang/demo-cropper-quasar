import { IRect } from "src/types/interfaces/size";

export default createGlobalState(() => {
  const model = useSessionStorage(KEY_RECT_Q_PAGE_COMPONENT, {
    width: 0,
    height: 0,
  });

  function setQPageComponentRect(rect: IRect) {
    setRef(model, rect);
  }

  function getQPageComponentRect() {
    return <IRect>getRef(model);
  }

  function setQPageComponentWidth(width: number) {
    getRef(model).width = width;
  }

  function getQPageComponentWidth() {
    return getRef(model).width;
  }

  function setQPageComponentHeight(height: number) {
    getRef(model).height = height;
  }

  function getQPageComponentHeight() {
    return getRef(model).height;
  }

  return {
    setQPageComponentRect,
    getQPageComponentRect,
    setQPageComponentWidth,
    getQPageComponentWidth,
    setQPageComponentHeight,
    getQPageComponentHeight,
  };
});
