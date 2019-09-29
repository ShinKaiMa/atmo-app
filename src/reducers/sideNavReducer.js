export const sideNavReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE':
        console.log('update!');
        return [...state,{test:"haha"}]
      default:
        return state;
    }
  }