import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  login: require('./LoginRedux').reducer,
  facility: require('./GetFacilitiesRedux').reducer,
  product: require('./GetProductRedux').reducer,
  packet: require('./GetPacketRedux').reducer,
  stations: require('./GetStationsRedux').reducer,
  order: require('./OrderRedux').reducer,
  signup: require('./SignUpRedux').reducer,
  subscription: require('./SubscriptionRedux').reducer,
  profile: require('./ProfileRedux').reducer,
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}
