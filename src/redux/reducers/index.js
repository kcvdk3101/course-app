import { combineReducers } from 'redux'
import authorsReducer from './authorsReducer'
import coursesReducer from './coursesReducer'
import apiCallsInProgress from './apiStatusReducer'

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors: authorsReducer,
  apiCallsInProgress
})

export default rootReducer