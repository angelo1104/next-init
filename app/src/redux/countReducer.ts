import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  count: number;
  update: number;
};

const countSlice: any = createSlice({
  name: "count",
  initialState: {
    count: 0,
    update: 1,
  },
  reducers: {
    increment(state: SliceState, action: PayloadAction<null>) {
      return {
        ...state,
        count: state.count + state.update,
      };
    },
    decrement(state: SliceState, action: PayloadAction<null>) {
      return {
        ...state,
        count: state.count - state.update,
      };
    },
    setUpdate(state: SliceState, action: PayloadAction<number>) {
      return {
        ...state,
        update: action.payload,
      };
    },
  },
});

const { actions: countActions, reducer: countReducer } = countSlice;

export { countActions, countReducer };
