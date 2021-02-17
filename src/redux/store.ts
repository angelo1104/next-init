import { configureStore, createReducer } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todoReducer from "./todoState";

export interface State {
  tick: string;
}

// create your reducer
const reducer = createReducer(
  {
    tick: "init",
  },
  {
    HYDRATE: (state, action) => {
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    },
    TICK: (state, action) => {
      return {
        ...state,
        tick: action.payload,
      };
    },
  },
);

const store = configureStore({
  reducer: {
    todos: todoReducer,
    tick: reducer,
  },
});

// create a makeStore function
const makeStore: any = () => store;

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
export type AppDispatch = typeof store.dispatch;
