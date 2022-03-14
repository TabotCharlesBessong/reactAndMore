import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./ActionTypes"

export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUserSuccess = () => {
  return {
    type: FETCH_USERS_SUCCESS,
    // payload:users
  }
}

export const fetchUserFailure = () => {
  return {
    type: FETCH_USERS_FAILURE , 
    // payload:error

  }
}
