import * as ajaxActionTypes from '../actions/ajaxStatusActionTypes';

export function startAjaxCall() {
    return { type: ajaxActionTypes.AJAX_CALL_START };
}

export function completeAjaxCallWithError(error) {
    return { type: ajaxActionTypes.AJAX_CALL_ERROR, error };
}

