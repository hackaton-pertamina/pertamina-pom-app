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
import OrderActions from '../Redux/OrderRedux'
import { StackActions, NavigationActions } from 'react-navigation';
// import { OrderSelectors } from '../Redux/OrderRedux'

export function * postOrder (api, {station, tipe, product, quantity, dataPom}) {
  const body = {
    station, 
    type: tipe, 
    product, 
    quantity
  }

  // get current data from Store
  // const currentData = yield select(OrderSelectors.getData)
  // make the call to the api
  const response = yield call(api.postOrder, body)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(OrderActions.orderSuccess(response.data.data));
  
    yield put(
      StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({
            routeName: 'HomeScreen'
          }),
          NavigationActions.navigate({
            routeName: 'MyOrderScreen',
            params: {
              type: 'personal',
              modalVisible: true,
              dataPom
            }
          })
        ]
      })
    );

  } else {
    yield put(OrderActions.orderFailure())
  }
}

export function * getOrder (api, {id}) {


  // get current data from Store
  // const currentData = yield select(OrderSelectors.getData)
  // make the call to the api
  const response = yield call(api.getOrderById, id)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(OrderActions.getOrderSuccess(response.data.data));

  } else {
    yield put(OrderActions.GET_ORDER_FAILURE())
  }
}
