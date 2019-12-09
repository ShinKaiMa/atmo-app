import React, { useState, useEffect, useContext } from "react";
import {  withRouter } from "react-router-dom";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";
import ModelViewBottomNavbar from '../components/ModelViewBottomNavbar'
import { UserSelectedModelViewContext } from '../contexts/UserSelectedModelViewContext';

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
      

    </div>
  );
};

export default withRouter(ModelView);
