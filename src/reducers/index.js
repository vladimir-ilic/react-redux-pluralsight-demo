import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxCallReducer from './ajaxCallReducer';

const rootReducer = combineReducers({
    courses: courseReducer,
    authors: authorReducer,
    ajaxCallsInProgress: ajaxCallReducer
});

export default rootReducer;