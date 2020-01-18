import React, { useState, useEffect, useContext } from "react";
import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";

const Weathermap = ({info, idx, isLandScapeMode, currentIMGIdx, height, width}) => {
  const imgURL = info.url;
  const [imgDOM, setImgDom] = useState();
  const [isCompleted, setCompleted] = useState(false);
  const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );

  useEffect(() => {
    let imgElements = document.getElementsByClassName(`weathermap ${idx}`);
    let img = imgElements.item(0);
    setImgDom(img);
    console.log("img");
    console.log(img);
  },[weathermapContext.weathermapResponse])

  useEffect(() => {
    if(selectedModelViewInfo && selectedModelViewInfo.lastPipRenderTime && isCompleted){
      console.log(imgDOM);
      let fcstHour = weathermapContext.weathermapsResponse.weathermapsInfo[idx].fcstHour;
      console.log(`fcstHour : ${fcstHour}`)
      let pipNodeList = document.querySelectorAll(`[data-value='${fcstHour}']`);
      console.log("pipNodeList: " + pipNodeList)
      console.log(pipNodeList)
      if(pipNodeList){
        let pipDOM = pipNodeList.item(0);
        if(pipDOM){
          pipDOM.classList.add("loaded");
        }
      }
    }
  },[selectedModelViewInfo.lastPipRenderTime, isCompleted])

  useEffect(() => {
    if(imgDOM){
      console.log('imageDOM')
      console.log(imgDOM)
      onImageLoaded(imgDOM, setCompleted);
    }
  }, [imgDOM])

  const onImageLoaded = (imgDOM, setCompleted) => {
    if(!imgDOM)
      return
  
    if (imgDOM.complete) {
      setCompleted(true);
    } else {
      imgDOM.onload = () => {
        setCompleted(true);
      }
    }
  }

  return (
    <img
      className={`weathermap left ${idx}`}
      style={{
        display: idx === currentIMGIdx ? "" : "none",
        height: isLandScapeMode ? height / 1.4 : "",
        width: isLandScapeMode ? "" : width / 1.2
      }}
      src={imgURL}
    />
  );
};

export default Weathermap;
