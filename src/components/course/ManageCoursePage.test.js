import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe ('Manage Course Page', () => {

    it ('sets error message when trying to set title shorter than 3 characters', () => {
        const authors=[];
        const course = {
            id: "",
            title: "ab",
            watchHref: "",
            authorId: "",
            length: "",
            category: ""
        };

        const props = {
            course,
            authors,
            actions: {
                saveCourse: (course) => Promise.resolve()
            },
            router: {
                push: () => {}
            }
        };

        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveBtn = wrapper.find('button').last();

        saveBtn.simulate('click');

        const expected = "Title must contain at least three characters";
        const actual = wrapper.state().errors.title;
        expect(actual).toBe(expected);
    });
});

