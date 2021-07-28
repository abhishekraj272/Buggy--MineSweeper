import { useState, useEffect } from "react";
import { throttle } from "lodash";

const getDeviceConfig = (width) => {
  if (width < 375) {
    return { row: 14, col: 10 };
  } else if (width >= 375 && width < 499) {
    return { row: 16, col: 12 };
  } else if (width >= 720 && width < 1024) {
    return { row: 16, col: 16 };
  } else if (width >= 1024) {
    return { row: 20, col: 20 };
  }
  return { row: 16, col: 16 };
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return brkPnt;
};
export default useBreakpoint;
