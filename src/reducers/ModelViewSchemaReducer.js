export const ModelViewSchemaReducer = (modelViewInfo, action) => {
  switch (action.type) {
    case "SET_MODEL_VIEW":
      console.log("SET_MODEL_VIEW!");
      return action.payload;
    default:
      return modelViewInfo;
  }
};
