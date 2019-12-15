import React, { useState, useEffect, useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import noUiSlider from "nouislider";
import { WeathermapInfoContext } from '../contexts/WeathermapContext'
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";

const ModelViewSlider = props => {
  const defaultMaxFcstHour = 84;
  const initialBrokeHour = [0, 84];
  const basePips = {
    mode: "values",
    density: 100,
    values:[0,84],
    filter: (value, type) => {
    if (type === 0) return 0;
    console.log(brokeHour.includes(value));
    return brokeHour.includes(value) ? 2 : 1;
  }}
  const baseRange = {min:0, max: defaultMaxFcstHour};
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const { weathermapInfo, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const [sliderDom, setSliderDom] = useState();
  const [width, height] = useWindowSize();
  const [pips, setPips] = useState(basePips);
  const [range, setRange] = useState({min: 0,  max: defaultMaxFcstHour});
  const [brokeHour, setBrokeHour] = useState([0, 84]);
  const [disabled, isDisabled] = useState(true);
  



  //update range, pip and broke hour
  useEffect(() => {

    //update broke hour
    if(weathermapInfo && weathermapInfo.missingFcstHour){
      console.log(`weathermapInfo.missingFcstHour ${JSON.stringify(weathermapInfo.missingFcstHour)}`)
      setBrokeHour(weathermapInfo.missingFcstHour);
    }

    //update range
    if(weathermapInfo && weathermapInfo.availableFcstHour && weathermapInfo.totalFcstHour){
      let newRange = {...baseRange};
      weathermapInfo.availableFcstHour.forEach(hour => {
        newRange = {
          ...newRange,
          [`${(hour/weathermapInfo.totalFcstHour)*100}%`]:hour
        }
        console.log(`newRange ${JSON.stringify(newRange)}`)
        setRange(newRange);
      });
    }

    //update pips
    if(weathermapInfo && weathermapInfo.availableFcstHour && weathermapInfo.totalFcstHour && weathermapInfo.fcstHourIncrement){
      let newValues = [];
      for(let hour = 0 ; hour <= weathermapInfo.totalFcstHour ; hour+=weathermapInfo.fcstHourIncrement){
        newValues.push(hour);
      }
      console.log(`pips newValues ${newValues}`)
      let newPips = {
        ...basePips,
        values:newValues
      };
      console.log(`newPips ${JSON.stringify(newPips)}`)
      setPips(newPips);
    }


  },[weathermapInfo]);


  const handleOnSlide = () =>{
    console.log(`slider value: ${sliderDom.noUiSlider.get()}`)
    if(weathermapInfo && weathermapInfo.totalFcstHour && weathermapInfo.availableFcstHour){
      // normal situation
      if(weathermapInfo.totalFcstHour === weathermapInfo.availableFcstHour[weathermapInfo.availableFcstHour.length-1]){
        dispatchSelectedModelViewInfo({type:"SET_FCST_HOUR", payload:sliderDom.noUiSlider.get()});
      }
      // handle max value is not available situation
      else {
        //set to available value, skip dispatch fcst hour
        if(!weathermapInfo.availableFcstHour.includes(weathermapInfo.totalFcstHour) && sliderDom.noUiSlider.get() >= weathermapInfo.totalFcstHour){
          sliderDom.noUiSlider.set(weathermapInfo.availableFcstHour[weathermapInfo.availableFcstHour.length-2] || 0);
        } else if(!weathermapInfo.availableFcstHour.includes(0) && sliderDom.noUiSlider.get() === 0){
          sliderDom.noUiSlider.set(weathermapInfo.availableFcstHour[0] || 0);
        } else {
          dispatchSelectedModelViewInfo({type:"SET_FCST_HOUR", payload:parseInt(sliderDom.noUiSlider.get())});
        }
      }
    }
  }

  useEffect(() => {
    if (!sliderDom) {
      let sliderDomTMP = document.getElementById("slider");
      noUiSlider.create(sliderDomTMP, {
        connect: true,
        orientation: "vertical",
        direction: "rtl",
        range: range,
        pips: {
          mode: "values",
          values: [0,42, 84],
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
      sliderDom.noUiSlider.off('slide');
      sliderDom.noUiSlider.on("slide", handleOnSlide);
      sliderDom.noUiSlider.updateOptions({
        range,
        pips
      })
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
  }, [weathermapInfo, range, pips]);




  const handleUpdateSlider = (weathermapInfo) => {
    if(weathermapInfo && weathermapInfo.availableFcstHour && weathermapInfo.missingFcstHour){
      let newRange = {};

    }
  }

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
        className="right"
        // disabled
        style={{
          height: height / 1.5,
          marginRight: width < 1500 ? "45px" : "0px",
          marginTop: "0"
        }}
      ></div>
    </div>
  );
};

export default ModelViewSlider;
