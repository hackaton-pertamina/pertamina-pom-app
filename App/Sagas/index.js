import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'
import { ProfileTypes } from '../Redux/ProfileRedux'
import { GetStationsTypes } from '../Redux/GetStationsRedux'
import { GetProductTypes } from '../Redux/GetProductRedux'
import { GetPacketTypes } from '../Redux/GetPacketRedux'
import { GetFacilitiesTypes } from '../Redux/GetFacilitiesRedux'
import { OrderTypes } from '../Redux/OrderRedux'

/* ------------- Sagas ------------- */

import { getLogin, setToken, startup, existingLogin} from './LoginSagas'
import { getProfile } from './ProfileSagas'
import { getStationById, getStationByType, getStationAll } from './GetStationsSagas'
import { getPacketById, getPacketAll } from './GetPacketSagas'
import { getProductById, getProductByType, getProductAll } from './GetProductSagas'
import { postOrder, getOrder } from './OrderSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(LoginTypes.LOGIN_REQUEST, getLogin, api),
    takeLatest(LoginTypes.STARTUP, startup, api),
    takeLatest(LoginTypes.SET_TOKEN, setToken, api),
    takeLatest(LoginTypes.EXISTING_LOGIN, existingLogin, api),
    takeLatest(ProfileTypes.PROFILE_REQUEST, getProfile, api),

    takeLatest(GetStationsTypes.GET_STATIONS_REQUEST_BY_ID, getStationById, api),
    takeLatest(GetStationsTypes.GET_STATIONS_REQUEST_BY_TYPE, getStationByType, api),
    takeLatest(GetStationsTypes.GET_STATIONS_REQUEST_ALL, getStationAll, api),

    takeLatest(GetPacketTypes.GET_PACKET_REQUEST_BY_ID, getPacketById, api),
    takeLatest(GetPacketTypes.GET_PACKET_REQUEST_ALL, getPacketAll, api),
    
    takeLatest(GetProductTypes.GET_PRODUCT_REQUEST_BY_ID, getProductById, api),
    takeLatest(GetProductTypes.GET_PRODUCT_REQUEST_BY_TYPE, getProductByType, api),
    takeLatest(GetProductTypes.GET_PRODUCT_REQUEST_ALL, getProductAll, api),

    takeLatest(OrderTypes.ORDER_REQUEST, postOrder, api),
    takeLatest(OrderTypes.GET_ORDER_REQUEST, getOrder, api),
    // // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ])
}
