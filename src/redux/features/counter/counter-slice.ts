import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrease: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
