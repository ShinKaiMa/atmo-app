import React, { useContext, useEffect, useState } from "react";
import ModelInfoCard from "./ModelInfoCard";
import ModelViewAnimationControlPanel from "./ModelViewAnimationControlPanel";
import WeatherHeatMap from "./WeatherHeatmap"
import WeatherLineChart from "./WeathermapLineChart"
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

      if(newSidePanelSize.width < 300) newSidePanelSize.width = 300;
      setSidePanelSize(newSidePanelSize);
    } else {
      /**
       * width info:
       * side navbar + padding: 220
       */
      newSidePanelSize.width =
        (windowWidth - weathermapContext.wmRwdSize.width - 220 ) * 0.85;
      if(newSidePanelSize.width < 300) newSidePanelSize.width = 300;
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
      <ModelInfoCard {...sidePanelSize} />
      <ModelViewAnimationControlPanel />
      {/* <WeatherHeatMap {...sidePanelSize}/> */}
      <WeatherLineChart {...sidePanelSize}/>
    </div>
  ) : !weathermapContext.weathermapsResponse.availableFcstHour ? (
    <div
      className={`${
        (appStatus.isLandscape)? "right" : ""
      }`}
      style={{
        // width: appStatus.isLandscape ? (appStatus.isMobile? "100%" : "30%") : (appStatus.isMobile? "100%" : "30%"),
        paddingTop: appStatus.isMobile && !appStatus.isLandscape ? "45px" : "",
        paddingRight: "10px",
        // margin: appStatus.isLandscape ? (appStatus.isMobile? "0 auto" : "0 auto") : (appStatus.isMobile? "0 auto" : "0 auto")
      }}
      // style={{ width: "550px" }}
    >
      <SkeletonTheme
        duration={0.1}
        color="rgba(200,200,200,1)"
        highlightColor="rgba(240,240,240,1)"
      >
        <Skeleton
          width={appStatus.isLandscape ? (appStatus.isMobile? windowWidth/1.5 : windowWidth/1.5) : (appStatus.isMobile? windowWidth/1.2 : windowWidth/1.5)}
          height={windowHeight / 7}
        />
        <Skeleton
          width={appStatus.isLandscape ? (appStatus.isMobile? windowWidth/1.5 : windowWidth/1.5) : (appStatus.isMobile? windowWidth/1.2 : windowWidth/1.5)}
          height={windowHeight / 7}
        />
        <Skeleton
          width={appStatus.isLandscape ? (appStatus.isMobile? windowWidth/1.5 : windowWidth/1.5) : (appStatus.isMobile? windowWidth/1.2 : windowWidth/1.5)}
          height={windowHeight / 7}
        />
      </SkeletonTheme>
    </div>
  ) : (
    ""
  );
};

export default ModelViewSidePanel;
