import React, { useContext } from "react";
import ModelInfoCard from "./ModelInfoCard";
import ModelViewAnimationControlPanel from "./ModelViewAnimationControlPanel";
import { AppStatusContext } from "../../../contexts/AppStatusContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { WeathermapInfoContext } from "../../../contexts/WeathermapContext";

const ModelViewSidePanel = props => {
  const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
  const { weathermapContext } = useContext(WeathermapInfoContext);
  const [width, height] = appStatus.windowSize;

  return weathermapContext.weathermapsResponse.availableFcstHour && weathermapContext.weathermapsResponse.availableFcstHour.length > 0 ? (
    <div
      className={`row ${appStatus.isMobile && !appStatus.isLandscape ? "" : "right"}`}
      style={{ width: appStatus.isMobile && !appStatus.isLandscape? "100%" : "550px", paddingTop: appStatus.isMobile ? "45px" : ""}}
      // style={{ width: "550px" }}
    >
      <ModelViewAnimationControlPanel />
      <ModelInfoCard />
    </div>
  ) : !weathermapContext.weathermapsResponse.availableFcstHour ?  (
    <div
      className={`row ${appStatus.isMobile ? "" : "right"}`}
      style={{ width: appStatus.isMobile && !appStatus.isLandscape? "100%" : "550px", paddingTop: appStatus.isMobile ? "45px" : ""}}
      // style={{ width: "550px" }}
    >
      <SkeletonTheme
        duration={0.1}
        color="rgba(200,200,200,1)"
        highlightColor="rgba(240,240,240,1)"
      >
        <Skeleton
          width={appStatus.isLandscape ? width / 3 : width / 1.8}
          height= {height / 7}
        />
        <Skeleton
          width={appStatus.isLandscape ? width / 3 : width / 1.8}
          height= {height / 7}
        />
        <Skeleton
          width={appStatus.isLandscape ? width / 3 : width / 1.8}
          height= {height / 7}
        />
      </SkeletonTheme>
    </div>
  ) : "";
};

export default ModelViewSidePanel;
