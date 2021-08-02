import { actionTypes } from "./actionTypes";

function beginApiCall() {
  return {
    type: actionTypes.BEGIN_API_CALL,
  }
}

function apiCallError() {
  return {
    type: actionTypes.API_CALL_ERROR
  }
}

export const apiStatusActions = { beginApiCall, apiCallError }