import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_COURSE:
            return createNewCourse(action.course, state);
        case actionTypes.LOAD_COURSES_SUCCESS:
            return loadCoursesSuccess(action.courses);
        default:
            return state;
    }
}

function loadCoursesSuccess(courses) {
    return courses;
}
function createNewCourse(course, state) {
    return [...state, Object.assign({}, course)];
}