import { useEffect, useRef } from "react";
export function usePrevious(val) {
  const ref = useRef();

  useEffect(() => {
    if (ref && ref.current) {
      val = ref.current.ref;
    }
  }, [val]);

  return ref.current;
}
