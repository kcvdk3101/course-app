import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { coursesActions } from "../../redux/actions/coursesActions";
import { authorsActions } from "../../redux/actions/authorsActions";
import { newCourse } from "../../../tools/mockData";
import CourseForm from "./CourseForm.jsx";
import Spinner from "../../components/Spinner.jsx";
import { toast } from "react-toastify";

function ManageCoursePage({
  courses,
  authors,
  loadCourses,
  getAuthors,
  saveCourse,
  ...props
}) {
  const history = useHistory();
  const [course, setCourse] = useState({ ...props.course });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses();
    } else {
      setCourse({ ...props.course });
    }
    if (authors.length === 0) {
      getAuthors();
    }
  }, [props.course]);

  function formIsValid() {
    const { title, authorId, category } = course;
    const error = {};
    if (!title) error.title = "Title is required!";
    if (!authorId) error.author = "Author is required!";
    if (!category) error.category = "Category is required!";

    setErrors(error);
    //Form is valid if the error object still has no properties
    return Object.keys(errors).length === 0;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSaveCourse = async (event) => {
    event.preventDefault();
    setSaving(true);
    if (!formIsValid()) return;
    try {
      await saveCourse(course);
      await history.push("/courses");
      toast.success("🎉 Course saved! 🎉");
    } catch (error) {
      setSaving(false);
    } finally {
      setSaving(false);
    }
  };

  return courses.length === 0 || authors.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      errors={errors}
      authors={authors}
      onChange={handleChange}
      onSave={handleSaveCourse}
      saving={saving}
    />
  );
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  getAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
};

function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;

  return {
    course,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses: coursesActions.loadCourses,
  saveCourse: coursesActions.saveCourse,
  getAuthors: authorsActions.getAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
