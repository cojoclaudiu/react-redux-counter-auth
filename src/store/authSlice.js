import { createSlice } from '@reduxjs/toolkit';

const initialAuth = {
  isAuthentificated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.isAuthentificated = true;
    },
    logout(state) {
      state.isAuthentificated = false;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
