import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import noUiSlider from "nouislider";

const ModelViewSlider = props => {
  // const [collapsibles, setCollapsibles] = useState();
  // const [sidenavs, setSidenavs] = useState();
  let [sliderDom, setSliderDom] = useState();
  const [width, height] = useWindowSize();

  useEffect(() => {
    const brokeHour = [3, 12];
    if (!sliderDom) {
      let sliderDomTMP = document.getElementById("slider");
      noUiSlider.create(sliderDomTMP, {
        connect: true,
        //   range: {
        //     min: 0,
        //     "13%": 6,
        //     "26%": 12,
        //     "39%": 18,
        //     max: 78
        //   },
        //   pips: {
        //     mode: "values",
        //     values: [0, 6, 12, 18, 78],
        //     density: 100
        //   },
        orientation: 'vertical',
        direction: 'rtl',
        range: {
          min: 0,
          max: 6
        },
        pips: {
          mode: "values",
          values: [0, 6],
          density: 100,
          filter: (value, type) => {
            if (type === 0) return 0;
            console.log(brokeHour.includes(value));
            return brokeHour.includes(value) ? 2 : 1;
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

      sliderDomTMP.noUiSlider.on("slide", () => {
        if (sliderDomTMP.noUiSlider.get() >= 12) sliderDomTMP.noUiSlider.set(6);
      });

      setSliderDom(sliderDomTMP);
    }
    // else{
    //   setTimeout(() => {
    //     sliderDom.noUiSlider.updateOptions({
    //       orientation: 'vertical',
    //       direction: 'rtl',
    //       range: {
    //         min: 0,
    //         "50%": 6,
    //         max: 12
    //       },
    //       pips: {
    //         mode: "values",
    //         values: [0,3, 6, 12],
    //         density: 100,
    //         filter: (value, type) => {
    //           if (type === 0) return 0;
    //           return brokeHour.includes(value) ? 2 : 1;
    //         }
    //       },
    //     });
    //   }, 2000);
    // }
  }, [props,sliderDom]);

  return (
    <div >
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
        style={{height: height/1.3, marginRight: width < 1500 ? "45px" : "0px", marginTop:"0"}}
      ></div>
    </div>
  );
};

export default ModelViewSlider;
