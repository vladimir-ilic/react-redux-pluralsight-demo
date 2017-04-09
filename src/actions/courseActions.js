import * as actionTypes from './actionTypes';
import CourseApi from '../api/mockCourseApi';

export function loadCourses() {
    return function(dispatch) {
        CourseApi.getAllCourses()
            .then(courses => dispatch(loadCoursesSuccess(courses)))
            .catch(error => { throw error; });
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
        CourseApi.saveCourse(course)
            .then(newCourse => {
                course.id ?
                    dispatch(updateCourseSuccess(newCourse)) :
                    dispatch(createCourseSuccess(newCourse));
            })
            .catch(error => { throw error; });
    };
}

function updateCourseSuccess(course ) {
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course };
}

function createCourseSuccess(course) {
    return { type: actionTypes.CREATE_COURSE_SUCCESS, course };
}
