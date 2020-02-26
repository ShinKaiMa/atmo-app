import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import ModelViewBreadcrumbs from "../components/ModelViewBreadcrumbs";
import "nouislider/distribute/nouislider.css";
import ModelViewSlider from "../components/ModelViewSlider";
import ModelViewBottomNavbar from "../components/ModelViewBottomNavbar";
import ModelViewPanel from "../components/ModelViewPanel";
import { UserSelectedModelViewContext } from "../contexts/UserSelectedModelViewContext";
import { WeathermapInfoContext } from "../contexts/WeathermapContext";
import { AppStatusContext } from "../contexts/AppStatusContext";
import ModelViewSidePanel from "../components/modelView/controlPanel/ModelViewSidePanel"
import MobileAdditionalLandscapePanel from "../components/modelView/mobileAdditionalControlPanel/MobileAdditionalLandscapePanel"

const ModelView = props => {
  const { appStatus, dispatchAppStatus } = useContext(AppStatusContext);
  const [width, height] = appStatus.windowSize;
  const { dispatchSelectedModelViewInfo } = useContext(
    UserSelectedModelViewContext
  );
  const { weathermapContext, dispatchWeathermapInfo } = useContext(WeathermapInfoContext);
  useEffect(() => {
    if (
      props.match &&
      props.match.params &&
      props.match.params.area &&
      props.match.params.type &&
      props.match.params.model
    ) {
      dispatchWeathermapInfo({ type: "CLEAR_LZ_STATUS" });
      dispatchSelectedModelViewInfo({
        type: "SET_MODEL",
        payload: props.match.params.model
      });
    }
  }, [props]);

  return (
    <React.Fragment>
      <div
        className="mainLayout container"
        id="container"
        style={{ marginBottom: "46px", height: "100%", width: "100% - 10px" }}
      >
        <ModelViewBreadcrumbs props />
        <ModelViewPanel key="ModelViewPanel" />
        <ModelViewSlider key="ModelViewSlider" />
        <ModelViewSidePanel key="ModelViewSidePanel" />
        <MobileAdditionalLandscapePanel key="MobileAdditionalLandscapePanel"/>
      </div>
      <ModelViewBottomNavbar props />
    </React.Fragment>
  );
};

export default withRouter(ModelView);
