export const WeathermapInfoReducer = (weathermapContext, action) => {
    switch (action.type) {
      case 'SET_INFO':
        console.log(`SET_INFO! ${JSON.stringify(action.payload)}`);
        return {...weathermapContext, weathermapsResponse: action.payload};
      case 'SET_START_LOADING_STATUS':
        console.log("SET_START_LOADING_STATUS!");
        return {...weathermapContext, isStartLoadingStatus: action.payload};
      case 'SET_LOADING_COMPLETE_STATUS':
        console.log("SET_LOADING_COMPLETE_STATUS!");
        return {...weathermapContext, isLoadingCompleteStatus: action.payload}
      default:
        return weathermapContext;
    }
  }