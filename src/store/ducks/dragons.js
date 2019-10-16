import axios from 'axios';

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
          console.log('response.data ',response.data )
          dispatch({ type: Types.GET, value: response.data });
        })
      .catch(function (error) {
        console.error(error)
        dispatch({ type: Types.ERROR});
      });
    }
  },


  deleteDragon: (id) => {
    return (dispatch) => {
      dispatch({ type: Types.LOADING });
      axios.delete(`${baseURL}/dragon/${id}`)
        .then(function () {
          dispatch({ type: Types.DELETE });
        })
      .catch(function (error) {
        console.error(error)
        dispatch({ type: Types.ERROR});
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

