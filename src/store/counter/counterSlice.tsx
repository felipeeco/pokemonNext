import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isReady: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    initCounterState: (state, action: PayloadAction<number>) => {
      if(state.isReady) return;
      state.value = action.payload;
      state.isReady = true;
    },
    decrement: (state) => {
      if(state.value <= 0) return;
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = 0;
    }
  },
});

export const { increment, decrement, resetCounter, initCounterState } = counterSlice.actions;
export default counterSlice.reducer;