export default function () {
  const { width, height } = useWindowSize();
  const { setQDialogComponentWidth, setQDialogComponentHeight } = useRectQDialogComponentGlobalSessionStorage();

  tryOnMounted(async () => {
    await Promise.all([
      invoke(async () => {
        await until(width).toBeTruthy();
        setQDialogComponentWidth(getRef(width) - 24 * 2);
      }),
      invoke(async () => {
        await until(height).toBeTruthy();
        setQDialogComponentHeight(getRef(height) - 24 * 2);
      }),
    ]);
  });
}
