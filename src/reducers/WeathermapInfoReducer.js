import {LazyLoadingUtils} from '../utils/LazyLoadingUtils'

export const WeathermapInfoReducer = (weathermapContext, action) => {
    switch (action.type) {
      case 'SET_INFO':
        console.log(`SET_INFO! ${JSON.stringify(action.payload)}`);
        // console.log(`getNewStartLoadingStatus right! ${JSON.stringify(LazyLoadingUtils.getNewStartLoadingStatus(weathermapContext.isLoadingCompleteStatus, weathermapContext.isStartLoadingStatus, action.currentIdx, 'right', 'conserve'))}`);
        return {...weathermapContext, weathermapsResponse: action.payload};
      case 'SET_START_LOADING_STATUS':
        console.log(`SET_START_LOADING_STATUS! ${JSON.stringify(action.payload)}`);
        return {...weathermapContext, isStartLoadingStatus: action.payload};
      case 'SET_LOADING_COMPLETE_STATUS':
        console.log(`SET_LOADING_COMPLETE_STATUS! ${JSON.stringify(action.payload)}`);
        return {...weathermapContext, isLoadingCompleteStatus: action.payload}
      case 'LOAD_RIGHT_DIR':
        let newStartLoadingStatusIdx = LazyLoadingUtils.getNewStartLoadingStatus(weathermapContext.isLoadingCompleteStatus, weathermapContext.isStartLoadingStatus, action.payload.currentIdx, 'right', 'conserve');
        console.log(`newStartLoadingStatusIdx : ${newStartLoadingStatusIdx}`);
        return {...weathermapContext, newStartLoadingStatusIdx};
      default:
        return weathermapContext;
    }
  }