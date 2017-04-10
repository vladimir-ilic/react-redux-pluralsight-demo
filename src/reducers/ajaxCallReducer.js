import initialState from './initialState';
import * as ajaxActionTypes from '../actions/ajaxStatusActionTypes';

export default function ajaxCallReducer(state = initialState.ajaxCallsInProgress, action) {
    if (ajaxCallStarted(action.type)) {
        return state = state + 1;
    } else if (ajaxCallCompleted(action.type)) {
        return state = state - 1;
    }

    return state;
}

function ajaxCallStarted(actionType) {
    return actionType === ajaxActionTypes.AJAX_CALL_START;
}

function ajaxCallCompleted(actionType) {
    return (ajaxCallSuccess(actionType) || ajaxCallError(actionType));
}

function ajaxCallSuccess(actionType) {
    return actionType.endsWith(ajaxActionTypes.AJAX_CALL_SUCCESS_SUFFIX);
}

function ajaxCallError(actionType) {
    return actionType === ajaxActionTypes.AJAX_CALL_ERROR;
}

