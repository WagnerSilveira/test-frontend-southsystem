import axios from 'axios';
import history from '../../helpers/history';
import {
  successNotification,
  errorNotification,
} from '../../helpers/notification';
/** Types */
export const Types = {
  GET_ALL: '@dragons/GET_ALL',
  GET: '@dragons/GET',
  DELETE: '@dragons/DELETE',
  ERROR: '@dragons/ERROR',
  DELETE_ERROR: '@dragons/DELETE_ERROR',
  TOOGLE_LOADING: '@dragons/TOOGLE_LOADING',
};
/** Actions */
const baseURL = process.env.URL_API;
export const Actions = {
  toogleLoading: (dispatch) => {
    dispatch({ type: Types.TOOGLE_LOADING });
  },
  setError: (dispatch) => {
    dispatch({ type: Types.ERROR });
  },
  setGet: (dispatch, response) => {
    dispatch({ type: Types.GET, value: response.data });
  },
  setGetAll: (dispatch, response) => {
    dispatch({ type: Types.GET_ALL, value: response.data });
  },

  getDragons: () => (dispatch) => {
    Actions.toogleLoading(dispatch);
    axios.get(`${baseURL}/dragon`)
      .then((response) => {
        Actions.toogleLoading(dispatch);
        Actions.setGetAll(dispatch, response);
      })
      .catch(() => {
        Actions.toogleLoading(dispatch);
        Actions.setError(dispatch);
      });
  },

  getDragon: (id) => (dispatch) => {
    Actions.toogleLoading(dispatch);
    axios.get(`${baseURL}/dragon/${id}`)
      .then((response) => {
        Actions.toogleLoading(dispatch);
        Actions.setGet(dispatch, response);
      })
      .catch(() => {
        errorNotification('Ops!! Não foi possível buscar este Dragão!');
        Actions.setError(dispatch);
      });
  },
  addDragon: (name, type) => {
    const payload = { name, type };
    return (dispatch) => {
      Actions.toogleLoading(dispatch);
      axios.post(`${baseURL}/dragon`, payload)
        .then(() => {
          Actions.toogleLoading(dispatch);
          successNotification('Dragão inserido com sucesso !');
          history.push('/');
        })
        .catch(() => {
          Actions.toogleLoading(dispatch);
          errorNotification('Ops!! Não foi possível inserir!');
          Actions.setError(dispatch);
        });
    };
  },
  updateDragon: (id, name, type) => {
    const payload = { name, type };
    return (dispatch) => {
      Actions.toogleLoading(dispatch);
      axios.put(`${baseURL}/dragon/${id}`, payload)
        .then((response) => {
          Actions.toogleLoading(dispatch);
          Actions.setGet(dispatch, response);
          successNotification('Dragão atualizado !');
        })
        .catch(() => {
          errorNotification('Ops!! Não foi possível buscar este Dragão!');
          Actions.toogleLoading(dispatch);
          Actions.setError(dispatch);
        });
    };
  },

  deleteDragon: (id) => (dispatch) => {
    Actions.toogleLoading(dispatch);
    axios.delete(`${baseURL}/dragon/${id}`)
      .then(() => {
        successNotification('Dragão removido!');
        Actions.toogleLoading(dispatch);
        history.push('/');
      })
      .catch(() => {
        errorNotification('Ops!! Não foi possível remover!');
        Actions.toogleLoading(dispatch);
        Actions.setError(dispatch);
      });
  },
};


/** Reducer */

export const INITIAL_STATE = {
  list: [],
  detail: {},
  isLoading: false,
};
export default function dragons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOOGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case Types.GET_ALL:
      return { ...state, list: action.value, detail: {} };
    case Types.GET:
      return { ...state, list: [], detail: action.value };
    case Types.DELETE:
      return {
        ...state,
        detail: {},
        deleted: true,
        deleteError: false,
      };
    case Types.DELETE_ERROR:
      return {
        ...state,
        deleted: false,
        deleteError: true,
      };
    case Types.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
