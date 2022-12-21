import { MutableRefObject, useEffect, useMemo, useState } from "react";

export const useIsElementVisible = (
  lastElementRef: MutableRefObject<null>
) => {
  const [hasReachedEndOfPage, setHasReachedEndOfPage] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setHasReachedEndOfPage(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (lastElementRef?.current && observer?.observe) {
      observer.observe(lastElementRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [observer, lastElementRef]);

  return hasReachedEndOfPage;
};
