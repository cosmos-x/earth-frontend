const initialState = {
  user: null,
  logining: false,
  message: ''
}

/*
 action type of LOGIN
 */
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const LOGIN_STARTED = 'LOGIN_STARTED'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'

// reducer for LOGIN
const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_STARTED:
      return {
        ...state,
        logining: true
      }
    case LOGIN_SUCCESS:
      return {
        user: action.result,
        logining: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        logining: false,
        message: action.error

      }
    case LOGOUT:
      return {
        user: null,
        logining: false,
        message: ''
      }
    default:
      return state
  }
}

// -------action  creators----------
export const login = (user) => ({
  type: LOGIN,
  user
})
export const logout = () => ({
  type: LOGOUT
})

export const startLogin = () => ({
  type: LOGIN_STARTED
})

export const finishLogin = (result) => ({
  type: LOGIN_SUCCESS,
  result
})
export const failLogin = (error) => ({
  type: LOGIN_FAILURE,
  error
})
export const loginSuccess = () => ({
  msg: '登录成功',
  msgType: 'success'
})
export const loginFail = (error) => ({
  msg: error,
  msgType: 'warning'
})

export default user