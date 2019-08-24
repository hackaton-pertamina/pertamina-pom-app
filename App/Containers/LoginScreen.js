import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ButtonCustom from '../Components/ButtonCustom';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'
const { width, height } = Dimensions.get('window')

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
    }
  }

  goLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ 
      routeName: 'HomeScreen'
    }));
  }

  goSignUp = () => {
    alert('Masih dalam pengembangan')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.viewImage}>
          <Image
            resizeMode="contain"
            source={Images.letsgas}
            style={styles.imgLogo}
          />
        </View>
        <View style={styles.viewMargin}>
          <View style={styles.viewImage}>
            <Image
              resizeMode="contain"
              source={Images.error}
              style={styles.imgContainer}
            />
          </View>
        </View>
        <View style={[styles.viewCol, {marginTop: 8}]}>
          <Text style={styles.text16}> Selamat Datang di LetsGas !
          </Text>
          <Text style={styles.text14}> Memudahkan merawat kendaraanmu bersama pertamina
          </Text>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.view2Button}>
            <ButtonCustom 
              onPress={this.goLogin} 
              textMain={'Masuk'} 
              padding={12} 
              bgColor={Colors.orange}/>
          </View>
          <View style={styles.view2Button}>
            <ButtonCustom 
              onPress={this.goLogin} 
              textMain={'Daftar Baru'} 
              padding={12} 
              bgColor={Colors.orange}/>
          </View>
        </View>
        <View style={[styles.viewMargin, {marginTop: 10}]}>
          <ButtonCustom
            isBorder={true}
            onPress={this.goLogin} 
            textMain={'Masuk dengan My Pertamina'} 
            padding={12} 
            color={Colors.orange}/>
        </View>
        <View style={[styles.viewMargin, {marginTop: 10}]}>
          <Text style={styles.text10}>Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi
          </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
