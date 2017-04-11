import expect from 'expect';
import React from 'react';
import courseReducer from './courseReducer';
import * as actionTypes from '../actions/actionTypes';

describe('Course Reducer', () => {
    it('should add course when passed CREATE_COURSE_SUCCESS', () => {
        // arrange
        const state = [
            { id: 'course-1', title: 'Course 1' },
            { id: 'course-2', title: 'Course 2' }
        ];
        const newCourse = { id: 'new-course', title: 'New Course' };
        const action = { type: actionTypes.CREATE_COURSE_SUCCESS, course: newCourse };

        // act
        const actual = courseReducer(state, action);

        // assert
        const expected = [
            { id: 'course-1', title: 'Course 1' },
            { id: 'course-2', title: 'Course 2' },
            { id: 'new-course', title: 'New Course' }
        ];
        expect(actual).toEqual(expected);
    });

    it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
        // arrange
        const state = [
            { id: 'course-1', title: 'Course 1' },
            { id: 'course-2', title: 'Course 2' },
            { id: 'course-3', title: 'Course 3' }
        ];
        const updatedCourse = { id: 'course-2', title: 'Updated Course' };
        const action = { type: actionTypes.UPDATE_COURSE_SUCCESS, course: updatedCourse };

        // act
        const actual = courseReducer(state, action);

        // assert
        const expected = [
            { id: 'course-1', title: 'Course 1' },
            { id: 'course-3', title: 'Course 3' },
            { id: 'course-2', title: 'Updated Course' }
        ];
        expect(actual).toEqual(expected);
    });
});