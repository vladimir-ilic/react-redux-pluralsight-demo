import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_COURSE:
            return createNewCourse(action.course, state);
        default:
            return state;
    }
}

function createNewCourse(course, state) {
    return [...state, Object.assign({}, course)];
}