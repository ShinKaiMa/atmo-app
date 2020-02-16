import { useLayoutEffect, useState, useContext } from "react";
import { AppStatusContext } from "../contexts/AppStatusContext";

const useWindowSize = () => {
  const MOBILE_THRESHHOLD_WIDTH = 992;
  const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
  useLayoutEffect(() => {
    let updateSize = () => {
      dispatchAppStatus({
        type: "SET_WINDOW_SIZE",
        windowSize: [window.innerWidth, window.innerHeight],
        isLandscape: window.innerWidth > window.innerHeight ? true:false,
        isMobile: window.innerWidth < MOBILE_THRESHHOLD_WIDTH,
      });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return appStatus.windowSize;
};

export default useWindowSize;
