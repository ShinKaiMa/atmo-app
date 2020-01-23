export const UserSelectedModelViewReducer = (selectedModelViewInfo, action) => {
  switch (action.type) {
    case "INIT_SLIDER":
      return { ...selectedModelViewInfo, sliderDOM: action.payload };
    case "SET_AREA":
      return { ...selectedModelViewInfo, area: action.payload };
    case "SET_MODEL":
      return { ...selectedModelViewInfo, model: action.payload };
    case "SET_DETAIL_TYPE":
      return { ...selectedModelViewInfo, detailType: action.payload };
    case "SET_BOT_NAV_IDX":
      return { ...selectedModelViewInfo, bottomNavIdx: action.payload };
    case "SET_START_DATE":
      return { ...selectedModelViewInfo, startDate: action.payload };
    case "SET_FCST_HOUR":
      return { ...selectedModelViewInfo, fcstHour: action.payload };
    case "SET_SLIDER_FCST_HOUR":
      selectedModelViewInfo.sliderDOM.current.noUiSlider.set(action.payload);
      return selectedModelViewInfo;
    case "UPDATE_PIP_LAST_RENDER_TIME":
      return { ...selectedModelViewInfo, lastPipRenderTime: action.payload };
    case "ROLLBACK_SLIDER":
      selectedModelViewInfo.sliderDOM.current.noUiSlider.set(selectedModelViewInfo.fcstHour);
      return selectedModelViewInfo;
    default:
      return selectedModelViewInfo;
  }
};
