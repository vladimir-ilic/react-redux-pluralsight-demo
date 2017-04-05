import * as actionTypes from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function createCourse(course) {
    return {
        type: actionTypes.CREATE_COURSE,
        course
    };
}

export function loadCoursesSuccess(courses) {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function loadCourses() {
    return function(dispatch) {
        CourseApi.getAllCourses()
            .then(courses => dispatch(loadCoursesSuccess(courses)))
            .catch(error => { throw error; });
    };
}