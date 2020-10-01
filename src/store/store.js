import React from "react";
import * as actions from "./actions";
import * as reducers from "./reducers";

const redux = require("redux");

export const Store = () => {
  const createStore = redux.createStore;
  const combineReducers = redux.combineReducers;
  //   const BUY_CAKE = "BUY_CAKE";
  //   const BUY_CHOCLATE = "BUY_CHOCLATE";
  //   function buyCake() {
  //     return {
  //       type: BUY_CAKE,
  //       info: "first redux  action",
  //     };
  //   }

  //   function buyChocalte() {
  //     return {
  //       type: BUY_CHOCLATE,
  //       info: "first redux  action",
  //     };
  //   }

  //   const cake = {
  //     numberOfCakes: 10,
  //   };

  //   const choclate = {
  //     numOfChoclates: 15,
  //   };

  //   const cakeReducer = (state = cake, action) => {
  //     switch (action.type) {
  //       case BUY_CAKE:
  //         return {
  //           ...state,
  //           numberOfCakes: state.numberOfCakes - 1,
  //         };

  //       default:
  //         return state;
  //     }
  //   };
  //   const choclateReducer = (state = choclate, action) => {
  //     switch (action.type) {

  //       case BUY_CHOCLATE:
  //         return {
  //           ...state,
  //           numOfChoclates: state.numOfChoclates - 1,
  //         };
  //       default:
  //         return state;
  //     }
  //   };
  const rootReducer = combineReducers({
    cake: reducers.cakeReducer,
    choclate: reducers.choclateReducer,
  });
  const store = createStore(rootReducer);
  console.log("initial state", store.getState());
  const unsubscribe = store.subscribe(() =>
console.log("updated state", store.getState())
  );
  store.dispatch(actions.buyCake());
  store.dispatch(actions.buyCake());
  store.dispatch(actions.buyCake());
  store.dispatch(actions.buyChocalte());
  store.dispatch(actions.buyChocalte());
  store.dispatch(actions.buyChocalte());

  unsubscribe();

  return <h1>I am the redux store</h1>;
};
