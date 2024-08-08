import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, eraseCookie } from '../utils/cookie';

const initialState = {
  token: getCookie('token'),
  role: getCookie('role'),
  isAuthenticated: !!getCookie('token'),
  user: getCookie('user') ? JSON.parse(getCookie('user')) : null,
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
      setCookie('role', role, 7, { secure: true, sameSite: 'Strict' });
      setCookie('user', JSON.stringify(user), 7, {
        secure: true,
        sameSite: 'Strict',
      });
    },
    clearCredentials: state => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;
      state.user = null;
      eraseCookie('token');
      eraseCookie('role');
      eraseCookie('user');
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
