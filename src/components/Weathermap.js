import React, { useState, useEffect, useContext, useRef } from "react";
import { WeathermapInfoContext } from "../contexts/WeathermapContext";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import { AppStatusContext } from '../contexts/AppStatusContext'

const Weathermap = ({
  shouldStartLoading,
  rwdImgSize,
  currentIMGIdx,
  info,
  idx,
  isLandScapeMode,
  height,
  width
}) => {
  let THRESHHOLD_WIDTH = 992;
  const { appStatus } = useContext(AppStatusContext);
  const imgURL = info.url;
  const [isCompleted, setCompleted] = useState(false);
  const [isError, setError] = useState(false);
  const { weathermapContext, dispatchWeathermapInfo } = useContext(
    WeathermapInfoContext
  );
  const { selectedModelViewInfo } = useContext(UserSelectedModelViewContext);
  const imgDOM = useRef(null);
  const override = css(`
    display: block;
    margin: auto auto;
  `);
  // console.log(`imgDOM:`)
  // console.log(imgDOM.current? imgDOM.current.width:"")

  // re-initial weathermap
  useEffect(() => {
    setCompleted(false);
    setError(false);
  }, [info]);

  useEffect(() => {
    //change pip color (success loaded situation)
    if (
      selectedModelViewInfo &&
      selectedModelViewInfo.lastPipRenderTime &&
      isCompleted &&
      !isError
    ) {
      let fcstHour = info.fcstHour;
      let pipNodeList = document.querySelectorAll(`[data-value='${fcstHour}']`);
      if (pipNodeList) {
        let pipDOM = pipNodeList.item(0);
        if (pipDOM) {
          pipDOM.classList.add("loaded");
        }
      }
    }
    //change pip color (failed to load image situation)
    else if(selectedModelViewInfo &&
      selectedModelViewInfo.lastPipRenderTime &&
      isCompleted &&
      isError){
        let fcstHour = info.fcstHour;
        let pipNodeList = document.querySelectorAll(`[data-value='${fcstHour}']`);
        if (pipNodeList) {
          let pipDOM = pipNodeList.item(0);
          if (pipDOM) {
            pipDOM.classList.add("failed");
          }
        }
    }

    //update loaded status (ignore image loaded success or not)
    if (
      selectedModelViewInfo &&
      selectedModelViewInfo.lastPipRenderTime &&
      isCompleted 
    ) {
      dispatchWeathermapInfo({ type: "SET_IS_LOADED", index: idx });
      dispatchWeathermapInfo({
        type: "DO_LAZY_LOADING",
        currentIdx: currentIMGIdx
      });
    }
  }, [selectedModelViewInfo.lastPipRenderTime, isCompleted]);

  useEffect(() => {
    if (shouldStartLoading && imgDOM.current) {
      onImageLoaded();
    }
  }, [shouldStartLoading]);

  // triger lazy loading
  useEffect(() => {
    if (shouldStartLoading && imgDOM.current) {
      imgDOM.current.src = imgURL;
    }
  }, [shouldStartLoading]);

  const onImageLoaded = () => {
    if (!imgDOM.current) return;

    // ensure "src" is mounted and completed
    if (imgDOM.current.complete && imgDOM.current.src) {
      setCompleted(true);
      setError(false);
    } else {
      imgDOM.current.onerror = () => {
        setError(true);
        setCompleted(true); //treat error as loaded, continue loading next image
      };
      imgDOM.current.onload = () => {
        setCompleted(true);
        setError(false);
      };
    }
  };

  return (
    <React.Fragment>
      <div 
      className={ appStatus.isMobile && appStatus.isLandscape ? "left" : ""}
      style={{
        display:
        idx === currentIMGIdx && isCompleted && !isError ? "block" : "none",
          height: (appStatus.isMobile && rwdImgSize) || (!appStatus.isMobile && !appStatus.isLandscape) ? rwdImgSize.height : "0",
          width: rwdImgSize ? rwdImgSize.width : "0",
          // height: width < THRESHHOLD_WIDTH && imgDOM.current? imgDOM.current.height: "0",
          // width: imgDOM.current? imgDOM.current.width: "0"
        }}>
      <img
        key={imgURL}
        ref={imgDOM}
        className={`weathermap left ${idx}`}
        style={{
          display:
            idx === currentIMGIdx && isCompleted && !isError ? "" : "none",
          height: rwdImgSize ? rwdImgSize.height : "0",
          width: rwdImgSize ? rwdImgSize.width : "0",
        }}
      />
      </div>
      {/* loader or error handling */}
      <div
        className={ appStatus.isLandscape ? "left" : "" }
        style={{
          display:
            idx === currentIMGIdx && (!isCompleted || isError)
              ? (appStatus.isMobile?  "flex":"flex")
              : "none",
          height: `${rwdImgSize ? rwdImgSize.height : "0"}px`,
          width: `${rwdImgSize ? rwdImgSize.width : "0"}px`,
          border: isError? "1px #cd9178 dashed" : "1px #0ACAF5 dashed"
        }}
      >
        {!isError ? (
          <PropagateLoader
            css={override}
            size={10}
            //size={"150px"} this also works
            color={"#0ACAF5"}
            loading={idx === currentIMGIdx && !isCompleted}
          />
        ) : (
          <div
            style={{
              margin: `auto auto`,
              userSelect: `none`,
              border:"2px #cd9178 solid",
              borderRadius: "15px",
            }}
          >
            <a style={{ fontSize: "20px", color: "#cd9178", padding: "10px", lineHeight:"60px"}} href={null}>
              <i
                style={{
                  color: "#cd9178",
                  fontSize: "20px",
                  paddingRight: "10px",
                }}
                className="material-icons"
              >
                warning
              </i>
              Not Found
            </a>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Weathermap;
