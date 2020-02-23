import React, { useState, useEffect, useContext } from "react";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { useWeathermapsFromAtmo } from "../hooks/useWeathermapsFromAtmo";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Weathermap from "../components/Weathermap";
import { useLazyLoadingOrderForWeathermap } from "../hooks/useLazyLoadingOrderForWeathermap";
import { AppStatusContext } from '../contexts/AppStatusContext'
import { WeathermapInfoContext } from '../contexts/WeathermapContext'

const ModelViewPanel = props => {
  const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
  const { selectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const [queryWeathermapsInfoParam, setQueryWeathermapsInfoParam] = useState({
    queryModel: "",
    queryArea: "",
    queryDetailType: "",
    queryStartDateString: ""
  });
  const weathermapsResponse = useWeathermapsFromAtmo(queryWeathermapsInfoParam);
  const [isLandScapeMode, setIsLandScapeMode] = useState(true); //TODO: move to app context scope
  const [currentIMGIdx, setCurrentIMGIdx] = useState();
  const { shouldStartLoading } = useLazyLoadingOrderForWeathermap(
    weathermapsResponse,
    currentIMGIdx
  );
  const [width, height] = appStatus.windowSize
  const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const rwdImgSize = weathermapContext.wmRwdSize;
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

  useEffect(() => {
    if (
      weathermapsResponse &&
      weathermapsResponse.imageDimensions &&
      weathermapsResponse.imageDimensions.width &&
      weathermapsResponse.imageDimensions.height
    ) {
      // let imgHeight = isLandScapeMode ? height / 1.4 : undefined
      let imgHeight = appStatus.isLandscape ? (appStatus.isMobile ? height / 1.4 : undefined) : undefined
      let imgWidth = appStatus.isLandscape ? undefined : (appStatus.isMobile ? width / 1.1 : (width - 220) / 1.2)

      // handle landscape mode && not mobile situation (PC, iPad, iPad pro)
      if (!imgHeight && !imgWidth) {
        let aspectRatio = weathermapsResponse.imageDimensions.width / weathermapsResponse.imageDimensions.height
        // 4:3 tablet
        if (Math.abs(width / height) < 1.34) {
          //east Asia weathermap (land scape image) situation
          if (aspectRatio > 1.15) {
            imgHeight = (height - 64 - 40) * 0.75;
          } else {
            //side nav: 220, side panel:300
            imgWidth = (width - 220 - 300 - 70);
          }
        }
        // desktop
        else {
          //east Asia weathermap (land scape image) situation
          if (aspectRatio > 1.15) {
            imgHeight = (height - 64 - 40) * 0.75;
          } else {
            // imgWidth = (width - 220) * 0.6;
            imgHeight = (height - 64 - 40) * 0.75;
          }
        }
      }

      if (!imgHeight) {
        let adjustRatio = imgWidth / weathermapsResponse.imageDimensions.width;
        imgHeight = weathermapsResponse.imageDimensions.height * adjustRatio;
      }
      if (!imgWidth) {
        let adjustRatio = imgHeight / weathermapsResponse.imageDimensions.height;
        imgWidth = weathermapsResponse.imageDimensions.width * adjustRatio;
      }
      dispatchWeathermapInfo({ type: "SET_WEATHERMAP_RWD_SIZE", payload: { height: imgHeight, width: imgWidth } })
    }
  }, [weathermapsResponse, width, height, isLandScapeMode]);

  return (!weathermapsResponse || !weathermapsResponse.weathermapsInfo) ? (
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
    <span>Oops! Something went wrong!</span>
  ) : weathermapsResponse.weathermapsInfo &&
    weathermapsResponse.weathermapsInfo.length > 0 ? (
          weathermapsResponse.weathermapsInfo.map((info, idx) => {
            let weathermapProps = {
              shouldStartLoading:
                shouldStartLoading.length > 0 ? shouldStartLoading[idx] : false,
              rwdImgSize,
              currentIMGIdx,
              info,
              idx,
              isLandScapeMode,
              height,
              width
            };
            return <Weathermap {...weathermapProps} />;
          })
        ) : (
          <span>No available weather map</span>
        );
};
export default ModelViewPanel;
