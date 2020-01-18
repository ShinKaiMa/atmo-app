import React, { useState, useEffect, useContext } from "react";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { useWeathermapsFromAtmo } from "../hooks/useWeathermapsFromAtmo";
import useWindowSize from "../hooks/useWindowSize";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Weathermap from '../components/Weathermap';

const ModelViewPanel = (props) => {
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const [queryWeathermapsInfoParam, setQueryWeathermapsInfoParam] = useState({
    queryModel: "",
    queryArea: "",
    queryDetailType: "",
    queryStartDateString: ""
  });
  const weathermapsResponse = useWeathermapsFromAtmo(queryWeathermapsInfoParam);
  const [width, height] = useWindowSize();
  const [isLandScapeMode, setIsLandScapeMode] = useState(true); //TODO: move to app context scope
  const [currentIMGIdx, setCurrentIMGIdx] = useState();
  // const [isMobileDevice, setIsMobileDevice] = useState(true);
  useEffect(() => {
    if (width > height) {
      setIsLandScapeMode(true);
    } else {
      setIsLandScapeMode(false);
    }

    // if(width < 1280 || height < 1280){
    //     setIsMobileDevice(true);
    // } else {
    //     setIsMobileDevice(false);
    // }
  }, [width, height]);

  // Weathermap query API effect
  useEffect(() => {
    setQueryWeathermapsInfoParam({
      queryModel: selectedModelViewInfo.model,
      queryArea: selectedModelViewInfo.area,
      queryDetailType: selectedModelViewInfo.detailType,
      queryStartDateString: selectedModelViewInfo.startDate
    });
  }, [selectedModelViewInfo]);

  // update component content effect
  useEffect(() => {
    if (weathermapsResponse && weathermapsResponse.weathermapsInfo) {
      console.log(
        `idx ${weathermapsResponse.weathermapsInfo.findIndex(
          info => info.fcstHour === selectedModelViewInfo.fcstHour
        )}`
      );
      console.log(
        `selectedModelViewInfo fcstHour ${JSON.stringify(
          selectedModelViewInfo.fcstHour
        )}`
      );
      console.log(
        `weathermapsInfo ${JSON.stringify(weathermapsResponse.weathermapsInfo)}`
      );
      let newIdx = weathermapsResponse.weathermapsInfo.findIndex(
        info => info.fcstHour === selectedModelViewInfo.fcstHour
      );
      if (newIdx !== -1) {
        setCurrentIMGIdx(
          weathermapsResponse.weathermapsInfo.findIndex(
            info => info.fcstHour === selectedModelViewInfo.fcstHour
          )
        );
      } else {
        setCurrentIMGIdx(0);
      }
    }
  }, [selectedModelViewInfo, weathermapsResponse]);

  return !weathermapsResponse || !weathermapsResponse.weathermapsInfo? (
    <div className="left">
      <SkeletonTheme
        duration={0.1}
        color="rgba(200,200,200,1)"
        highlightColor="rgba(240,240,240,1)"
      >
        <Skeleton
          width={isLandScapeMode ? width / 3 : width / 1.8}
          height={isLandScapeMode ? height - 200 : height / 3}
        />
      </SkeletonTheme>
    </div>
  ) : weathermapsResponse.error ? (
    <span>Oops! Something wrong!</span>
  ) : weathermapsResponse.weathermapsInfo &&
    weathermapsResponse.weathermapsInfo.length > 0 ? (
    weathermapsResponse.weathermapsInfo.map((info,idx) =>{
      let weathermapProps = {
        info,
        idx,
        isLandScapeMode,
        currentIMGIdx,
        height,
        width,
      }
      return(<Weathermap {...weathermapProps}/>);
    })
  ) : (
    <span>No available weather map</span>
  );
};
export default ModelViewPanel;
