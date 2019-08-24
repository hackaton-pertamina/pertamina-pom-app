import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getProductRequestById: ['id'],
  getProductByIdSuccess: ['data'],
  getProductByIdFailure: null,
  getProductRequestAll: null,
  getProductAllSuccess: ['data'],
  getProductAllFailure: null,
  getProductRequestByType: ['tipe'],
  getProductByTypeSuccess: ['data'],
  getProductByTypeFailure: null,
})

export const GetProductTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  dataById :{
    data: null,
    fetching: null,
    error: null
  },
  dataByType :{
    data: null,
    fetching: null,
    error: null
  },
  dataAll :{
    data: null,
    fetching: null,
    error: null
  }
})

/* ------------- Selectors ------------- */

export const GetProductSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
  return state
    .setIn(["dataById", "fetching"], true)
};

// successful api lookup
export const success = (state, { data }) => {
return state
  .setIn(["dataById", "fetching"], false)
  .setIn(["dataById", "data"], data)
  .setIn(["dataById", "error"], false);
};

// Something went wrong somewhere.
export const failure = (state) => {
return state
  .setIn(["dataById", "fetching"], false)
  .setIn(["dataById", "error"], true);
};

// request the data from an api
export const requestAll = (state) => {
return state
  .setIn(["dataAll", "fetching"], true)
};

// successful api lookup
export const successAll = (state, { data }) => {
return state
.setIn(["dataAll", "fetching"], false)
.setIn(["dataAll", "data"], data)
.setIn(["dataAll", "error"], false);
};

// Something went wrong somewhere.
export const failureAll = (state) => {
return state
.setIn(["dataAll", "fetching"], false)
.setIn(["dataAll", "error"], true);
};

// request the data from an api
export const requestType = (state, { data }) => {
  return state
    .setIn(["dataByType", "fetching"], true)
};

// successful api lookup
export const successType = (state, { data }) => {
return state
  .setIn(["dataByType", "fetching"], false)
  .setIn(["dataByType", "data"], data)
  .setIn(["dataByType", "error"], false);
};

// Something went wrong somewhere.
export const failureType = (state) => {
return state
  .setIn(["dataByType", "fetching"], false)
  .setIn(["dataByType", "error"], true);
};



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCT_REQUEST_BY_ID]: request,
  [Types.GET_PRODUCT_BY_ID_SUCCESS]: success,
  [Types.GET_PRODUCT_BY_ID_FAILURE]: failure,
  [Types.GET_PRODUCT_REQUEST_BY_TYPE]: requestType,
  [Types.GET_PRODUCT_BY_TYPE_SUCCESS]: successType,
  [Types.GET_PRODUCT_BY_TYPE_FAILURE]: failureType,
  [Types.GET_PRODUCT_REQUEST_ALL]: requestAll,
  [Types.GET_PRODUCT_ALL_SUCCESS]: successAll,
  [Types.GET_PRODUCT_ALL_FAILURE]: failureAll
})
