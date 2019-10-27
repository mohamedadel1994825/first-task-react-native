import { USER_DATA,UPDATED_USER_DATA } from '../actions/types';
const initialState = {
    usersData: [],
    user: [],
    updatedUsersData:[]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                usersData: action.payload,
            }
            case UPDATED_USER_DATA:
            return {
                ...state,
                updatedUsersData: action.payload,
            }
        default:
            return state
    }
}