import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Colors, Fonts, Images } from '../Themes';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './Styles/HistoryStyle'

export default class History extends Component {

  render () {
    const {name, packetName, volume, date, orderName} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.rowBetween1}>
          <View style={styles.colBetween}>
            <Text style={styles.textName}>Subscription {packetName}</Text>
            <Text style={styles.textVolume}>{volume} Liter</Text>
            <Text style={[styles.textDate, {color: Colors.lblGrey}]}>{name}</Text>
          </View>
          <View style={styles.rowBetween}>
            <View style={styles.colStart}>
              <Text style={styles.textDate}>{date}</Text>
              <Text style={[styles.textDate, {marginTop: 5}]}>{orderName}</Text>
            </View>
            <View style={styles.colCenter}>
              <Icon
                style={[styles.iconStyle, {marginLeft: 8, marginTop: -10}]}
                name="clock-outline"
                size={12}
                color={Colors.iconGrey}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
