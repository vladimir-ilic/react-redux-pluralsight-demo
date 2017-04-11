import expect from 'expect';
import React from 'react';
import * as actionTypes from './actionTypes';
import * as ajaxActionTypes from './ajaxStatusActionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('Course Actions sync', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            // arrange
            const newCourse = { id: 'new-course', title: 'new course' };

            // act
            const actual = courseActions.createCourseSuccess(newCourse);

            // assert
            const expected = { type: actionTypes.CREATE_COURSE_SUCCESS, course: newCourse };
            expect(actual).toEqual(expected);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Course Actions async', () => {
    describe('loadCourses', () => {
        it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
            // arrange
            const expectedActions = [
                { type: ajaxActionTypes.AJAX_CALL_START},
                { type: actionTypes.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
            ];

            // act
            const store = mockStore({courses: []}, expectedActions, done);

            // assert
            store.dispatch(courseActions.loadCourses())
                .then(() => {
                    const actions = store.getActions();
                    expect(actions[0].type).toEqual(ajaxActionTypes.AJAX_CALL_START);
                    expect(actions[1].type).toEqual(actionTypes.LOAD_COURSES_SUCCESS);
                    done();
                });
        });
    });
});


