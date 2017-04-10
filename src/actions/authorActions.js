import * as actionTypes from './actionTypes';
import { startAjaxCall, completeAjaxCallWithError } from './ajaxStatusActions';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthors() {
    return function(dispatch) {
        dispatch(startAjaxCall());
        return AuthorApi.getAllAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(error => {
                dispatch(completeAjaxCallWithError(error));
                throw error;
            });
    };
}

function loadAuthorsSuccess(authors) {
    return {
        type: actionTypes.LOAD_AUTHORS_SUCCESS,
        authors: authors
    };
}