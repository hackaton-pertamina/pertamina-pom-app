import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import LoginAction from '../Redux/LoginRedux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Colors, Fonts, Images } from "../Themes";
import BackHeader from '../Components/BackHeader';
import PinInput from 'react-native-smooth-pincode-input';
// Styles
import styles from './Styles/InsertPinScreenStyle'

class InsertPinScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pin: ''
    }
  }

goBack = () => {
  this.props.navigation.goBack();
}

checkPin = (pin) => {
  const { params } = this.props.navigation.state;
  const type = params && params.type ? params.type : '';
  const username = params && params.username ? params.username : '';

  if(type == 'register') {
    const data = {
      username, pin
    }
    this.props.dispatch(LoginAction.loginRequest(data));
  } else {
    this.props.dispatch(StackActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({
          routeName: 'HomeScreen'
        }),
        NavigationActions.navigate({
          routeName: 'MyOrderScreen',
          params: {
            type,
            modalVisible: type ==  'buy' ? true : false
          }
        })
      ]
    }));
  }
}


  render () {
    const {fetching} = this.props;
    return (
      <View style={styles.container}>
        <BackHeader 
          logo={true} 
          backPress={this.goBack}/>
        <View style={[styles.viewMargin, {marginTop: 48}]}>
          <Text style={styles.textTitle}>
            Masukkan Pin
          </Text>
        </View>
        <View style={styles.viewMargin}>
          <Text style={styles.textSubtitle} numberOfLines={2}>
            Untuk melakukan pembayaran transkasi kamu perlu memasukkan pin
          </Text>
        </View>
        <View style={styles.viewMargin}>
          <PinInput
            placeholder={<View style={{
              width: 24,
              height: 24,
              borderRadius: 25,
              opacity: 0.3,
              borderColor: Colors.black,
              borderWidth: 1
            }}></View>}
            mask={<View style={{
              width: 10,
              height: 10,
              borderRadius: 25,
              backgroundColor: Colors.black,
            }}></View>}
            textStyle={{
              textAlign: 'center',
              ...Fonts.style.roboto20,
              color: Colors.black
            }}
            autoFocus={true}
            maskDelay={1000}
            password={true}
            cellStyle={null}
            cellStyleFocused={null}
            value={this.state.pin && this.state.pin}
            onTextChange={pin => this.setState({ pin })}
            onFulfill={(pin) => this.checkPin(pin)}
          />
        </View>
        { (fetching) &&
            <View style={styles.loading}>
              <ActivityIndicator color={Colors.orange} />
            </View>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertPinScreen)
