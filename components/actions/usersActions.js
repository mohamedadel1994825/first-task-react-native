import { USER_DATA, UPDATED_USER_DATA, USER_PRESSED } from './types'
export const setUsersData = (usersData) => dispatch => (
  dispatch({
    type: USER_DATA,
    payload: usersData
  })
)
export const updateUsersData = (updatedUsersData) => dispatch => (
  dispatch({
    type: UPDATED_USER_DATA,
    payload: updatedUsersData
  })
)
export const setUserPressedData = (userPressedData) => dispatch => (
  dispatch({
    type: USER_PRESSED,
    payload: userPressedData
  })
)