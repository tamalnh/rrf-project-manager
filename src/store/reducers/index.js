import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import projectReducer from './project.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;