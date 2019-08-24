import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['data'],
  loginSuccess: ['payload'],
  loginFailure: null,
  setToken: ["screenName"],
  setTokenSuccess: null,
  setTokenFailed: ["error"],
  saveToken: ["username", "userData"],
  startup: ["screenName"],
  existingLogin: ["token", "screenName"],
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null,
  auth: {
    username: false,
    tokenDetail: false,
    tokenSetGlobally: false,
    loading: false,
    error: false,
  },
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true })

// successful api lookup
export const success = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, data })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: null })

export const setToken = state => {
  return state.setIn(["auth", "loading"], true);
};

export const setTokenSuccess = state => {
  return state
    .setIn(["auth", "loading"], false)
    .setIn(["auth", "tokenSetGlobally"], true);
};

export const setTokenFailed = (state, { error }) => {
  return state
    .setIn(["auth", "loading"], false)
    .setIn(["auth", "tokenSetGlobally"], false)
    .setIn(["auth", "error"], error);
};

export const saveToken = (state, { username, userData }) => {
  return state
    .setIn(["auth", "username"], username)
    .setIn(["auth", "tokenDetail"], userData);
};


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.STARTUP]: null,
  [Types.SET_TOKEN]: setToken,
  [Types.SET_TOKEN_SUCCESS]: setTokenSuccess,
  [Types.SET_TOKEN_FAILED]: setTokenFailed,
  [Types.SAVE_TOKEN]: saveToken,
  [Types.EXISTING_LOGIN]: null,

})

/* ------------- Selectors ------------- */
export const getToken = state => state.login.auth.tokenDetail;


