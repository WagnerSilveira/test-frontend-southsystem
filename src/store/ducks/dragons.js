import axios from 'axios';
import { 
  successNotification, 
  errorNotification
} from '../../helpers/notification';
/** Types */
export const Types = {
    GET_ALL: "@dragons/GET_ALL",
    GET: "@dragons/GET",
    DELETE: "@dragons/DELETE",
    ERROR: "@dragons/ERROR",
    DELETE_ERROR: "@dragons/DELETE_ERROR",
    LOADING: "@dragons/LOADING",
}
/** Actions */
const baseURL = process.env.URL_API;
export const Actions = {

  getDragons: () => {
      return (dispatch) => {
        dispatch({ type: Types.LOADING });
        axios.get(`${baseURL}/dragon`)
        .then(function (response) {
          dispatch({ type: Types.GET_ALL, value: response.data });
        })
        .catch(function (error) {
          console.error(error)
          dispatch({ type: Types.ERROR});
        })      
      }
   
  },

  getDragon: (id) => {
    return (dispatch) => {
      dispatch({ type: Types.LOADING });
      axios.get(`${baseURL}/dragon/${id}`)
        .then(function (response) {
          dispatch({ type: Types.GET, value: response.data });
        })
      .catch(function (error) {
        errorNotification(`Ops!! Não foi possível buscar este Dragão!`);
        dispatch({ type: Types.ERROR});
      });
    }
  },
  addDragon: (name, type) => {
    const payload = { name, type };
    return (dispatch) => {
      dispatch({ type: Types.LOADING });
      axios.post(`${baseURL}/dragon`, payload)
      .then((response) => {
        successNotification('Dragão inserido com sucesso !')
      })
      .catch(()  => {
        errorNotification(`Ops!! Não foi possível inserir!`);
        dispatch({ type: Types.ERROR });
      });
    }
  },
  updateDragon: (id, name, type) => {
    const payload = { name, type };
    return (dispatch) => {
      dispatch({ type: Types.LOADING });
      axios.put(`${baseURL}/dragon/${id}`, payload)
      .then((response) => {
        successNotification('Dragão atualizado !')
      })
      .catch(()  => {
        errorNotification(`Ops!! Não foi possível buscar este Dragão!`);
        dispatch({ type: Types.ERROR });
      });
    }
  },

  deleteDragon: (id) => {
    return (dispatch) => {
      dispatch({ type: Types.LOADING });
      axios.delete(`${baseURL}/dragon/${id}`)
        .then(function () {
          successNotification(`Dragão removido!`);
          dispatch({ type: Types.DELETE });
        })
      .catch(function (error) {
        errorNotification(`Ops!! Não foi possível remover!`);
        dispatch({ type: Types.DELETE_ERROR});
      });
    }
  }
}


/** Reducer */

export const INITIAL_STATE = {
  list: [],
  detail: {},
  isLoading: false,
  error: false,
};
export default function dragons(state = INITIAL_STATE, action){
  switch (action.type) {
    case Types.LOADING:
        return { 
          ...state,
          isLoading: !state.loading, 
          deleted: false,
          deleteError: false
        };  
    case Types.GET_ALL:
      return { ...state, list: action.value, error: false  };  
    case Types.GET:
      return { ...state, detail: action.value, error: false }; 
    case Types.DELETE:
      return {
         ...state,
        detail: {}, 
        deleted: true, 
        deleteError: false 
      }; 
    case Types.DELETE_ERROR:
      return { 
        ...state,
        deleted: false,
        deleteError: true
      }; 
    case Types.ERROR:
          return { ...state, error: true };
    default:
      return state;
  }
}

