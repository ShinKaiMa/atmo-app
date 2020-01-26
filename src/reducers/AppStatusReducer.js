export const AppStatusReducer = (appStatus, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      return { ...appStatus, isLoading: action.payload };
    default:
      return appStatus;
  }
}