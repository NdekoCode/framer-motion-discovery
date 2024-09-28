import { RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

type UseMeasureResult<T extends (HTMLElement | null)> = [RefObject<T>, Size];

function useMeasure<T extends HTMLElement>(): UseMeasureResult<T> {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    if (!Array.isArray(entries) || !entries.length) {
      return;
    }

    const entry = entries[0];
    setSize({
      width: entry.contentRect.width,
      height: entry.contentRect.height
    });
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, handleResize]);

  return [ref, size];
}

export default useMeasure;