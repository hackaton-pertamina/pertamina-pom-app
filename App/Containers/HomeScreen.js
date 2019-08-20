import React, { Component } from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  RefreshControl
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { connect } from 'react-redux'
import InfoSaldo from '../Components/InfoSaldo';
import Subscription from '../Components/Subscription';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      modalPressed: false,
      modalInfo: false,
      refreshing: false,
    }
  }

  topUpSaldo = () => {
    alert('top up dong');
  }

  subscribeNow = () => {
    alert('Subscribe dong');
  }

  orderNow = () => {
    alert('Order dong');
  }

  render () {
    const photo = '';
    return (
      <Animatable.View
        animation="zoomInUp"
        iterationCount={1}
        duration={500}
        style={styles.container}
      >
        <View style={styles.rowHeader}>
          <TouchableOpacity
            style={styles.avaProfile}
            activeOpacity={0.5}
            
          >
            {photo ? (
            <Image
              resizeMode="cover"
              source={{ uri: photo ? photo.imageUri  : ''}}
              style={styles.imgAva}
            />
            ) : (
            <Icon
              style={styles.iconStyle}
              name="account-circle"
              size={28}
              color={Colors.redIcon}
            />
            )}
          </TouchableOpacity>
          <View style={styles.viewLogo}>
            <Image
              resizeMode="contain"
              source={Images.logo}
              style={styles.imgLogo}
              />
          </View>
          <TouchableOpacity
            style={styles.viewHistory}
          >
            <Icon
              style={styles.iconStyle}
              name="note-text"
              size={28}
              color={Colors.iconGrey}
            />
          </TouchableOpacity>
        </View>
        <InfoSaldo onPress={this.topUpSaldo} />
        <Subscription 
          onPressSub={this.subscribeNow}
          onPressOrder={this.orderNow} 
          isSubs={true}
          saldo={30} 
          typeId={1}
          name={'Pertalite'}
          days={22}/>
      </Animatable.View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
