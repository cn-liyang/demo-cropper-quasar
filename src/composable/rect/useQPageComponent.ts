export default function () {
  const qPageComponent = ref();
  const { width, height } = useElementSize(qPageComponent);
  const { setQPageComponentWidth, setQPageComponentHeight } = useRectQPageComponentGlobalSessionStorage();

  tryOnMounted(async () => {
    await Promise.all([
      invoke(async () => {
        await until(width).changed();
        setQPageComponentWidth(getRef(width));
      }),
      invoke(async () => {
        await until(height).changed();
        setQPageComponentHeight(getRef(height));
      }),
    ]);
  });

  return { qPageComponent };
}
