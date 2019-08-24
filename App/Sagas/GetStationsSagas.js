/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import GetStationsActions from '../Redux/GetStationsRedux'
// import { GetStationsSelectors } from '../Redux/GetStationsRedux'

export function * getStationById (api, action) {
  const { id } = action
  // get current data from Store
  // const currentData = yield select(GetStationsSelectors.getData)
  // make the call to the api
  const response = yield call(api.getStationById, id)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GetStationsActions.getStationsByIdSuccess(response.data.data))
  } else {
    yield put(GetStationsActions.getStationsByIdFailure())
  }
}

export function * getStationByType (api, {data, tipe}) {
  
  // get current data from Store
  // const currentData = yield select(GetStationsSelectors.getData)
  // make the call to the api
  const response = yield call(api.getStationByType, data, tipe)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GetStationsActions.getStationsByTypeSuccess(response.data.data))
  } else {
    yield put(GetStationsActions.getStationsByTypeFailure())
  }
}

export function * getStationAll (api) {
  // get current data from Store
  // const currentData = yield select(GetStationsSelectors.getData)
  // make the call to the api
  const response = yield call(api.getStationById)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GetStationsActions.getStationsAllSuccess(response.data.data))
  } else {
    yield put(GetStationsActions.getStationsAllFailure())
  }
}
