import { actionTypes } from "../actions/actionTypes";
import { initialState } from "./initialState";

export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case actionTypes.LOAD_COURSES_SUCCESSFULLY:
      return action.courses
    case actionTypes.CREATE_COURSE_SUCCESSFULLY:
      return [...state, { ...action.course }]
    case actionTypes.UPDATE_COURSE_SUCCESSFULLY:
      console.log('activate')
      return state.map((course) => course.id === action.course.id ? action.course : course)
    case actionTypes.DELETE_COURSE_OPTIMISTIC:
      // Show new updated courses immediately 
      return state.filter(course => course.id !== action.course.id)
    default:
      return state;
  }
}