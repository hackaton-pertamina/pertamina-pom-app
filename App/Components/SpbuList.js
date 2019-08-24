import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './Styles/SpbuListStyle'
import { Colors, Images } from '../Themes';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class SpbuList extends Component {
  
  render () {
    const {name, duration, distance, address, isOpen, isFull, onPress, productList, type} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.viewImg}>
        </View>
        <View style={styles.rowView}>
          <View style={styles.colView}>
          { type == 'service' ?
            <View style={styles.rowTitle}>
              <Text style={styles.textTitleBlack}>
                {name}
              </Text>
            </View>
          :
            <View style={styles.rowTitle}>
              <Text style={styles.textTitleBlack}>
                {name}
              </Text>
              <Icon
                style={[styles.iconStyle, {marginLeft: 16}]}
                name="clock-outline"
                size={12}
                color={Colors.iconGrey}
              />
              <Text style={[styles.text10, {marginLeft: 8}]}>
                +/- {duration} Menit
              </Text>
            </View>
          }
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text10Info}>
                {address}
            </Text>
            <View style={[styles.rowTitle, {flex: 7}]}>
            { type != 'service' &&
              productList.map((item, i) => {
                return (
                    <Text key={i}  numberOfLines={2} ellipsizeMode="tail" style={[styles.text8, !isOpen && i != 0  ? styles.customText :
                                  {color : Colors.lblGrey, fontSize: 8}]}>
                      {item.name}
                    </Text>
                )
              })
            }
            </View>
          </View>
          <View style={styles.colView2}>
            <View style={styles.rowTitle}>
              <Icon
                style={styles.iconStyle}
                name="bus-clock"
                size={12}
                color={Colors.iconGrey}
              />
              <Text style={[styles.text10, {marginLeft: 8}]}>
                {distance} Km
              </Text>
            </View>
            { isFull || isOpen != null &&
              <View style={styles.rowTitle}>
                <Icon
                  style={styles.iconStyle}
                  name="gas-station"
                  size={12}
                  color={Colors.redIcon}
                />
                <Text style={[styles.text10, {marginLeft: 8, color: Colors.red}]}>
                  {!isOpen ? 'Tutup' : 'Penuh'}
                </Text>
              </View>
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
