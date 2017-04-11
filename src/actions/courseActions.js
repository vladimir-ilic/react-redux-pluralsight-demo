import * as actionTypes from './actionTypes';
import { startAjaxCall, completeAjaxCallWithError } from './ajaxStatusActions';
import CourseApi from '../api/mockCourseApi';

export function loadCourses() {
    return function(dispatch) {
        dispatch(startAjaxCall());
        return CourseApi.getAllCourses()
            .then(courses => dispatch(loadCoursesSuccess(courses)))
            .catch(error => {
                dispatch(completeAjaxCallWithError(error));
                throw error;
            });
    };
}

function loadCoursesSuccess(courses) {
    return {
        type: actionTypes.LOAD_COURSES_SUCCESS,
        courses
    };
}

export function saveCourse(course) {
    return function(dispatch) {
        dispatch(startAjaxCall());
        return CourseApi.saveCourse(course)
            .then(newCourse => {
                course.id ?
                    dispatch(updateCourseSuccess(newCourse)) :
                    dispatch(createCourseSuccess(newCourse));
            })
            .catch(error => {
                dispatch(completeAjaxCallWithError(error));
                throw error;
            });
    };
}

export function updateCourseSuccess(course ) {
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}
