import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import CourseForm from './CourseForm';

function setup(saving = false) {
    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const wrapper = setup(false);
        let saveBtn = wrapper.find('button');
        expect(saveBtn.node.props.children).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const wrapper = setup(true);
        let saveBtn = wrapper.find('button');
        expect(saveBtn.node.props.children).toBe('Saving...');
    });

    it('save button is disabled when saving', () => {
        const wrapper = setup(true);
        let saveBtn = wrapper.find('button');
        expect(saveBtn.node.props.disabled).toBe(true);
    });
});

