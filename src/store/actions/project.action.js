import { CREATE_PROJECT, GET_ERROR } from './types.action';

export const createProject = project => {
    return (dispatch, getState, {getFirebase, getFirestore}) => { 
        const fireStore = getFirestore();

        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Tam',
            authorLastName: 'San',
            authorId: '123456'
        }).then(() => {
            dispatch({
                type: CREATE_PROJECT,
                payload: project
            })
        }).catch((err) => { 
            dispatch({
                type: GET_ERROR,
                payload: err
            })
        })
    }

}