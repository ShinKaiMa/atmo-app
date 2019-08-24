const initState = {}

const sidenavInfoReducer = (state = initState, action) => {
  console.log('call sidenavInfoReducer');
  switch (action.type) {
    case 'UPDATE_SIDENAV_INFO':
      console.log('get UPDATE_SIDENAV_INFO');
      return state;
    default:
      return state;
  }
};

export {sidenavInfoReducer};