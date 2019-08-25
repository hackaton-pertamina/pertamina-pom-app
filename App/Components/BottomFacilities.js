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
    const {distance, facilities} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.col1}>
          <Text style={styles.text12}>
            Fasilitas
          </Text>
          <View style={styles.rowAround}>
          {facilities && facilities.length > 0 && facilities.map((item, i) => {
              return (<Icon
                key={i}
                style={styles.iconStyle}
                name={item.name == 'ATM' ? 'cash-usd' :
                      item.name == 'Restoran' ? 'food' :
                      item.name == 'Toilet' ? 'human-male-female' : ''}
                size={24}
                color={Colors.iconGrey}
              />)
            })
          }
          </View>
        </View>
        <View style={styles.rowBetween}>
          <View style={styles.col2}>
            <Text style={[styles.text10, {width: 80,}]} numberOfLines={2} ellipsizeMode={'tail'}>
              Jarak Dari Tempat Anda
            </Text>
            <Text style={[styles.text12, {color: Colors.orange, fontSize: 14, textAlign: 'right'}]}>
              {distance} Km
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
