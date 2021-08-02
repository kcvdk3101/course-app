import { coursesActions } from './coursesActions'
import { actionTypes } from './actionTypes'
import { courses } from '../../../tools/mockData'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

// Test an async action
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

// Use fetchMock to mock the fetch call in thunks
describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  describe('load courses thunk', () => {
    it(`should create ${actionTypes.BEGIN_API_CALL} and ${actionTypes.LOAD_COURSES_SUCCESSFULLY} when loading courses`, () => {
      // arrangement
      fetchMock.mock('*', {
        body: courses,
        headers: { "content-type": "application/json" }
      })

      // action
      const expectedActions = [
        { type: actionTypes.BEGIN_API_CALL },
        { type: actionTypes.LOAD_COURSES_SUCCESSFULLY, courses }
      ]

      // assert
      const store = mockStore({ courses: [] })
      // return store.dispatch(coursesActions.loadCourses()).then(() => {
      //   console.log(store.getActions())
      //   expect(store.getActions()).toEqual(expectedActions)
      // })
    })
  })

})


describe("updateCourseSuccessfully", () => {
  it(`should create a ${actionTypes.UPDATE_COURSE_SUCCESSFULLY} action`, () => {
    // arrangement
    const course = courses[0]
    const expectedAction = {
      type: actionTypes.UPDATE_COURSE_SUCCESSFULLY,
      course
    }

    // action
    const action = coursesActions.saveCourseSuccessfully(course)

    // assert
    expect(action).toEqual(expectedAction)
  })
})