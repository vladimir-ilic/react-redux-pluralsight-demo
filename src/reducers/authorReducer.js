import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function authorReducer(state = initialState.authors, action) {
    switch (action.type) {
        case actionTypes.LOAD_AUTHORS_SUCCESS:
            return loadAuthorsSuccess(action.authors);
        default:
            return state;
    }
}

function loadAuthorsSuccess(authors) {
    return authors;
}