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
import { ToastAndroid, AsyncStorage } from 'react-native'
import { call, put, take, select} from 'redux-saga/effects'
import LoginActions, { getToken } from '../Redux/LoginRedux'
import { StackActions, NavigationActions } from 'react-navigation';
import { LoginTypes } from '../Redux/LoginRedux';
import ProfileActions from '../Redux/ProfileRedux';
// import { LoginSelectors } from '../Redux/LoginRedux'

export function * getLogin (api, action) {
  const { data } = action

  const body = {
    "username": data.username,
    "password": data.pin,
  };
  // get current data from Store
  // const currentData = yield select(LoginSelectors.getData)
  // make the call to the api
  const response = yield call(api.sigin, body)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(LoginActions.loginSuccess(response.data));
    AsyncStorage.setItem("isLogin", "true");
    AsyncStorage.setItem("token", response.data.authorization);
    yield put(LoginActions.saveToken(data.username, response.data.authorization));
    yield put(LoginActions.startup('HomeScreen'));

  } else {
    ToastAndroid.show(
      response.data.messages,
      ToastAndroid.SHORT
    );
    yield put(LoginActions.loginFailure()); 
  }
}

export function* setToken(api, { screenName }) {
  try {
    const tokens = yield select(getToken);
    console.log('ini token :', tokens)
    if (tokens) {
      console.log('ini token :', tokens)
      yield call(api.setAuthToken, tokens);
      yield put(LoginActions.setTokenSuccess());
      yield put(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: screenName
            })
          ]
        })
      );
    }
  } catch (error) {
    console.log('ini ERRPR :', error)
    yield put(LoginActions.setTokenFailed(error));
  }
}

export function* existingLogin(api, { token, screenName }) {
  try {
    if (token) {
      yield call(api.setAuthToken, token);
      yield put(LoginActions.setTokenSuccess());
      yield put(ProfileActions.profileRequest());
      yield put(
        StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: screenName
            })
          ]
        })
      );
    }
  } catch (error) {
    console.log('ini ERRPR :', error)
    yield put(LoginActions.setTokenFailed(error));
  }
}

export function* startup(api, { screenName }) {
  try {
    console.log(ProfileActions);
    yield put(LoginActions.setToken(screenName));
    yield take(LoginTypes.SET_TOKEN_SUCCESS);
    yield put(ProfileActions.profileRequest());
  } catch (error) {
    throw new Error(error);
  }
}

