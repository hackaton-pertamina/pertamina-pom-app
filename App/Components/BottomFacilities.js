import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/BottomFacilitiesStyle'
import { Colors, Fonts, Images } from '../Themes';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export default class BottomFacilities extends Component {

  // }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.col1}>
          <Text style={styles.text12}>
            Fasilitas
          </Text>
          <View style={styles.rowAround}>
            <Icon
              style={styles.iconStyle}
              name="cash-usd"
              size={24}
              color={Colors.iconGrey}
            />
            <Icon
              style={styles.iconStyle}
              name="food"
              size={24}
              color={Colors.iconGrey}
            />
            <Icon2
              style={styles.iconStyle}
              name="wc"
              size={24}
              color={Colors.iconGrey}
            />
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.col2}>
            <Text style={styles.text10} numberOfLines={2} ellipsizeMode={'tail'}>
              Jarak Dari Tempat Anda
            </Text>
            <Text style={[styles.text12, {color: Colors.orange}]}>
              1.5 Km
            </Text>
          </View>
          <View style={styles.floating}>
            <Icon
              style={styles.iconStyle}
              name="near-me"
              size={24}
              color={Colors.iconGrey}
            />
          </View>
        </View>
      </View>
    )
  }
}
