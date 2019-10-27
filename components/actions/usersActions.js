import {USER_DATA,UPDATED_USER_DATA} from './types'
export const setUsersData = (usersData) =>dispatch => (
    dispatch(  {
        type: USER_DATA,
        payload: usersData

    })
  )
  export const updateUsersData = (updatedUsersData) => dispatch=>(
      dispatch(  {
        type: UPDATED_USER_DATA,
        payload: updatedUsersData

    })
  )