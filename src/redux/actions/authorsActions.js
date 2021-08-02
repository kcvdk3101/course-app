import { actionTypes } from './actionTypes'
import { apiStatusActions } from './apiStatusActions'
import * as authorApi from '../../api/authorApi'

function getAuthors() {
  return async function (dispatch) {
    dispatch(apiStatusActions.beginApiCall());
    try {
      const data = await authorApi.getAuthors()
      dispatch(getAuthorsSuccessfully(data))
    } catch (error) {
      dispatch(apiStatusActions.apiCallError())
      throw new Error(error)
    }
  }
}

function getAuthorsSuccessfully(authors) {
  return {
    type: actionTypes.LOAD_AUTHORS_SUCCESSFULLY,
    authors
  }
}

export const authorsActions = { getAuthors }