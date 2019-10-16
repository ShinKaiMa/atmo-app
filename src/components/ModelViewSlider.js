import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";
import noUiSlider from "nouislider";

const ModelViewSlider = props => {
  // const [collapsibles, setCollapsibles] = useState();
  // const [sidenavs, setSidenavs] = useState();
  const [width, height] = useWindowSize();

  useEffect(() => {
    const brokeHour = [12];

    let sliderDom = document.getElementById("slider");
    noUiSlider.create(sliderDom, {
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
          console.log(brokeHour.includes(value))
          return brokeHour.includes(value) ? 2 : 1;
        }
      },
      snap: true,
      start: 0,
      step: 6,
      tooltips: [
        {
          to: value => {
            let result = Math.round(parseInt(value)).toString();
            return result + " Hour";
          }
        }
      ]
    });

    // setTimeout(() => {
    //     sliderDom.noUiSlider.updateOptions({
    //         range: {
    //             min: 0,
    //             "13%": 6,
    //             "26%": 12,
    //             "39%": 18,
    //             "65%": 30,
    //             max: 78
    //         },
    //         pips: {
    //             mode: "values",
    //             values: [0, 6, 12, 18, 30, 78],
    //             density: 100
    //           }
    //     });
    // }, 2000);


    setTimeout(() => {
      console.log(`value1 : ${sliderDom.noUiSlider.get()}`);
      sliderDom.noUiSlider.updateOptions({
        range: {
          min: 0,
          "50%": 6,
          max: 12
        },
        pips: {
          mode: "values",
          values: [0, 6, 12],
          density: 100,
          filter: (value, type) => {
            if (type === 0) return 0;
            console.log(brokeHour.includes(value))
            return brokeHour.includes(value) ? 2 : 1;
          }
        },
        filter: (value, type) => {
          if (type === 0) return 0;
          console.log(brokeHour.includes(value))
          return brokeHour.includes(value) ? 2 : 1;
        }
      });
    }, 5000);

    sliderDom.noUiSlider.on('update', () => {
      console.log(sliderDom.noUiSlider.get());
    })
    sliderDom.noUiSlider.on('change', () => {
      console.log(sliderDom.noUiSlider.get());
      if (sliderDom.noUiSlider.get() >= 12)
        sliderDom.noUiSlider.set(6);
    })
  }, []);

  return (
    <div>
      {/* {console.log(`final ${(width > height ? width : height) / 2.5}`)} */}
      <div
        id="slider"
        // style={{ height: "6px", marginTop: "10px", marginLeft: "32px", width:"300px" }}
        style={{
          height: "6px",
          marginTop: "10px",
          marginLeft: "16px",
          marginBottom: "50px",
          // width: (width > height ? width : height) / 2.5
          width: width / 2
        }}
      ></div>
    </div>
  );
};

export default ModelViewSlider;
