import { actionTypes } from "../actions/actionTypes";
import { initialState } from "./initialState";

function actionTypeEndsInProgress(type) {
  return type.substring(type.length - 13) === "_SUCCESSFULLY"
}

export default function apiStatusReducer(state = initialState.apiCallsInProcess, action) {
  if (action.type === actionTypes.BEGIN_API_CALL) {
    return state + 1
  } else if (action.type === actionTypes.API_CALL_ERROR || actionTypeEndsInProgress(action.type)) {
    return state - 1
  }
  return state;
}