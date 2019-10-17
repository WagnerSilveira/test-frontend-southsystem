import {
  storeToken, storeUser, logout, getUser,
} from '../../helpers/authentication';
import {
  successNotification,
  errorNotification,
} from '../../helpers/notification';

/** Types */
export const Types = {
  DO_LOGIN: '@user/DO_LOGIN',
  LOGIN_SUCCESS: '@user/LOGIN_SUCCESS',
  LOGIN_ERROR: '@user/LOGIN_ERROR',
  DO_LOGOUT: '@user/DO_LOGOUT',


};
/** Actions */
export const Actions = {
  doLogin: (inputUser, inputPass) => (dispatch) => {
    dispatch({ type: Types.DO_LOGIN });
    if ((inputUser === process.env.USER)
           && (inputPass === process.env.PASS)) {
      storeToken(process.env.PASS);
      storeUser(process.env.USER);
      successNotification('Usuário logado com sucesso');
      dispatch({ type: Types.LOGIN_SUCCESS, name: inputUser });
    } else {
      errorNotification('Usuário ou senha inválidos');
      dispatch({ type: Types.LOGIN_ERROR });
    }
  },

  logout: () => (dispatch) => {
    logout();
    dispatch({ type: Types.DO_LOGOUT });
  },


};


/** Reducer */

export const INITIAL_STATE = {
  name: getUser() || '',
  isLoading: false,
  error: false,
};
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DO_LOGIN:
      return { ...state, loading: true, error: false };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        name: action.name,
        loading: false,
        error: false,
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case Types.DO_LOGOUT:
      return {
        ...state,
        loading: false,
        error: false,
        name: '',

      };
    default:
      return state;
  }
}
