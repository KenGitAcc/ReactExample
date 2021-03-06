import React, {PropTypes} from 'react';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        // this.state = {
        //     course: { title: "" }
        // };

        // this.onTitleChange = this.onTitleChange.bind(this);
        // this.onClickSave = this.onClickSave.bind(this);
    }
    // onTitleChange(event) {
    //     debugger;
    //     const course = this.state.course;
    //     course.title = event.target.value;
    //     this.setState({course: course});
    // }
    // onClickSave() {
    //     debugger;
    //     this.props.actions.createCourse(this.state.course);
    // }

    // courseRow(course, index) {
    //     return <div key={index}>{course.title}</div>;
    // }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
               <h1>Courses</h1>
               <input type="submit"
                      value="Add Course"
                      className="btn btn-primary"
                      onClick={this.redirectToAddCoursePage} />
               <CourseList courses={courses}/>             
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);