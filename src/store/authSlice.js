import { createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, eraseCookie } from '../utils/cookie';

const initialState = {
  token: getCookie('token'),
  role: getCookie('role'),
  // isAuthenticated: !!getCookie('token'),
  user: getCookie('user') ? JSON.parse(getCookie('user')) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, role, user, message } = action.payload;

      // message에서 특정 부분을 파싱하여 쿠키에 저장
      const userName = message.split('님')[0];

      state.token = token;
      state.role = role;
      // state.isAuthenticated = true;
      state.user = user;

      setCookie('token', token, 7, { secure: true, sameSite: 'Strict' });
      setCookie('role', role, 7, { secure: true, sameSite: 'Strict' });
      setCookie('user', JSON.stringify(user), 7, {
        secure: true,
        sameSite: 'Strict',
      });
      setCookie('userId', userName, 7, {
        secure: true,
        sameSite: 'Strict',
      });
    },
    clearCredentials: state => {
      state.token = null;
      state.role = null;
      // state.isAuthenticated = false;
      state.user = null;
      eraseCookie('token');
      eraseCookie('role');
      eraseCookie('user');
      eraseCookie('userId'); // userId 쿠키도 삭제
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
