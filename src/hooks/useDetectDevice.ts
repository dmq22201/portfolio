import { useState, useEffect } from "react";

function useDetectDevice() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 767.98;
  const isTablet = width <= 991.98;
  return { isMobile, isTablet };
}

export default useDetectDevice;
