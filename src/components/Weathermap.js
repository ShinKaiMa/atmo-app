import React, { useState, useEffect, useContext, useRef } from "react";
import { WeathermapInfoContext } from "../contexts/WeathermapContext";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import HashLoader from "react-spinners/HashLoader";

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

  // re-initial weathermap
  useEffect(() => {
    setCompleted(false);
    setError(false);
  }, [info]);

  useEffect(() => {
    if (
      selectedModelViewInfo &&
      selectedModelViewInfo.lastPipRenderTime &&
      isCompleted
    ) {
      let fcstHour = info.fcstHour;
      let pipNodeList = document.querySelectorAll(`[data-value='${fcstHour}']`);
      if (pipNodeList) {
        let pipDOM = pipNodeList.item(0);
        if (pipDOM) {
          pipDOM.classList.add("loaded");
        }
      }
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
    } else{
      imgDOM.current.onerror = () => {
        setCompleted(false);
        setError(true);
        dispatchWeathermapInfo({ type: "SET_LZ_STATUS", payload: false });
      };
      imgDOM.current.onload = () => {
        setCompleted(true);
        setError(false);
      };
    }
  };

  return (
    <React.Fragment>
      <img
        key={imgURL}
        ref={imgDOM}
        className={`weathermap left ${idx}`}
        style={{
          display: idx === currentIMGIdx && isCompleted ? "" : "none",
          height: isLandScapeMode ? height / 1.4 : "",
          width: isLandScapeMode ? "" : width / 1.2
        }}
      />
      {/* loader or error handling */}
      <div
        className="left"
        style={{
          display: idx === currentIMGIdx && !isCompleted ? "flex" : "none",
          height: `${rwdImgSize ? rwdImgSize.height : "0"}px`,
          width: `${rwdImgSize ? rwdImgSize.width : "0"}px`
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
              userSelect: `none`
            }}
          >
            <a style={{fontSize:"30px", color:"#cd9178"}} href={null}>
              <i
                style={{ color: "#cd9178", fontSize: "50px"}}
                className="material-icons "
              >
                error_outline
              </i>
              Error
            </a>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Weathermap;
