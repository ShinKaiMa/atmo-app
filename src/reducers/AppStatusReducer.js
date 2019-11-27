export const AppStatusReducer = (appStatus, action) => {
  switch (action.type) {
    case 'SET_IS_LOADING':
      console.log(`SET_IS_LOADING! ${action.payload}`);
      return { ...appStatus, isLoading: action.payload };
    default:
      return appStatus;
  }
}