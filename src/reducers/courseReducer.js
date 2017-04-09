import * as actionTypes from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.CREATE_COURSE_SUCCESS:
            return createNewCourseSuccess(action.course, state);
        case actionTypes.UPDATE_COURSE_SUCCESS:
            return updateCourseSuccess(action.course, state);
        case actionTypes.LOAD_COURSES_SUCCESS:
            return loadCoursesSuccess(action.courses);
        default:
            return state;
    }
}

function loadCoursesSuccess(courses) {
    return courses;
}
function createNewCourseSuccess(newCourse, state) {
    return [...state, Object.assign({}, newCourse)];
}
function updateCourseSuccess(newCourse, state) {
    return [...state.filter(course => course.id !== newCourse.id), Object.assign({}, newCourse)];
}
