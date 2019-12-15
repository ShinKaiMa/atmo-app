import React, { useState, useEffect, useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import noUiSlider from "nouislider";
import { WeathermapInfoContext } from '../contexts/WeathermapContext'

const ModelViewSlider = props => {
  const { weathermapInfo, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const [sliderDom, setSliderDom] = useState();
  const [width, height] = useWindowSize();
  const [range, setRange] = useState({min: 0, "50%" : 42, max: 84});
  const [brokeHour, setBrokeHour] = useState([0, 84]);
  const [disabled, isDisabled] = useState(true);
  let basePips = {
    mode: "values",
    density: 100,
    filter: (value, type) => {
    if (type === 0) return 0;
    console.log(brokeHour.includes(value));
    return brokeHour.includes(value) ? 2 : 1;
  }}
  let initialBrokeHour = [0, 84];

  const handleSlide1 = () =>{
    console.log(`slider1: ${sliderDom.noUiSlider.get()}`)
  }

  const handleSlide2 = () =>{
    console.log(`slider2: ${sliderDom.noUiSlider.get()}`)
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
            // console.log(`value : ${value}`)
            // console.log(`type : ${type}`)
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

      const handleIni = () => {
        console.log("11111")
        if (sliderDomTMP.noUiSlider.get() >= 50) sliderDomTMP.noUiSlider.set(0);
      }
      // sliderDomTMP.noUiSlider.on("slide", () => {
      //   console.log("11111")
      //   if (sliderDomTMP.noUiSlider.get() >= 50) sliderDomTMP.noUiSlider.set(0);
      // });
      sliderDomTMP.noUiSlider.on("slide", handleIni);

      // sliderDomTMP.noUiSlider.on("slide", handleSlide1);

      setSliderDom(sliderDomTMP);
    }
    else{
      sliderDom.noUiSlider.on("slide", handleSlide2);
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
  }, [weathermapInfo]);


  useEffect(() => {

  },[weathermapInfo])


  const handleUpdatePip = (weathermapInfo) => {
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
