import React, { Component } from 'react'
import { View, StatusBar, AsyncStorage, Platform, BackHandler} from 'react-native'
import { Colors } from "../Themes";
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { StackActions, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import LoginAction from '../Redux/LoginRedux';
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  constructor(props) {
    super(props);

    this.androidBackButtonHandler = null;

    this.state = {
      
    };

    if (Platform.OS === "android") {
      this.androidBackButtonHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        () => {
          props.dispatch(NavigationActions.back());
          return true;
        }
      );
    }
  }

  componentDidMount () {
    this.startup();
  }

  getValue = async variable => await AsyncStorage.getItem(variable);

  startup = async () => {
    const value = await this.getValue("isLogin");
    const token = await this.getValue("token");
    
    AsyncStorage.getItem("token").then( () => {
      this.props.dispatch(LoginAction.existingLogin(token, 'HomeScreen'));
    })
  
  }
    // this.props.dispatch(FirebaseTypes.trackerUserId());

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar backgroundColor={Colors.bgGrey} barStyle='dark-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  // startup: () => dispatch(StartupActions.startup())
  dispatch
})

export default connect(null, mapDispatchToProps)(RootContainer)
