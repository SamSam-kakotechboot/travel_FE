// features/auth/authActions.js
import { loginSuccess } from '../store/authSlice';

export const login = (username, password) => async dispatch => {
  try {
    const response = await fetch('/src/testdata/login.json');
    const users = await response.json();

    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      const mockToken = 'mockToken123456'; // 목업 토큰 생성
      dispatch(loginSuccess({ token: mockToken, user }));
    } else {
      alert('Invalid credentials');
    }
  } catch (error) {
    console.error('Failed to fetch login data', error);
    alert('Failed to authenticate');
  }
};
