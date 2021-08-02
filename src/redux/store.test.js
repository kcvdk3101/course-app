import { createStore } from 'redux'
import rootReducer from './reducers'
import { initialState } from './reducers/initialState'
import { coursesActions } from './actions/coursesActions'

it("should handle creat courses", () => {
  // arrange
  const store = createStore(rootReducer, initialState)
  const course = { title: "Clean Code Course" }

  // action
  const action = coursesActions.saveCourseSuccessfully(course)
  store.dispatch(action)

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course)

})