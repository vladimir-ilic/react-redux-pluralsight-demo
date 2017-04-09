import React from 'react';
import { Link } from 'react-router';

const CourseRow  = function(props) {
    const course = props.course;
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={"/course/" + course.id}>{course.title}</Link></td>
            <td>{course.category}</td>
            <td>{course.authorId}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseRow.propTypes = {
    course: React.PropTypes.object.isRequired
};

export default CourseRow;