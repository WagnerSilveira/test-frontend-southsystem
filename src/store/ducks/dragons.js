import axios from 'axios';

/** Types */
export const Types = {
    GET_ALL: "@dragons/GET_ALL",
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
      
        })
        .finally(function () {
          // always executed
        });
      }
   
  }
}


/** Reducer */

export const INITIAL_STATE = {
  list: [],
  isLoading: false,
};
export default function dragons(state = INITIAL_STATE, action){
  switch (action.type) {
    case Types.GET_ALL:
      return { ...state, list: action.value };  
    default:
      return state;
  }
}

