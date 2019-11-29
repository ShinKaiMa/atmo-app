import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import useWindowSize from "../hooks/useWindowSize";
import { UserSelectedModelViewContext } from '../contexts/ModelViewContext'

import { useAreasFromAPI } from "../hooks/useAreasFromAPI"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const ModelViewBreadcrumbs = props => {
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);

  const [ breadcrumbs, setBreadcrumbs ] = useState();
  const [ queryModel, setQueryModel ] = useState();
  const [ area, setArea ] = useState();
  const [ width, height ] = useWindowSize();
  const areas = useAreasFromAPI(queryModel);
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
    
    if(areas)

    if(areas && areas.length > 0){
      var instances = M.Dropdown.init(elems, {
        coverTrigger: false
      });
    }
    
  }, [areas] );

  useEffect(() => {
    if(props && props.match && props.match.params && props.match.params.model){
      setQueryModel(props.match.params.model);
    }
  },[props])

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
                lineHeight: width > THRESHOLD_WIDTH_PIXEL ? "28px" : "25px",
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


          <a className="breadcrumb">
            <a
              className="dropdown-trigger btn area waves-effect waves-gray "
              data-target="area"
              style={{
                backgroundColor: "rgba(50,50,50,0.1)",
                width: width > THRESHOLD_WIDTH_PIXEL ? "110px" : "85px",
                color: "gray",
                height: width > THRESHOLD_WIDTH_PIXEL ? "30px" : "25px",
                lineHeight: width > THRESHOLD_WIDTH_PIXEL ? "15px" : "25px",
                fontSize: width > THRESHOLD_WIDTH_PIXEL ? "12px" : "7px",
                padding: width > THRESHOLD_WIDTH_PIXEL ? "6px 6px 6px 10px" : "0 0 0 8px",
                borderRadius: "16px",
                marginBottom: width > THRESHOLD_WIDTH_PIXEL ? "3px" : "0px",
                textTransform: "none"
              }}
            >
              <i
                className="material-icons right"
                style={{
                  lineHeight: width > THRESHOLD_WIDTH_PIXEL ? "16px" : "25px",
                  fontSize: "13px",
                  color: "gray",
                  paddingRight: "10px",
                  margin: "0px",
                }}
              >
                keyboard_arrow_down
              </i>
              {selectedModelViewInfo.area? selectedModelViewInfo.area : "loading..." }
            </a>
          </a>

          
        </div>
      </div>
      <ul  id="area" className="dropdown-content area" style={{ zIndex: 10 }}>
      {
      areas ?
        areas.map((area, index, array) => {
          return (
            <React.Fragment>
              <li key={index}>
                <a style={{ fontSize: width > THRESHOLD_WIDTH_PIXEL ? "16px" : "10px", }} onClick={(e) => dispatchSelectedModelViewInfo({ type: 'SET_AREA', payload: e.target.innerHTML })}>{area}</a>
              </li>
              {array.length - 1 === index ? "" : <li className="divider" tabindex="-1"></li>}
            </React.Fragment>
            )
        }):""
      }
      </ul>
    </nav>
  );
};

export default withRouter(ModelViewBreadcrumbs);
