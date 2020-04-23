import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((err) => {
        alert("Loading courses failed" + err);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((err) => {
        alert("Loading authors failed" + err);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Course</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    //we need both course and author data before we can do this mapping
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//connect returns a function. That function then calls our component.

// function mapStateToProps(state) {
//   return {
//     courses: state.courses,
//   };
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: (course) => dispatch(courseActions.createCourse(course)),
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
