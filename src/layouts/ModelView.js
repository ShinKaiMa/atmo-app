import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { SideNavContext } from "../contexts/SideNavContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from '../components/ModelViewSlider'

const ModelView = props => {
  useEffect(() => {
    // let slider = document.getElementById("slider");
    // noUiSlider.create(slider, {
    //   connect: true,
    //   // range: {
    //   //   min: 0,
    //   //   max: 78
    //   // },
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
    //   snap: true,
    //   start: 0,
    //   step: 6,
    //   tooltips: [
    //     {
    //       to: value => {
    //         let result = Math.round(parseInt(value)).toString();
    //         return result + " Hour";
    //       }
    //     }
    //   ]
    // });
  }, []);

  return (
    <div className="mainLayout container" id="container">
      <div className="row">
        <ModelViewBreadcrumbs props />
      </div>
      {/* <div>
        <div
          id="slider"
          // style={{ height: "6px", marginTop: "10px", marginLeft: "32px", width:"300px" }}
          style={{
            height: "6px",
            marginTop: "10px",
            marginLeft: "16px",
            marginBottom: "50px",
            width: "270px"
          }}
        ></div>
      </div> */}
      <ModelViewSlider/>
    </div>
  );
};

export default withRouter(ModelView);
