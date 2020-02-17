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

  return weathermapContext.weathermapsResponse ? (
    <div
      className={`row ${appStatus.isMobile ? "" : "right"}`}
      style={{ width: "100%", paddingTop: appStatus.isMobile ? "45px" : ""}}
      // style={{ width: "550px" }}
    >
      <ModelViewAnimationControlPanel />
      <ModelInfoCard />
    </div>
  ) : (
    <SkeletonTheme
      duration={0.1}
      color="rgba(200,200,200,1)"
      highlightColor="rgba(240,240,240,1)"
    >
      <Skeleton
        width={appStatus.isLandscape ? width / 3 : width / 1.8}
        height={appStatus.isLandscape ? height - 200 : height / 3}
      />
    </SkeletonTheme>
  );
};

export default ModelViewSidePanel;
