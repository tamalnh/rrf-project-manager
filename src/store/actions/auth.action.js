

import { LOGIN_SUCCESS, SIGN_OUT, GET_ERROR } from './types.action';


export const signInUser = user => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(() => {
            dispatch({
                type: LOGIN_SUCCESS
            })
        })
         .catch(err => {
             dispatch({
                 type: GET_ERROR,
                 payload: err
             })
         })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        
        firebase.auth()
                .signOut()
                .then(() => {
                    dispatch({
                        type: SIGN_OUT
                    })
                })
                .catch(err => {
                    dispatch({
                        type: GET_ERROR,
                        payload: err
                    })
                })
    }       
}