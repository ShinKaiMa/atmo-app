export const UserSelectedModelViewReducer = (selectedModelViewInfo, action) => {
    switch (action.type) {
      case 'SET_MODEL':
        console.log('SET_MODEL!');
        return {...selectedModelViewInfo ,model:action.payload};
      case 'SET_AREA':
        console.log('SET_AREA!');
        return {...selectedModelViewInfo ,area:action.payload};
      default:
        return selectedModelViewInfo;
    }
  }