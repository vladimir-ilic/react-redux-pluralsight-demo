import React from 'react';
import CourseRow from './CourseRow';

const CoursesList = function (props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Author</th>
                    <th>Lenngth</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map( course =>
                    <CourseRow key={course.id} course={course} />)}
            </tbody>
        </table>
    );
};

CoursesList.propTypes = {
    courses: React.PropTypes.array.isRequired
};

export default CoursesList;