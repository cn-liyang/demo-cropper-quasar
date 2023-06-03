const [useTimeoutProvidingState, useTimeoutInjectedState] = createInjectionState((interval?: number) => {
  const { ready, start, stop } = useTimeout(interval || 1000, { controls: true });

  return { ready, start, stop };
});

export { useTimeoutProvidingState };

export function useTimeoutInjectedStateOrDefault() {
  return (
    useTimeoutInjectedState() ?? {
      ready: ref(false),
      start: () => undefined,
      stop: () => undefined,
    }
  );
}
