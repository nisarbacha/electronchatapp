import { combineReducers } from "redux";
import { createErrorReducer, createIsFetchingReducer } from "./common"


const createloginReducer = () =>
  combineReducers({
    isChecking: createIsFetchingReducer('AUTH_LOGIN'),
    error: createErrorReducer('AUTH_LOGIN')
  })
const createregisterReducer = () =>
  combineReducers({
    isChecking: createIsFetchingReducer('AUTH_REGISTER'),
    error: createErrorReducer('AUTH_REGISTER')
  })
function createReducer() {
  const user = (state = null, action) => {
    switch (action.type) {

      case "AUTH_ON_ERROR":
      case "AUTH_ON_INIT":
        return null
      case "AUTH_REGISTER_SUCCESS":
      case "AUTH_LOGIN_SUCCESS":
      case "AUTH_ON_SUCCESS":
        return action.user;
      default:
        return state;
    }
  }


  return combineReducers({
    user,
    isChecking: createIsFetchingReducer('AUTH_ON'),
    login: createloginReducer(),
    register: createregisterReducer()
  })

}
export default createReducer()