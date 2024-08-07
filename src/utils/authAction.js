import store from '../store/store';
import { redirect } from 'react-router-dom';

export function getAuthToken() {
  const state = store.getState();
  const token = state.auth.token;
  if (!token) {
    return null;
  }
  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function cartAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/login');
  }
  return null;
}

export function loginAuthLoader() {
  const token = getAuthToken();
  if (token) {
    return redirect('/myorder');
  }
  return null;
}
