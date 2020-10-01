import * as types from './types';

  const cake = {
    numberOfCakes: 10,
  };

  const choclate = {
    numOfChoclates: 15,
  };
export const cakeReducer = (state = cake, action) => {
    switch (action.type) {
      case types.BUY_CAKE:
        return {
          ...state,
          numberOfCakes: state.numberOfCakes - 1,
        };
     
      default:
        return state;
    }
  };
  export const choclateReducer = (state = choclate, action) => {
    switch (action.type) {
    
      case types.BUY_CHOCLATE:
        return {
          ...state,
          numOfChoclates: state.numOfChoclates - 1,
        };
      default:
        return state;
    }
  };