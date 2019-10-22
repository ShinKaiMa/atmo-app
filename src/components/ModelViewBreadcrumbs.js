import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import useWindowSize from "../hooks/useWindowSize";

const ModelViewBreadcrumbs = props => {
  const [breadcrumbs, setBreadcrumbs] = useState();
  const [area, setArea] = useState();
  const [width, height] = useWindowSize();
  const THRESHOLD_WIDTH_PIXEL = 500;

  useEffect(() => {
    if (
      !props.match &&
      !props.match.params &&
      !props.match.params.area &&
      !props.match.params.type &&
      !props.match.params.model
    ) {
      props.history.push("/");
    } else {
      let newBreadcrumbs = [];

      if (props.match.params.area === "global") {
        newBreadcrumbs.push("Global Model");
      } else if (props.match.params.area === "regional") {
        newBreadcrumbs.push("Regional Model");
      }

      if (props.match.params.model === "GFS") {
        newBreadcrumbs.push("GFS");
      } else if (props.match.params.model === "ECMWF") {
        newBreadcrumbs.push("ECMWF");
      } else if (props.match.params.model === "CWBWRF") {
        newBreadcrumbs.push("CWB WRF");
      }

      if (newBreadcrumbs.length !== 2) {
        props.history.push("/");
      } else {
        setBreadcrumbs(newBreadcrumbs);
      }
    }
    var elems = document.querySelectorAll(".dropdown-trigger.area");
    var instances = M.Dropdown.init(elems, {
      coverTrigger: false
    });
  }, [props]);

  return (
    <nav
      className="z-depth-0 col s12"
      style={{ height: "20px", lineHeight: "20px", marginBottom: "20px" }}
    >
      <div
        className="nav-wrapper "
        style={{ height: "20px", paddingTop: "10px" }}
      >
        <div style={{ height: "20px" }}>
          <a
            className="breadcrumb pointer"
            onClick={() => props.history.push("/")}
          >
            <i
              className="material-icons"
              style={{
                color: "rgba(50,50,50,0.4)",
                lineHeight: width > THRESHOLD_WIDTH_PIXEL ? "20px" : "20px",
                fontSize: width > THRESHOLD_WIDTH_PIXEL ? "21px" : "21px"
              }}
            >
              home
            </i>
          </a>
          <a
            className="breadcrumb"
            style={{
              fontSize: width > THRESHOLD_WIDTH_PIXEL ? "18px" : "10px"
            }}
          >
            {breadcrumbs ? breadcrumbs[0] : ""}
          </a>
          <a
            className="breadcrumb active"
            style={{
              fontSize: width > THRESHOLD_WIDTH_PIXEL ? "18px" : "10px"
            }}
          >
            {breadcrumbs ? breadcrumbs[1] : ""}
          </a>
          <a class="breadcrumb">
            <a
              class="dropdown-trigger btn area"
              data-target="area"
              style={{
                backgroundColor: "transparent",
                width: width > THRESHOLD_WIDTH_PIXEL ? "120px" : "70px",
                color: "gray",
                height: width > THRESHOLD_WIDTH_PIXEL ? "25px" : "20px",
                lineHeight: width > THRESHOLD_WIDTH_PIXEL ? "20px" : "18px",
                fontSize: width > THRESHOLD_WIDTH_PIXEL ? "18px" : "10px",
                padding: "0 0 0 3px",
                color:"#0ACAF5"
              }}
            >
              <i
                class="material-icons right"
                style={{
                  lineHeight: width > THRESHOLD_WIDTH_PIXEL ? "21px" : "20px",
                  fontSize: "13px",
                  color:"gray"
                }}
              >
                keyboard_arrow_down
              </i>
              Area
            </a>
          </a>
        </div>
      </div>
      <ul id="area" class="dropdown-content area">
        <li>
          <a style={{fontSize: width > THRESHOLD_WIDTH_PIXEL ? "16px" : "10px",}}>Near Taiwan</a>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li>
          <a style={{fontSize: width > THRESHOLD_WIDTH_PIXEL ? "16px" : "10px",}}>Taiwan</a>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(ModelViewBreadcrumbs);
