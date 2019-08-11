import React, { Component } from 'react'
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  Text,
  FlatList,
  Linking,
  ScrollView,
  RefreshControl
} from "react-native";
import { Colors, Images } from "../Themes";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends Component {
  
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
                  color={'#e74c3c'}
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
                color={'grey'}
              />
            </TouchableOpacity>
          </View>
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
