import React, { useState, useContext, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { SideNavContext } from "../contexts/SideNavContext";
import M from "materialize-css/dist/js/materialize.min.js";
import { unaryExpression } from "@babel/types";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";

const ModelView = props => {
  useEffect(() => {
    let slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      connect: true,
      range: {
        min: 0,
        max: 78
      },
      start: 0,
      step: 6,
      tooltips : [{to: (value) => {
        let result = Math.round(parseInt(value)).toString();
        return result + ' Hour';
      }}]
    });
  }, []);

  return (
    <div className="mainLayout container" id="container">
      <div className="row">
        <ModelViewBreadcrumbs props />
      </div>
      <div className="row">
        <div id="slider" className="col s4 " style={{height:"6px", marginTop:"10px", marginLeft:"16px"}}></div>
      </div>
    </div>
  );
};

export default withRouter(ModelView);
