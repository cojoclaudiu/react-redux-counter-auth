import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  toggleCounter: true
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    }
  }
});
export const { increment, decrement, increaseBy, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;
