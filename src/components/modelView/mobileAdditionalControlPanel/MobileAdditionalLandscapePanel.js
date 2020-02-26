import React, { useContext, useEffect, useState } from "react";
import WeatherHeatMap from "../controlPanel/WeatherHeatmap";
import { AppStatusContext } from "../../../contexts/AppStatusContext";
import { WeathermapInfoContext } from "../../../contexts/WeathermapContext";

const MobileAdditionalLandscapePanel = () => {
  const { appStatus } = useContext(AppStatusContext);
  const { weathermapContext } = useContext(WeathermapInfoContext);
  const [windowWidth, windowHeight] = appStatus.windowSize;

  let fakeSidePanelSize = { height: 0, width: 300 };

  return weathermapContext.weathermapsResponse.availableFcstHour &&
    weathermapContext.weathermapsResponse.availableFcstHour.length > 0 &&
    appStatus.isMobile &&
    appStatus.isLandscape ? (
    <React.Fragment>
      <div style={{ clear: "both" }}></div>
      <div
        className={`row`}
        style={{
          width: "100%",
          marginTop: "50px"
        }}
      >
        <WeatherHeatMap {...fakeSidePanelSize} />
      </div>
    </React.Fragment>
  ) : (
    ""
  );
};

export default MobileAdditionalLandscapePanel;
