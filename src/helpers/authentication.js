import {
  getItem,
  setItem,
  removeItem,
} from './localStorage';

export const isAuthenticated = () => {
  const token = getItem('token');
  if (token) {
    return true;
  }
  return false;
};

export const storeToken = (pass) => {
  setItem('token', pass);
  return true;
};
export const storeUser = (user) => {
  setItem('user', user);
  return true;
};
export const getUser = () => getItem('user');

export const logout = () => {
  removeItem('user');
  removeItem('token');
  return true;
};
