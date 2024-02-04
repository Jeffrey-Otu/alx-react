import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const boundLogin = (email, password) => dispatch(login(email, password));

const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const boundLogout = () => dispatch(logout());

const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const res = await fetch("http://localhost:8564/login-success.json");
      const json = await res.json();
      return dispatch(loginSuccess());
    } catch (error) {
      return dispatch(loginFailure());
    }
  };
};


export { login, logout, displayNotificationDrawer, hideNotificationDrawer };
