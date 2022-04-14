import { useCallback, useEffect, useRef } from "react";

export function useIsMounted() {
  const isMountedRef = useRef(true);
  const isMounted = useCallback(() => isMountedRef.current, []);

  useEffect(() => {
    return () => void (isMountedRef.current = false);
  }, []);

  return isMounted;
}
export function useRefresh() {
  const [, setVersion] = React.useState(0);
  const isMounted = useIsMounted();
  return () => {
    if (isMounted()) {
      setVersion((x) => x + 1);
    }
  };
}
