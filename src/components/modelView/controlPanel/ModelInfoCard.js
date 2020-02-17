import React, { useEffect, useRef } from "react";
import cwbLogo from "../../../asset/CWB.png";

const ModelInfoCard = props => {
  return (
    <div>
      <div className="tight card-panel grey lighten-5 z-depth-1 waves-effect waves-gray" style={{width: "100%"}}>
        <div
        className="row valign-wrapper"
         style={{
             marging : "0px",
             padding: "0px",
             margin: "0"
         }}>
          <div className="col s2">
            <img src={cwbLogo} alt="" className="circle  responsive-img" />
          </div>
          <div className="col s10">
            <h6 style={{ borderBottom: "gray 1px solid", lineHeight: "-1px" }}>
              CWB WRF (3km)
            </h6>
            <span className="black-text">
              These weathermaps are generated using grid data from the{" "}
              <a href="https://www.cwb.gov.tw/eng/" target="_blank">
                CWB
              </a>
              . More information about{" "}
              <a
                href="https://www.cwb.gov.tw/V7/climate/climate_info/information/seminars/0507-1/03.pdf"
                target="_blank"
              >
                CWB WRF
              </a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelInfoCard;
