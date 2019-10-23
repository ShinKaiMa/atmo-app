export const ModelViewReducer = (modelViewInfo, action) => {
    switch (action.type) {
      case 'SET_AREA':
        console.log('SET_AREA!');
        return {...modelViewInfo ,selected:{...modelViewInfo.selected,area:action.payload}};
      default:
        return modelViewInfo;
    }
  }