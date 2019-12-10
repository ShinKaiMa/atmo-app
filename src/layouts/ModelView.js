import React, { useState, useEffect, useContext } from "react";
import {  withRouter } from "react-router-dom";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";
import ModelViewBottomNavbar from '../components/ModelViewBottomNavbar'
import ModelViewPanel from '../components/ModelViewPanel';
import { UserSelectedModelViewContext } from '../contexts/UserSelectedModelViewContext';
import useWindowSize from "../hooks/useWindowSize";

const ModelView = props => {
  const { selectedModelViewInfo, dispatchSelectedModelViewInfo } = useContext(UserSelectedModelViewContext);
  const [width, height] = useWindowSize();

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
      <div className="mainLayout container" id="container" style={{ marginBottom: "46px", height: height}}>
        <div className="row">
          <ModelViewBreadcrumbs props />
        </div>
        <div className="row">
          <ModelViewPanel/>
          <ModelViewSlider props/>
        </div>
      </div>

      <ModelViewBottomNavbar props />
      

    </div>
  );
};

export default withRouter(ModelView);
