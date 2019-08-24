import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'
import { ProfileTypes } from '../Redux/ProfileRedux'

/* ------------- Sagas ------------- */

import { getLogin, setToken, startup, existingLogin} from './LoginSagas'
import { getProfile } from './ProfileSagas'

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
    
    // // some sagas receive extra parameters in addition to an action
    // takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
  ])
}
