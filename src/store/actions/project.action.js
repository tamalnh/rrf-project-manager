import { CREATE_PROJECT } from './types.action';

export const createProject = project => {
    return (dispatch, getState) => { 
        dispatch({
            type: CREATE_PROJECT,
            payload: project
        })
    }

}// start with 15