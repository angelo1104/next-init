import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { countReducer } from "./countReducer";

export interface State {
  init: any;
  count: {
    count: number;
    update: number;
  };
}

const reducer = combineReducers({
  count: countReducer,
});

// create your reducer
// const rootReducer = createReducer(
//   {},
//   {
//     HYDRATE: (state, action) => {
//       // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//       // Read more about it here https://bit.ly/2ZsXbwA.
//       const nextState = {
//         ...state,
//         ...action.payload,
//       };
//
//       console.log("nexter", nextState);
//
//       return nextState;
//     },
//   },
// );

const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    // Attention! This will overwrite client state! Real apps should use proper reconciliation.
    // Read more about it here https://bit.ly/2ZsXbwA.
    const nextState = {
      ...state,
      ...action.payload,
    };

    return nextState;
  } else {
    return reducer(state, action);
  }
};

const store = configureStore({
  reducer: rootReducer,
});

// create a makeStore function
const makeStore: any = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
export type AppDispatch = typeof store.dispatch;
