export const WeathermapInfoReducer = (weathermapInfo, action) => {
    switch (action.type) {
      case 'SET_INFO':
        console.log(`SET_INFO! ${JSON.stringify(action.payload)}`);
        return action.payload;
      default:
        return weathermapInfo;
    }
  }