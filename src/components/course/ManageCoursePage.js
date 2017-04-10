import React from 'react';
import { withRouter } from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toastr from 'toastr';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.updateCourse = this.updateCourse.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.course.id !== this.props.course.id) {
            this.setState({ course: Object.assign({},  nextProps.course) });
        }
    }
    updateCourse(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let course = this.state.course;
        course[fieldName] = fieldValue;

        this.setState({course: course});
    }

    validateData(course) {
        let dataIsValid = true;
        let errors = {};

        if (course.title.length < 3) {
            dataIsValid  = false;
            errors.title = "Title must contain at least three characters";
        }

        if (course.authorId.length === 0) {
            dataIsValid  = false;
            errors.author = "Course must have an author selected";
        }

        if (course.category.length < 3) {
            dataIsValid  = false;
            errors.category = "Category must contain at least three characters";
        }

        let timeRegex = /^(\d+):([0-5]\d)$/;
        if (!timeRegex.test(course.length)) {
            dataIsValid  = false;
            errors.length = "Length must be in the format HH:mm";
        }

        this.setState({errors});
        return dataIsValid;
    }

    onSave(event) {
        event.preventDefault();

        let course = this.state.course;
        if (!this.validateData(course))
            return;

        this.setState({ saving: true });
        this.props.actions.saveCourse(course)
            .then(() => {
                this.setState({ saving: false });
                toastr.success(`Course '${course.title}' saved.`);
                this.props.router.push('/courses');
            })
            .catch(error => {
                this.setState({ saving: false });
                toastr.error(error);
            });
    }

    render() {
        return (
            <div>
                <CourseForm
                    course={this.state.course}
                    allAuthors={this.props.authors}
                    errors={this.state.errors}
                    onChange={this.updateCourse}
                    onSave={this.onSave}
                    saving={this.state.saving}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired,
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    }).isRequired
};

function findCourseById(courseId, courses) {
    if (courseId) {
        let coursesById = courses.filter(course => course.id === courseId);
        if (coursesById.length > 0) {
            return coursesById[0];
        }
    }

    return {
        id: "",
        title: "",
        watchHref: "",
        authorId: "",
        length: "",
        category: ""
    };
}
function mapStateToProps(state, ownProps) {
    let course = findCourseById(ownProps.params.id, state.courses);

    return {
        course: course,
        authors: mapAuthorsToSelectView(state.authors)
    };
}

function mapAuthorsToSelectView(authors) {
    return authors.map(author => { return { value: author.id, text: (author.firstName + " " + author.lastName) }; });
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCoursePage));