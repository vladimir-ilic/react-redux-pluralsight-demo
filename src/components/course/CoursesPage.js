import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCourseSave = this.onCourseSave.bind(this);
    }

    onTitleChange(event) {
        let course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onCourseSave() {
        // use dispatch directly
        //this.props.dispatch(courseActions.createCourse(this.state.course));

        // or map actions manually
        //this.props.actions.createCourse(this.state.course);

        // or bind all actions
        this.props.actions.createCourse(this.state.course);
    }

    createCourseRow(course, index) {
        return (<div key={index}>{course.title}</div>);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.createCourseRow)}
                <h2>Add Course</h2>
                <input type="text" value={this.state.course.title} onChange={this.onTitleChange}/>
                <input type="submit" value="Save" onClick={this.onCourseSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: React.PropTypes.array.isRequired,
    //dispatch: React.PropTypes.func.isRequired // use dispatch directly
    //createCourse: React.PropTypes.func.isRequired // map actions manually
    actions: React.PropTypes.object.isRequired // bind all actions
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    // map actions manually
    // return { createCourse: course => dispatch(courseActions.createCourse(course)) };

    // bind all actions
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

// use dispatch directly - ommit mapDispatchToProps param
//export default connect(mapStateToProps)(CoursesPage);
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
