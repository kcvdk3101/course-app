import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { coursesActions } from "../../redux/actions/coursesActions";
import { authorsActions } from "../../redux/actions/authorsActions";
import { toast } from "react-toastify";
import Spinner from "../common/Spinner.jsx";
import ManageCourseList from "./ManageCourseList.jsx";

const CoursesPage = ({
  courses,
  loadCourses,
  getAuthors,
  loading,
  deleteCourse,
}) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        return await Promise.all([await loadCourses(), await getAuthors()]);
      } catch (error) {
        toast.error("Error" + error);
      }
    })();
  }, []);

  const handleDeleteCourse = async (course) => {
    try {
      toast.success("🎉 Course deleted! 🎉");
      await deleteCourse(course);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {redirectToAddCoursePage && <Redirect to="/course" />}
      <h1>Courses</h1>
      <button
        className="btn btn-primary"
        onClick={() => setRedirectToAddCoursePage(true)}
      >
        Add course
      </button>
      {loading ? (
        <Spinner />
      ) : courses.length === 0 ? (
        <h2>No more courses</h2>
      ) : (
        <ManageCourseList courses={courses} onDelete={handleDeleteCourse} />
      )}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  getAuthors: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteCourse: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
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
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = {
  loadCourses: coursesActions.loadCourses,
  deleteCourse: coursesActions.deleteCourse,
  getAuthors: authorsActions.getAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
