import React, { useContext } from "react";
import cwbLogo from "../../../asset/CWB.png";
import { AppStatusContext } from "../../../contexts/AppStatusContext";

const ModelInfoCard = ({sidePanelSize}) => {
  const { appStatus } = useContext(AppStatusContext);
  const [width, height] = appStatus.windowSize;

  return (
    <div>
      <div className="tight card-panel grey lighten-5 z-depth-1 waves-effect waves-gray"
            style={{
              width: "100%",
              maxHeight: height <= 360 && appStatus.isLandscape ? "70px" : "100%",
              overflowY: height <= 360 && appStatus.isLandscape ? "scroll" : "hiden",
              }}>
        <div
        className="row valign-wrapper"
         style={{
             marging : "0px",
             padding: "0px",
             margin: "0",
         }}>
          <div className="col s2">
            <img src={cwbLogo} alt="" className="circle  responsive-img" />
          </div>
          <div className="col s10">
            <h6 style={{ borderBottom: "gray 1px solid", lineHeight: "-1px" }}>
              CWB WRF (3km)
            </h6>
            <span className="black-text">
              These data are generated using grid data and forcast from the{" "}
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
