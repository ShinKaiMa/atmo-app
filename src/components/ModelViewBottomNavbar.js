import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import useWindowSize from "../hooks/useWindowSize";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';

const ModelViewBottomNavbar = props => {
  const [width, height] = useWindowSize();

  const [currentIdx, setCurrentIdx] = useState(1);

  const handleChangeNavIdx = (num) => {
    setCurrentIdx(num);
  }

  useEffect(() => {
    var dropdowns = document.querySelectorAll(".dropdown-trigger.botTrigger");
    if (width !== 0) {
      var dropdownsInstances = M.Dropdown.init(dropdowns, {
        hover: width > 1080 ? true : false,
        inDuration: 300,
        outDuration: 300,
        constrainWidth: true,
        coverTrigger: false,
      });
    }
  }, [width, height, props]);

  return (
    <div>
      <div
        className="row"
        style={{
          position: "fixed",
          bottom: "0px",
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
        <div id="bottomNav" style={{ height: "45px" }}>
          <a
            className = {`dropdown-trigger botTrigger btn col s4 ${currentIdx === 1? "active":""}`}
            data-alignment="top"
            data-target="precipitationBotNav"
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "90px",
              textTransform: " none",
            }}
          >
            Precipitation
            {/* <Skeleton width={"80%"} color="rgba(250,250,250,1)" highlightColor="rgba(240,240,240,1)"/> */}
          </a>
          <a
            className = {`dropdown-trigger botTrigger btn col s4  ${currentIdx === 2? "active":""}`}
            data-target="wind"
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "0px",
              textTransform: " none",
            }}
          >
            Wind
          </a>
          <a
            className = {`dropdown-trigger botTrigger btn col s4  ${currentIdx === 3? "active":""}`}
            data-target="temperature"
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "0px",
              textTransform: " none",
            }}
          >
            Temperature
          </a>
        </div>



      </div>
      <ul
        id="precipitationBotNav"
        className="dropdown-content collection two botNav"
        onClick={()=>handleChangeNavIdx(1)}
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
        className="dropdown-content collection five botNav"
        onClick={()=>handleChangeNavIdx(2)}
      >
        <li className="collection-item">
          <a> Surface Wind Speed</a>
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
        className="dropdown-content collection right two botNav"
        onClick={()=>handleChangeNavIdx(3)}
      >
        <li className="collection-item">
          <a  >Surface Temp</a>
        </li>
        <li className="collection-item">
          <a  >850hPa Temp</a>
        </li>
      </ul>
    </div>
  )
}


export default ModelViewBottomNavbar;