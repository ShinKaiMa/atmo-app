import {LazyLoadingUtils} from '../utils/LazyLoadingUtils'

export const WeathermapInfoReducer = (weathermapContext, action) => {
    switch (action.type) {
      case 'SET_INFO':
        console.log(`SET_INFO! ${JSON.stringify(action.payload)}`);
        // console.log(`getNewStartLoadingStatus right! ${JSON.stringify(LazyLoadingUtils.getNewStartLoadingStatus(weathermapContext.isLoadingCompleteStatus, weathermapContext.isStartLoadingStatus, action.currentIdx, 'right', 'conserve'))}`);
        return {...weathermapContext, weathermapsResponse: action.payload};
      case 'SET_SHOULD_START_LOADING':
        console.log(`SET_SHOULD_START_LOADING! ${JSON.stringify(action.payload)}`);
        return {...weathermapContext, shouldStartLoading: action.payload};
      case 'SET_IS_LOADED':
        console.log(`SET_IS_LOADED! ${JSON.stringify(action.payload)}`);
        let newIsLoaded = [...weathermapContext.isLoaded];
        
        return {...weathermapContext, isLoaded: action.payload}
      case 'LOAD_RIGHT_DIR':
        let newShouldStartLoading = LazyLoadingUtils.getNewStartLoadingStatus(weathermapContext.isLoaded, weathermapContext.shouldStartLoading, action.payload.currentIdx, 'right', 'conserve');
        console.log(`newShouldStartLoading : ${newShouldStartLoading}`);
        return {...weathermapContext, shouldStartLoading: newShouldStartLoading};
      default:
        return weathermapContext;
    }
  }