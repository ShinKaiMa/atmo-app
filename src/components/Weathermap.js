import React, { useState, useEffect, useContext, useRef } from "react";
import { WeathermapInfoContext } from "../contexts/WeathermapContext";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";

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

      if (weathermapContext.trigerBy[idx] === "right") {
        dispatchWeathermapInfo({
          type: "LOAD_RIGHT_DIR",
          currentIdx: currentIMGIdx
        });
      } else if (weathermapContext.trigerBy[idx] === "left") {
        dispatchWeathermapInfo({
          type: "LOAD_LEFT_DIR",
          currentIdx: currentIMGIdx
        });
      }
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
    } else {
      imgDOM.current.onload = () => {
        setCompleted(true);
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
        // src={shouldStartLoading ? imgURL : imgURL}
      />
      <div
        className="left"
        style={{
          display: idx === currentIMGIdx && !isCompleted ? "flex" : "none",
          height: `${rwdImgSize ? rwdImgSize.height : "0"}px`,
          width: `${rwdImgSize ? rwdImgSize.width : "0"}px`
        }}
      >
        <PropagateLoader
          css={override}
          size={10}
          //size={"150px"} this also works
          color={"#0ACAF5"}
          loading={idx === currentIMGIdx && !isCompleted}
        />
      </div>
    </React.Fragment>
  );
};

export default Weathermap;
