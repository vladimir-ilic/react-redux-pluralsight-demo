import * as actionTypes from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthors() {
    return function(dispatch) {
        return AuthorApi.getAllAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(error => { throw error; });
    };
}

function loadAuthorsSuccess(authors) {
    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors: authors
    };
}