import React, { useContext, useEffect, useState } from "react";
import ModelInfoCard from "./ModelInfoCard";
import ModelViewAnimationControlPanel from "./ModelViewAnimationControlPanel";
import { AppStatusContext } from "../../../contexts/AppStatusContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { WeathermapInfoContext } from "../../../contexts/WeathermapContext";

const ModelViewSidePanel = props => {
  const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
  const { weathermapContext } = useContext(WeathermapInfoContext);
  const [windowWidth, windowHeight] = appStatus.windowSize;
  const [sidePanelSize, setSidePanelSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    let newSidePanelSize = { height: weathermapContext.wmRwdSize.height };
    // save val: 50

    if (appStatus.isMobile) {
      if (appStatus.isLandscape) {
        newSidePanelSize.width = (windowWidth - weathermapContext.wmRwdSize.width) * 0.85;
      } else {
        newSidePanelSize.width = windowWidth * 0.85;
      }
      setSidePanelSize(newSidePanelSize);
    } else {
      /**
       * width info:
       * slider + pip + padding: 60
       * side navbar + padding: 220
       */
      newSidePanelSize.width =
        (windowWidth - weathermapContext.wmRwdSize.width - 220 - 60) * 0.75;
      setSidePanelSize(newSidePanelSize);
    }
  }, [weathermapContext.wmRwdSize.width, windowWidth]);

  return weathermapContext.weathermapsResponse.availableFcstHour &&
    weathermapContext.weathermapsResponse.availableFcstHour.length > 0 ? (
    <div
      className={`row ${
        (appStatus.isLandscape)? "right" : ""
      }`}
      style={{
        width: appStatus.isMobile ? (appStatus.isLandscape ? sidePanelSize.width : "100%") : (appStatus.isLandscape ? sidePanelSize.width : "100%"),
        paddingTop: (appStatus.isMobile && !appStatus.isLandscape) || (!appStatus.isMobile && !appStatus.isLandscape) ? "50px" : ""
      }}
      // style={{ width: "550px" }}
    >
      <ModelViewAnimationControlPanel />
      <ModelInfoCard />
    </div>
  ) : !weathermapContext.weathermapsResponse.availableFcstHour ? (
    <div
      className={`${
        (appStatus.isLandscape)? "right" : ""
      }`}
      style={{
        width: appStatus.isMobile && !appStatus.isLandscape ? "100%" : "250px",
        paddingTop: appStatus.isMobile && !appStatus.isLandscape ? "45px" : "",
        paddingRight: "10px"
      }}
      // style={{ width: "550px" }}
    >
      <SkeletonTheme
        duration={0.1}
        color="rgba(200,200,200,1)"
        highlightColor="rgba(240,240,240,1)"
      >
        <Skeleton
          width={appStatus.isLandscape ? windowWidth / 3 : windowWidth / 1.8}
          height={windowHeight / 7}
        />
        <Skeleton
          width={appStatus.isLandscape ? windowWidth / 3 : windowWidth / 1.8}
          height={windowHeight / 7}
        />
        <Skeleton
          width={appStatus.isLandscape ? windowWidth / 3 : windowWidth / 1.8}
          height={windowHeight / 7}
        />
      </SkeletonTheme>
    </div>
  ) : (
    ""
  );
};

export default ModelViewSidePanel;
