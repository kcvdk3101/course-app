import coursesReducer from './coursesReducer'
import { coursesActions } from '../actions/coursesActions'
import { actionTypes } from '../actions/actionTypes'

it(`should add course when passed ${actionTypes.CREATE_COURSE_SUCCESSFULLY} `, () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    },
  ]

  const newCourse = {
    title: "C"
  }

  const action = coursesActions.saveCourseSuccessfully(newCourse)

  // act
  const newState = coursesReducer(initialState, action)

  // assert
  expect(newState.length).toEqual(3)
  expect(newState[0].title).toEqual("A")
  expect(newState[1].title).toEqual("B")
  expect(newState[2].title).toEqual("C")

})

it(`should update course when passed ${actionTypes.UPDATE_COURSE_SUCCESSFULLY}`, () => {
  // arrange
  const initialState = [
    {
      id: 1,
      title: "A"
    },
    {
      id: 2,
      title: "B"
    },
    {
      id: 3,
      title: "C"
    },
  ]

  const updateCourse = { id: 1, title: "Updated title" }
  const action = coursesActions.saveCourseSuccessfully(updateCourse)

  // action
  const newState = coursesReducer(initialState, action)
  const updatedCourse = newState.find(s => s.id === updateCourse.id)

  // assert
  expect(newState.length).toEqual(3)
  expect(updatedCourse.title).toEqual("Updated title")

})

