import { storeToken, storeUser } from '../../helpers/authentication';

/** Types */
export const Types = {
    DO_LOGIN: "@user/DO_LOGIN",
    LOGIN_SUCCESS: "@user/LOGIN_SUCCESS",
    LOGIN_ERROR: "@user/LOGIN_ERROR",
    DO_LOGOUT: "@user/DO_LOGOUT",
    
    
}
/** Actions */
export const Actions = {
  doLogin: (inputUser, inputPass) => {
      return (dispatch) => {
        dispatch({ type: Types.DO_LOGIN })
        if((inputUser ==  process.env.USER) && 
           (inputPass ==  process.env.PASS)) {
             console.log("login ok")
          storeToken(process.env.PASS)
          storeUser(process.env.USER);
          dispatch({ type: Types.LOGIN_SUCCESS, name: inputUser });
        }else {
          console.log("login error")
          dispatch({ type: Types.LOGIN_ERROR });
        }        
      }
   
  }
}


/** Reducer */

export const INITIAL_STATE = {
  name: "",
  isLoading: false,
  error: false
};
export default function user(state = INITIAL_STATE, action){
  switch (action.type) {
    case Types.DO_LOGIN:
        return { ...state, loading: true, error: false };  
    case Types.LOGIN_SUCCESS:
      return { 
             ...state,
             name: action.name,
             loading: false, 
             error: false
      };
      case Types.LOGIN_ERROR:
        return { 
          ...state,
          loading: false,
          error: true
        };  
    default:
      return state;
  }
}

