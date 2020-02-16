export const AppStatusReducer = (appStatus, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return { ...appStatus, isLoading: action.payload };
    case 'SET_IS_NAV_HIDE':
      return { ...appStatus, isNavHide: action.payload };
    case 'SET_IS_BOT_NAV_HIDE':
      return { ...appStatus, isBotNavHide: action.payload };
    case 'SET_IS_MOBILE':
      return { ...appStatus, isMobile: action.payload };
    case 'SET_IS_LAND_SCAPE':
      return { ...appStatus, isLandscape: action.payload };
    default:
      return appStatus;
  }
}