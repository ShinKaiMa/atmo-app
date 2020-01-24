import React, { useState, useEffect, useContext, useRef } from "react";
// import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

const Weathermap = ({shouldStartLoading, rwdImgSize, info, idx, isLandScapeMode, currentIMGIdx, height, width}) => {
  const imgURL = info.url;
  // const [imgDOM, setImgDom] = useState();
  const [ isCompleted, setCompleted ] = useState(false);
  // const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const imgDOM = useRef(null);
  const override = css(`
    display: block;
    margin: auto auto;
  `);

  useEffect(() => {
    if(selectedModelViewInfo && selectedModelViewInfo.lastPipRenderTime && isCompleted){
      let fcstHour = info.fcstHour;
      let pipNodeList = document.querySelectorAll(`[data-value='${fcstHour}']`);
      if(pipNodeList){
        let pipDOM = pipNodeList.item(0);
        if(pipDOM){
          pipDOM.classList.add("loaded");
        }
      }
    }
  },[selectedModelViewInfo.lastPipRenderTime, isCompleted])

  useEffect(() => {
    if(imgDOM.current){
      return () => onImageLoaded();
    }
  }, [imgDOM.current])

  // triger lazy loading
  useEffect(() => {
    if(shouldStartLoading && imgDOM.current){
      imgDOM.current.src = imgURL
    }
  }, [shouldStartLoading])


  const onImageLoaded = () => {
    if(!imgDOM.current)
      return
  
    // ensure "src" is mounted and completed
    if (imgDOM.current.complete && imgDOM.current.src) {
      setCompleted(true);
    } else {
      imgDOM.current.onload = () => {
        setCompleted(true);
      }
    }
  }

  return (
    <React.Fragment>
    <img
      key={imgURL}
      ref={imgDOM}
      className={`weathermap left ${idx}`}
      style={{
        display: (idx === currentIMGIdx) && isCompleted? "" : "none",
        height: isLandScapeMode ? height / 1.4 : "",
        width: isLandScapeMode ? "" : width / 1.2
      }}
      // src={imgURL}
    />
    <div 
      className="left"
      style={{
      display: (idx === currentIMGIdx) && !isCompleted? "flex" : "none",
      // height: `515.713px`,
      // width: "564.050px"
      height: `${rwdImgSize ? rwdImgSize.height : '0'}px`,
      width: `${rwdImgSize ? rwdImgSize.width : '0'}px`
    }}>
    <PropagateLoader
          css={override}
          size={10}
          //size={"150px"} this also works
          color={"#0ACAF5"}
          loading={(idx === currentIMGIdx) && !isCompleted}
    />
    </div>
    </React.Fragment>
  );
};

export default Weathermap;
