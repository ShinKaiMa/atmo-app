export const AppStatusReducer = (appStatus, action) => {
  switch (action.type) {
    case 'SET_WINDOW_SIZE':
      return { ...appStatus, windowSize: action.windowSize, isLandscape: action.isLandscape };
    case 'SET_IS_LOADING':
      return { ...appStatus, isLoading: action.payload };
    case 'SET_IS_NAV_HIDE':
      return { ...appStatus, isNavHide: action.payload };
    case 'SET_IS_BOT_NAV_HIDE':
      return { ...appStatus, isBotNavHide: action.payload };
    case 'SET_IS_MOBILE':
      return { ...appStatus, isMobile: action.payload };
    default:
      return appStatus;
  }
}