import React, { useState, useEffect, useContext } from "react";
import useWindowSize from "../hooks/useWindowSize";
import noUiSlider from "nouislider";
import { WeathermapInfoContext } from '../contexts/WeathermapContext'

const ModelViewSlider = props => {
  const { weathermapInfo, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  const [sliderDom, setSliderDom] = useState();
  const [width, height] = useWindowSize();
  const [range, setRange] = useState({min: 0, max: 84});
  const [brokeHour, setBrokeHour] = useState([3,12]);
  let basePips = {
    mode: "values",
    density: 100,
    filter: (value, type) => {
    if (type === 0) return 0;
    console.log(brokeHour.includes(value));
    return brokeHour.includes(value) ? 2 : 1;
  }}

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
          values: [0, 84],
          density: 100,
          filter: (value, type) => {
            if (type === 0) return 0;
            console.log(brokeHour.includes(value));
            return brokeHour.includes(value) ? 2 : 1;
          }
        },
        snap: true,
        start: 0,
        step: 6
        // tooltips: [
        //   {
        //     to: value => {
        //       let result = Math.round(parseInt(value)).toString();
        //       return result + " Hour";
        //     }
        //   }
        // ]
      });

      sliderDomTMP.noUiSlider.on("slide", () => {
        if (sliderDomTMP.noUiSlider.get() >= 12) sliderDomTMP.noUiSlider.set(6);
      });

      setSliderDom(sliderDomTMP);
    }
    else{
      setTimeout(() => {
        sliderDom.noUiSlider.updateOptions({
          orientation: 'vertical',
          direction: 'rtl',
          range: {
            min: 0,
            "50%": 6,
            max: 12
          },
          pips: {
            mode: "values",
            values: [0,3, 6, 12],
            density: 100,
            filter: (value, type) => {
              if (type === 0) return 0;
              return brokeHour.includes(value) ? 2 : 1;
            }
          },
        });
      }, 2000);
    }
  }, [props, sliderDom, weathermapInfo]);


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
        style={{
          height: height / 1.3,
          marginRight: width < 1500 ? "45px" : "0px",
          marginTop: "0"
        }}
      ></div>
    </div>
  );
};

export default ModelViewSlider;
