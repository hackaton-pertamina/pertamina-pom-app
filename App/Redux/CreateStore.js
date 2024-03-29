import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import ScreenTracking from './ScreenTrackingMiddleware'
import { appNavigatorMiddleware } from '../Navigation/ReduxNavigation'
import { composeWithDevTools } from "remote-redux-devtools";

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */
  middleware.push(appNavigatorMiddleware)

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

 // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
 const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
 const composer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
                   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
                   Config.useReduxDevTools ? composeWithDevTools({ realtime: true, port: 50001 }) : 
                   compose;
  const store = createAppropriateStore(rootReducer, composer(...enhancers))
  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
