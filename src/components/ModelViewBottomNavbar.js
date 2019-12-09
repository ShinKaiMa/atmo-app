import React, { useState, useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import useWindowSize from "../hooks/useWindowSize";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { useModelViewSchemaFromAtmo } from "../hooks/useModelViewSchemaFromAtmo";

const ModelViewBottomNavbar = props => {
  const [width, height] = useWindowSize();
  const [queryModelAndArea, setQueryModelAndArea] = useState({queryModel: "", queryArea: ""});
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext( UserSelectedModelViewContext );
  const modelViewSchema = useModelViewSchemaFromAtmo(queryModelAndArea);

  const handleChangeNavIdx = num => {
    dispatchSelectedModelViewInfo({type:'SET_BOT_NAV_IDX', payload:num});
  };

  const handleChangeDetailType = detailType => {
    console.log(detailType);
    dispatchSelectedModelViewInfo({type:"SET_DETAIL_TYPE", payload:detailType})
  };

  useEffect(() => {
    var dropdowns = document.querySelectorAll(".dropdown-trigger.botTrigger");
    if (
      dropdowns &&
      width !== 0 &&
      modelViewSchema &&
      Object.keys(modelViewSchema.dataTypes).length === 3
    ) {
      let dropdownsInstances = M.Dropdown.init(dropdowns, {
        hover: false,
        // hover: width > 1080 ? true : false,
        inDuration: 300,
        outDuration: 300,
        constrainWidth: true,
        coverTrigger: false,
      });
    }
  }, [width, height, props, modelViewSchema]);

  useEffect(() => {
    if (selectedModelViewInfo.model && selectedModelViewInfo.area){
      setQueryModelAndArea({
        queryModel: selectedModelViewInfo.model,
        queryArea: selectedModelViewInfo.area
      });
    }
  }, [selectedModelViewInfo.model, selectedModelViewInfo.area]);

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
            className={`dropdown-trigger botTrigger btn col s4 ${
              selectedModelViewInfo.bottomNavIdx === 0 ? "active" : ""
            }`}
            data-alignment="top"
            data-target={`${
              modelViewSchema &&
              Object.keys(modelViewSchema.dataTypes).length === 3
                ? Object.keys(modelViewSchema.dataTypes)[0]
                : ""
            }`}
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "90px",
              textTransform: " none"
            }}
          >
            {modelViewSchema &&
            Object.keys(modelViewSchema.dataTypes).length === 3 ? (
              Object.keys(modelViewSchema.dataTypes)[0]
            ) : (
              <SkeletonTheme
                duration={0.1}
                color="rgba(200,200,200,1)"
                highlightColor="rgba(240,240,240,1)"
              >
                <Skeleton width={"40%"} />
              </SkeletonTheme>
            )}
          </a>
          <a
            className={`dropdown-trigger botTrigger btn col s4  ${
              selectedModelViewInfo.bottomNavIdx === 1 ? "active" : ""
            }`}
            data-target={`${
              modelViewSchema &&
              Object.keys(modelViewSchema.dataTypes).length === 3
                ? Object.keys(modelViewSchema.dataTypes)[1]
                : ""
            }`}
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "0px",
              textTransform: " none"
            }}
          >
            {modelViewSchema &&
            Object.keys(modelViewSchema.dataTypes).length === 3 ? (
              Object.keys(modelViewSchema.dataTypes)[1]
            ) : (
              <SkeletonTheme
                duration={0.1}
                color="rgba(200,200,200,1)"
                highlightColor="rgba(240,240,240,1)"
              >
                <Skeleton width={"40%"} />
              </SkeletonTheme>
            )}
          </a>
          <a
            className={`dropdown-trigger botTrigger btn col s4  ${
              selectedModelViewInfo.bottomNavIdx === 2 ? "active" : ""
            }`}
            data-target={`${
              modelViewSchema &&
              Object.keys(modelViewSchema.dataTypes).length === 3
                ? Object.keys(modelViewSchema.dataTypes)[2]
                : ""
            }`}
            style={{
              height: "45px",
              backgroundColor: "white",
              color: "#0ACAF5",
              borderRadius: "0px",
              border: "0px",
              textTransform: " none"
            }}
          >
            {modelViewSchema &&
            Object.keys(modelViewSchema.dataTypes).length === 3 ? (
              Object.keys(modelViewSchema.dataTypes)[2]
            ) : (
              <SkeletonTheme
                duration={0.1}
                color="rgba(200,200,200,1)"
                highlightColor="rgba(240,240,240,1)"
              >
                <Skeleton width={"40%"} />
              </SkeletonTheme>
            )}
          </a>
        </div>
      </div>

      {/* <ul
        id="Precipitation"
        className="dropdown-content collection two botNav"
        onClick={() => handleChangeNavIdx(1)}
      >
        <li className="collection-item">
          <a >Total Precip</a>
        </li>
        <li className="collection-item">
          <a >6-Hourly Precip</a>
        </li>
      </ul>
      <ul
        id="Wind"
        className="dropdown-content collection five botNav"
        onClick={() => handleChangeNavIdx(2)}
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
        id="Temperature"
        className="dropdown-content collection right two botNav"
        onClick={() => handleChangeNavIdx(3)}
      >
        <li className="collection-item">
          <a  >Surface Temp</a>
        </li>
        <li className="collection-item">
          <a  >850hPa Temp</a>
        </li>
      </ul> */}

      {modelViewSchema &&
      Object.keys(modelViewSchema.dataTypes).length === 3 ? (
        Object.keys(modelViewSchema.dataTypes).map((key, index, array) => {
          return (
            <ul
              key={index}
              id={key}
              className={`dropdown-content collection botNav ${getCorespondedClassName(
                modelViewSchema.dataTypes[key].length
              )} ${index === array.length - 1 ? "right" : ""}`}
              onClick={() => handleChangeNavIdx(index)}
            >
              {modelViewSchema.dataTypes[key].map(detailType => {
                return (
                  <li
                    id="botNavCollection"
                    className={`collection-item ${selectedModelViewInfo.detailType === detailType? "active" : ""}`}
                    // className="collection-item"
                    onClick={() => handleChangeDetailType(detailType)}
                  >
                    <a>{detailType}</a>
                  </li>
                );
              })}
            </ul>
          );
        })
      ) : (
        <ul>
          <li className="collection-item">
            <a>loading</a>
          </li>
        </ul>
      )}
    </div>
  );
};

const sleep = second => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, second);
  });
};

const getCorespondedClassName = detailTypeNum => {
  if (detailTypeNum === 1) {
    return "one";
  } else if (detailTypeNum === 2) {
    return "two";
  } else if (detailTypeNum === 3) {
    return "three";
  } else if (detailTypeNum === 4) {
    return "four";
  } else if (detailTypeNum === 5) {
    return "five";
  }
};

export default ModelViewBottomNavbar;
