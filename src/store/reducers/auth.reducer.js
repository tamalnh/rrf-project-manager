import { LOGIN_SUCCESS, SIGN_OUT } from '../actions/types.action';

const initialState = { 
}

const authReducer = ( state=initialState, action ) => {
    switch (action.type) { 
        case LOGIN_SUCCESS:
            return {
                ...state, 
            }   

        case SIGN_OUT:
            return  state

        default:
           return state;
    }
}

export default authReducer;