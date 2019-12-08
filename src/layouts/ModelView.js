import React, { useState, useEffect, useContext } from "react";
import {  withRouter } from "react-router-dom";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";
import ModelViewBottomNavbar from '../components/ModelViewBottomNavbar'
import { UserSelectedModelViewContext } from '../contexts/UserSelectedModelViewContextProvider';

const ModelView = props => {
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);

  useEffect(() => {
    if (
      props.match &&
      props.match.params &&
      props.match.params.area &&
      props.match.params.type &&
      props.match.params.model
    ) {
      dispatchSelectedModelViewInfo({ type: 'SET_MODEL', payload: props.match.params.model });
    }
  }, [props])

  return (
    <div>
      <div className="mainLayout container" id="container" style={{ marginBottom: "46px" }}>
        <div className="row">
          <ModelViewBreadcrumbs props />
        </div>
        <div className="row">
          <ModelViewSlider />
        </div>
        

      </div>

      <ModelViewBottomNavbar props />
      {/* <div
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
            height: "45px",
            zIndex: "998"
          }}
        >
          <div className="bottomNav" style={{ height: "45px" }}>
            <a
              class="dropdown-trigger btn active col s4"
              data-target="dropdown1"
              style={{
                height: "45px",
                backgroundColor: "white",
                color: "#0ACAF5",
                borderRadius: "0px",
                border: "90px"
              }}
            >
              Drop Me!
            </a>
            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown2"
              style={{
                height: "45px",
                backgroundColor: "white",
                color: "#0ACAF5",
                borderRadius: "0px",
                border: "0px"
              }}
            >
              Drop Me!
            </a>
            <a
              class="dropdown-trigger btn col s4"
              data-target="dropdown3"
              style={{
                height: "45px",
                backgroundColor: "white",
                color: "#0ACAF5",
                borderRadius: "0px",
                border: "0px"
              }}
            >
              Drop Me!
            </a>
          </div>
        </div>
        <ul
          id="dropdown1"
          class="dropdown-content collection"
        >
          <li className="collection-item">
            <a>one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
        <ul
          id="dropdown2"
          class="dropdown-content collection"
        >
          <li className="collection-item">
            <a>one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul>
        <ul
          id="dropdown3"
          class="dropdown-content collection"
        >
          <li className="collection-item">
            <a>one</a>
          </li>
          <li className="collection-item">
            <a>two</a>
          </li>
          <li className="collection-item">
            <a>three</a>
          </li>
        </ul> */}

    </div>
  );
};

export default withRouter(ModelView);
