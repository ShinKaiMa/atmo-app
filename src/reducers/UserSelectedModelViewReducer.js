export const UserSelectedModelViewReducer = (selectedModelViewInfo, action) => {
  switch (action.type) {
    case "SET_AREA":
      console.log("SET_AREA!");
      return { ...selectedModelViewInfo, area: action.payload };
    case "SET_MODEL":
      console.log("SET_MODEL!");
      return { ...selectedModelViewInfo, model: action.payload };
    case "SET_DETAIL_TYPE":
      console.log("SET_DETAIL_TYPE!");
      return { ...selectedModelViewInfo, detailType: action.payload };
    default:
      return selectedModelViewInfo;
  }
};
