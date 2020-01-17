import React, { useState, useEffect, useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import noUiSlider from "nouislider";
import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";

const ModelViewSlider = () => {
  const [brokeHour, setBrokeHour] = useState([0, 1]);
  const initialBrokeHour = [0, 1];
  const basePips = {
    mode: "values",
    density: 100,
    values:[0,1],
    filter: (value, type) => {
    if (type === 0) return 0;
    console.log(`brokeHour in filter(): ${brokeHour}`);
    console.log(brokeHour.includes(value));
    return brokeHour.includes(value) ? 2 : 1;
  }}
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const [sliderDom, setSliderDom] = useState();
  const [width, height] = useWindowSize();
  const [pips, setPips] = useState(basePips);
  const [range, setRange] = useState({min: 0,  max: 1});
  const [disabled, isDisabled] = useState(true);
  const weathermapsResponse = weathermapContext.weathermapsResponse;
  



  //update range, pip and broke hour
  useEffect(() => {

    //update broke hour
    if(weathermapsResponse && weathermapsResponse.missingFcstHour){
      console.log(`weathermapsResponse.missingFcstHour ${JSON.stringify(weathermapsResponse.missingFcstHour)}`)
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
        console.log(`newRange ${JSON.stringify(newRange)}`)
        setRange(newRange);
      });
    }

    //update slider pips
    if(weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.totalFcstHour && weathermapsResponse.fcstHourIncrement){
      let newValues = [];
      for(let hour = weathermapsResponse.iniFcstHour ; hour <= weathermapsResponse.totalFcstHour ; hour+=weathermapsResponse.fcstHourIncrement){
        newValues.push(hour);
      }
      console.log(`pips newValues ${newValues}`)
      let newPips = {
        ...basePips, //update new filter function
        values:newValues
      };
      console.log(`newPips ${JSON.stringify(newPips)}`)
      setPips(newPips);
    }


  },[weathermapContext.weathermapsResponse]);


  const handleOnSlide = () =>{
    console.log(`slider value: ${sliderDom.noUiSlider.get()}`)
    if(weathermapsResponse && weathermapsResponse.totalFcstHour && weathermapsResponse.availableFcstHour){
      // normal situation
      if(weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.includes(parseInt(sliderDom.noUiSlider.get()))){
        dispatchSelectedModelViewInfo({type:"SET_FCST_HOUR", payload:parseInt(sliderDom.noUiSlider.get())});
      }
      // handle not available situation
      else {
        //set to available value, skip dispatch fcst hour
        if(weathermapsResponse && weathermapsResponse.availableFcstHour){
          sliderDom.noUiSlider.set(selectedModelViewInfo.fcstHour);
        }
      }
    }
  }

  useEffect(() => {
      console.log("initializing")
      if (!sliderDom) {
      let sliderDomTMP = document.getElementById("slider");
      noUiSlider.create(sliderDomTMP, {
        connect: true,
        orientation: "vertical",
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
        // tooltips: [
        //   {
        //     to: value => {
        //       let result = Math.round(parseInt(value)).toString();
        //       return result + " Hour";
        //     }
        //   }
        // ]
      });
      setSliderDom(sliderDomTMP);
    }
    else{
      //re-bind slide event
      console.log("rebinding")
      sliderDom.noUiSlider.off('slide');
      sliderDom.noUiSlider.on("slide", handleOnSlide);
      sliderDom.noUiSlider.updateOptions({
        range,
        pips : {...pips, filter: (value, type) => {
          if (type === 0) return 0;
          console.log(`brokeHour in filter(): ${brokeHour}`);
          console.log(brokeHour.includes(value));
          return brokeHour.includes(value) ? 2 : 1;
        }}
      })
      dispatchSelectedModelViewInfo({type:"UPDATE_PIP_LAST_RENDER_TIME", payload: new Date()});
      sliderDom.noUiSlider.set(weathermapsResponse.availableFcstHour[0] || weathermapsResponse.iniFcstHour || 0);
      // setTimeout(() => {
      //   sliderDom.noUiSlider.updateOptions({
      //     orientation: 'vertical',
      //     direction: 'rtl',
      //     range: {
      //       min: 0,
      //       "50%": 6,
      //       max: 12
      //     },
      //     pips: {
      //       mode: "values",
      //       values: [0,3, 6, 12],
      //       density: 100,
      //       filter: (value, type) => {
      //         if (type === 0) return 0;
      //         return brokeHour.includes(value) ? 2 : 1;
      //       }
      //     },
      //   });
      // }, 2000);
    }
  }, [weathermapsResponse, range, pips, brokeHour]);





  return (
    <div>
      {/* {console.log(`final ${(width > height ? width : height) / 2.5}`)} */}
      <div
        id="slider"
        // style={{ height: "6px", marginTop: "10px", marginLeft: "32px", width:"300px" }}
        // style={{
        //   // height: "6px",
        //   marginTop: "10px",
        //   marginLeft: "16px",
        //   marginBottom: "50px",
        //   // width: (width > height ? width : height) / 2.5
        //   width: width / 2
        // }}
        className="left"
        // disabled
        style={{
          marginLeft: selectedModelViewInfo && selectedModelViewInfo.area === 'TW' ? "-50px" : "15px",
          height: height / 1.5,
          marginRight: width < 1500 ? "45px" : "0px",
          marginTop: "0",
          display: weathermapsResponse && weathermapsResponse.availableFcstHour && weathermapsResponse.availableFcstHour.length > 0 ? "" : "none",
        }}
      ></div>
    </div>
  );
};

export default ModelViewSlider;
