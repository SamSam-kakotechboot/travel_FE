import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, eraseCookie } from '../utils/cookie';

const initialState = {
  token: getCookie('token'),
  role: null,
  isAuthenticated: !!getCookie('token'),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, role, user } = action.payload;
      state.token = token;
      state.role = role;
      state.isAuthenticated = true;
      state.user = user;
      setCookie('token', token, 7, { secure: true, sameSite: 'Strict' });
    },
    clearCredentials: state => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.user = null;
      eraseCookie('token');
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
