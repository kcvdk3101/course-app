import { actionTypes } from './actionTypes'
import { apiStatusActions } from './apiStatusActions'
import * as courseApi from '../../api/courseApi'

function loadCourses() {
  return async function (dispatch) {
    dispatch(apiStatusActions.beginApiCall())
    try {
      const data = await courseApi.getCourses()
      dispatch(loadCoursesSuccessfully(data))
    } catch (error) {
      dispatch(apiStatusActions.apiCallError())
    }
  }
}

function loadCoursesSuccessfully(courses) {
  return {
    type: actionTypes.LOAD_COURSES_SUCCESSFULLY,
    courses
  }
}

function saveCourse(course) {
  return async function (dispatch) {
    dispatch(apiStatusActions.beginApiCall())
    try {
      const data = await courseApi.saveCourse(course)
      dispatch(saveCourseSuccessfully(data))
    } catch (error) {
      dispatch(apiStatusActions.apiCallError())
      throw new Error(error.message)
    }
  }
}

function saveCourseSuccessfully(course) {
  if (course.id) return { type: actionTypes.UPDATE_COURSE_SUCCESSFULLY, course };
  return {
    type: actionTypes.CREATE_COURSE_SUCCESSFULLY,
    course
  }
}

function deleteCourse(course) {
  return function (dispatch) {
    dispatch(deleteCourseOptimistic(course))
    return courseApi.deleteCourse(course.id)
  }
}

function deleteCourseOptimistic(course) {
  return {
    type: actionTypes.DELETE_COURSE_OPTIMISTIC,
    course
  }
}

export const coursesActions = {
  loadCourses,
  saveCourse,
  deleteCourse,
  loadCoursesSuccessfully,
  saveCourseSuccessfully,
  deleteCourseOptimistic
}