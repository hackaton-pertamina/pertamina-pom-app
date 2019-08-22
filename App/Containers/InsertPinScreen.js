import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from 'react-navigation';
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

checkPin = () => {
  this.props.dispatch(NavigationActions.navigate({ 
    routeName: 'MyOrderScreen'
  }));
}


  render () {
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
              width: 15,
              height: 15,
              borderRadius: 25,
              opacity: 0.3,
              backgroundColor: Colors.iconGrey,
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
            onFulfill={this.checkPin}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InsertPinScreen)