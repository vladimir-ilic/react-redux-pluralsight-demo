import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = function ({course, allAuthors, onChange, onSave, saving, errors}) {

    return (
        <form action="" className="form">
            <h1>Manage Course</h1>
            <TextInput name="title"
                       label="Title"
                       value={course.title}
                       onChange={onChange}
                       placeholder="Please enter course title"
                       error = {errors.title} />
            <SelectInput name="authorId"
                         label="Author"
                         options={allAuthors}
                         value={course.authorId}
                         onChange={onChange}
                         defaultOption="Please select author"
                         error = {errors.author} />
            <TextInput name="category"
                       label="Category"
                       value={course.category}
                       onChange={onChange}
                       placeholder="Please enter the category for the course"
                       error = {errors.category} />
            <TextInput name="length"
                       label="Length"
                       value={course.length}
                       onChange={onChange}
                       placeholder="Please enter the length of the course (HH:mm)"
                       error = {errors.length} />
            {saving ?
                <button className="btn btn-lg btn-primary" disabled>Saving...</button> :
                <button className="btn btn-lg btn-primary" onClick={onSave}>Save</button>}
        </form>
    );
};

CourseForm.propTypes = {
    // destructured props 
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object
};

export default CourseForm;