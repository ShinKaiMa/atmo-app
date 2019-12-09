export const ModelViewSchemaReducer = (modelViewInfo, action) => {
  switch (action.type) {
    case "SET_MODEL_VIEW_SCHEMA":
      console.log("SET_MODEL_VIEW_SCHEMA!");
      return action.payload;
    default:
      return modelViewInfo;
  }
};
