import { LazyLoadingUtils } from '../utils/LazyLoadingUtils'

export const WeathermapInfoReducer = (weathermapContext, action) => {
  let newShouldStartLoading = undefined;
  switch (action.type) {
    case 'SET_INFO':
      return { ...weathermapContext, weathermapsResponse: action.payload };
    case 'SET_SHOULD_START_LOADING':
      return { ...weathermapContext, shouldStartLoading: action.payload };
    case 'SET_IS_LOADED':
      let newIsLoaded = [...weathermapContext.isLoaded];
      newIsLoaded[action.index] = true;
      return { ...weathermapContext, isLoaded: newIsLoaded }
    case 'INIT_LOADED_STATUS':
      return { ...weathermapContext, isLoaded: action.payload }
    case 'CLEAR_LZ_STATUS':
      return { ...weathermapContext, isLoaded: [], islazyloadingActivated: { right: true, left: true }, shouldStartLoading: [] }
    case 'LOAD_RIGHT_DIR':
      newShouldStartLoading = LazyLoadingUtils.getNewStartLoadingStatus(weathermapContext.isLoaded, weathermapContext.shouldStartLoading, action.currentIdx, 'right', 'conserve');
      if (LazyLoadingUtils.isEqual(newShouldStartLoading, weathermapContext.shouldStartLoading)) {
        return { ...weathermapContext, islazyloadingActivated: { ...weathermapContext.islazyloadingActivated, right: false } };
      } else {
        return { ...weathermapContext, shouldStartLoading: newShouldStartLoading, islazyloadingActivated: { ...weathermapContext.islazyloadingActivated, right: true } };
      }
    case 'LOAD_LEFT_DIR':
      newShouldStartLoading = LazyLoadingUtils.getNewStartLoadingStatus(weathermapContext.isLoaded, weathermapContext.shouldStartLoading, action.currentIdx, 'left', 'conserve');
      if (LazyLoadingUtils.isEqual(newShouldStartLoading, weathermapContext.shouldStartLoading)) {
        return { ...weathermapContext, islazyloadingActivated: { ...weathermapContext.islazyloadingActivated, right: false } };
      } else {
        return { ...weathermapContext, shouldStartLoading: newShouldStartLoading, islazyloadingActivated: { ...weathermapContext.islazyloadingActivated, right: true } };
      }
    default:
      return weathermapContext;
  }
}