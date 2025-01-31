import React, { useState, useEffect, useContext, useRef } from "react";
import noUiSlider from "nouislider";
import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { AppStatusContext } from '../contexts/AppStatusContext'

const ModelViewSlider = () => {
  let THRESHHOLD_WIDTH = 992;
  const { appStatus } = useContext(AppStatusContext);
  const [brokeHour, setBrokeHour] = useState([0, 1]);
  const initialBrokeHour = [0, 1];
  const basePips = {
    mode: "values",
    density: 100,
    values:[0,1],
    filter: (value, type) => {
    return brokeHour.includes(value) ? 2 : 1;
  }}
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const { weathermapContext } = useContext(WeathermapInfoContext);
  const [isSliderInit, setSliderInit] = useState(false);
  const [pips, setPips] = useState(basePips);
  const [range, setRange] = useState({min: 0,  max: 1});
  // const [disabled, isDisabled] = useState(true);
  const weathermapsResponse = weathermapContext.weathermapsResponse;
  const sliderDom = useRef(null);
  const [width, height] = appStatus.windowSize


  /**
   * use dispatch rather than individual callback
   */
  const handleOnSlide = () =>{
    if(weathermapsResponse && weathermapsResponse.totalFcstHour && weathermapsResponse.availableFcstHour){
      // normal situation
      if(weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.includes(parseInt(sliderDom.current.noUiSlider.get()))){
          dispatchSelectedModelViewInfo({type:"SET_FCST_HOUR", payload:parseInt(sliderDom.current.noUiSlider.get())});
      }
      // handle not available situation
      else {
        //set to available value, skip dispatch fcst hour
        if(weathermapsResponse && weathermapsResponse.availableFcstHour){
          // sliderDom.current.noUiSlider.set(selectedModelViewInfo.fcstHour);
          dispatchSelectedModelViewInfo({type:"ROLLBACK_SLIDER"});
        }
      }
    }
  }

  //update range, pip and broke hour
  useEffect(() => {

    //update broke hour
    if(weathermapsResponse && weathermapsResponse.missingFcstHour){
      setBrokeHour(weathermapsResponse.missingFcstHour);
    }

    //update range
    if(weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.totalFcstHour){
      let newRange = {min: weathermapsResponse.iniFcstHour, max:weathermapsResponse.totalFcstHour};
      weathermapsResponse.availableFcstHour.forEach((hour, idx, array) => {
        if(idx !== array.length){
          newRange = {
            ...newRange,
            [`${ ((hour - weathermapsResponse.iniFcstHour)/(weathermapsResponse.totalFcstHour - weathermapsResponse.iniFcstHour)) *100}%`]:hour
          }
        }
      });
      setRange(newRange);
    }

    //update slider pips
    if(weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.totalFcstHour && weathermapsResponse.fcstHourIncrement){
      let newValues = [];
      for(let hour = weathermapsResponse.iniFcstHour ; hour <= weathermapsResponse.totalFcstHour ; hour+=weathermapsResponse.fcstHourIncrement){
        newValues.push(hour);
      }
      let newPips = {
        ...basePips, //update new filter function
        values:newValues
      };
      setPips(newPips);
    }
  },[weathermapContext.weathermapsResponse]);

  useEffect(() => {
    // TODO: re-init when rotate
      if (!isSliderInit && width != 0) {
        console.log(`width ${width}`)
      // let sliderDom = document.getElementById("slider");
      noUiSlider.create(sliderDom.current, {
        connect: true,
        orientation: "horizontal",
        direction: "ltr",
        range: range,
        pips: {
          mode: "values",
          values: [0, 84],
          density: 100,
          filter: (value, type) => {
            if (type === 0) return 0;
            return initialBrokeHour.includes(value) ? 2 : 1;
          }
        },
        snap: true,
        start: 0,
        step: 6,
      });
      setSliderInit(true);
      dispatchSelectedModelViewInfo({type:"INIT_SLIDER", payload:sliderDom});
    }
    else if (width != 0){
      //re-bind slide event
      sliderDom.current.noUiSlider.off('slide');
      // sliderDom.noUiSlider.on("slide", handleOnSlide);
      sliderDom.current.noUiSlider.on("slide", (target) => handleOnSlide(selectedModelViewInfo));
      sliderDom.current.noUiSlider.updateOptions({
        orientation: width > THRESHHOLD_WIDTH ? "vertical" : "horizontal",
        range,
        pips : {...pips, filter: (value, type) => {
          if (type === 0) return 0;
          return brokeHour.includes(value) ? 2 : 1;
        }}
      })
      dispatchSelectedModelViewInfo({type:"UPDATE_PIP_LAST_RENDER_TIME", payload: new Date()});
      if(weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.length > 0)
      // sliderDom.current.noUiSlider.set(weathermapsResponse.availableFcstHour[0] || weathermapsResponse.iniFcstHour || 0);
      sliderDom.current.noUiSlider.set(selectedModelViewInfo.fcstHour);
    }
  }, [weathermapsResponse, range, pips, brokeHour, width, height]);

  return (
    <div>
      <div
        ref={sliderDom}
        id="slider"
        // disabled
        style={{
          position: (appStatus.isMobile && !appStatus.isLandscape) || (!appStatus.isMobile && !appStatus.isLandscape)? "relative" : "absolute",
          top: (appStatus.isMobile && !appStatus.isLandscape)  || (!appStatus.isMobile && !appStatus.isLandscape)? "" : `${60 + 64 + weathermapContext.wmRwdSize.height + 5}px`,
          // left: appStatus.isMobile && !appStatus.isLandscape? "" : "40%",
          // right: appStatus.isMobile && !appStatus.isLandscape? "" : "55%",
          height: "10px",
          width: appStatus.isMobile? width*0.9 : weathermapContext.wmRwdSize.width,
          margin:"0 auto",
          // marginTop: appStatus.isMobile && !appStatus.isLandscape? "20px" : "0px",
          marginTop: appStatus.isMobile ? (appStatus.isLandscape? "0px" : "20px") : (appStatus.isLandscape? "0px" : "20px"),
          // marginTop: appStatus.isMobile ? appStatus.isLandscape? "10px" : "30px" : "10px",
          
          display: weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.length > 0 ? "" : "none",
        }}
      ></div>
    </div>
  );
};

export default ModelViewSlider;