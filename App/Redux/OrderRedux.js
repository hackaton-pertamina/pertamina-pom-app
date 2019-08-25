import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  orderRequest: ['station', 'tipe', 'product', 'quantity', 'dataPom'],
  orderSuccess: ['data'],
  orderFailure: null,
  getOrderRequest: ['id'],
  getOrderSuccess: ['data'],
  getOrderFailure: null
})

export const OrderTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const OrderSelectors = {
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

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ORDER_REQUEST]: request,
  [Types.ORDER_SUCCESS]: success,
  [Types.ORDER_FAILURE]: failure,
  [Types.GET_ORDER_REQUEST]: request,
  [Types.GET_ORDER_SUCCESS]: success,
  [Types.GET_ORDER_FAILURE]: failure,
})
