import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import useWindowSize from "../hooks/useWindowSize";

const ModelViewBottomNavbar = props => {
    const [width, height] = useWindowSize();
    useEffect(() => {
        var dropdowns = document.querySelectorAll(".dropdown-trigger");
        if (width !== 0) {
          var dropdownsInstances = M.Dropdown.init(dropdowns, {
            hover: width > 1080 ? true : false,
            // hover: false,
            inDuration: 500,
            outDuration: 0,
            constrainWidth: true,
            // coverTrigger: false,
            alignment:"top"
          });
        }
      }, [width, height, props]);

    return(
        <div>
        <div
        class="row"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0px",
          right: "0px",
          // left:width,
          // marginLeft: "20px",
          // marginBottom:"0px",
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "0",
          marginRight: "0",
          // padding:"0px",
          paddingLeft: width > 993 ? "200px" : "0px",
          width: width > 993 ? width : "100%",
        //   height: "45px",
          zIndex: "500"
        }}
      >
        <div id="bottomNav" style={{height:"45px"}}>
          <a
            class="dropdown-trigger btn active col s4"
            data-alignment="top"
            data-target="precipitationBotNav"
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "90px",
              textTransform:" none",
            }}
          >
            Precipitation
          </a>
          <a
            class="dropdown-trigger btn col s4"
            data-target="wind"
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "0px",
              textTransform:" none"
            }}
          >
            Wind
          </a>
          <a
            class="dropdown-trigger btn col s4"
            data-target="temperature"
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "0px",
              textTransform:" none"
            }}
          >
            Temperature
          </a>
        </div>


        
      </div>
      <ul
        id="precipitationBotNav"
        class="dropdown-content collection"
      >
        <li className="collection-item">
          <a >Total Precip</a>
        </li>
        <li className="collection-item">
          <a >6-Hourly Precip</a>
        </li>
      </ul>
      <ul
        id="wind"
        class="dropdown-content collection"
      >
        <li className="collection-item">
          <a  > Surface Wind Speed</a>
        </li>
        <li className="collection-item">
          <a  >850hPa Wind Speed</a>
        </li>
        <li className="collection-item">
          <a  >850hPa Vorticity</a>
        </li>
        <li className="collection-item">
          <a  >500Pa Vorticity</a>
        </li>
        <li className="collection-item">
          <a  >200Pa Wind Speed</a>
        </li>
      </ul>
      <ul
        id="temperature"
        class="dropdown-content collection"
      >
        <li className="collection-item">
          <a  >Surface Temperature</a>
        </li>
        <li className="collection-item">
          <a  >850hPa Temperature</a>
        </li>
      </ul>
      </div>
    )
}


export default ModelViewBottomNavbar;