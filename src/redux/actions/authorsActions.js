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

function saveAuthor(author) {
  return async function (dispatch) {
    dispatch(apiStatusActions.beginApiCall())
    try {
      const data = await authorApi.saveAuthor(author)
      console.log(data);
      dispatch(saveAuthorSuccessfully(data))
    } catch (error) {
      dispatch(apiStatusActions.apiCallError())
      throw new Error(error.message)
    }
  }
}

function saveAuthorSuccessfully(author) {
  if (author.id) return { type: actionTypes.UPDATE_AUTHOR_SUCCESSFULLY, author };
  return {
    type: actionTypes.CREATE_AUTHOR_SUCCESSFULLY,
    author
  }
}



export const authorsActions = { getAuthors, saveAuthor }