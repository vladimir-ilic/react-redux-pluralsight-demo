import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving = false) {
    let props = {
        course: {},
        saving: saving,
        errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);
    let output = renderer.getRenderOutput();

    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React Test Utils', () => {
    it('renders form and h1', () => {
        const { output } = setup();
        expect(output.type).toBe('form');
        let [ h1 ] = output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        const { output } = setup(false);
        let saveBtn = output.props.children[5];
        expect(saveBtn.type).toBe('button');
        expect(saveBtn.props.children).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const { output } = setup(true);
        let saveBtn = output.props.children[5];
        expect(saveBtn.type).toBe('button');
        expect(saveBtn.props.children).toBe('Saving...');
    });

    it('save button is disabled when saving', () => {
        const { output } = setup(true);
        let saveBtn = output.props.children[5];
        expect(saveBtn.type).toBe('button');
        expect(saveBtn.props.disabled).toBe(true);
    });
});
