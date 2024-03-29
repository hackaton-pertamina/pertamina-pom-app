import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { Colors, Fonts, Images } from '../Themes';
import ButtonCustom from '../Components/ButtonCustom';
import styles from './Styles/PaketListStyle'

export default class PaketList extends Component {

  render () {
    const {onPress, name, color, volume, duration, price, type, description} = this.props;

    const paketPetrol = 
      <View style={styles.container}>
        <View style={styles.col1}>
          <Text style={[styles.textName, {color: color}]}>{name}</Text>
          <Text style={styles.textVolume}>{volume} Liter</Text>
          <Text style={styles.textDate}>Berlaku {duration} Hari</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.textOrange}>Rp. {price}</Text>
        </View>
        <View style={styles.col2}>
          <ButtonCustom onPress={onPress} bgColor={Colors.orange} textMain={'Pilih'} padding={12}/>
        </View>
      </View>

    const paketService = 
      <View style={styles.container}>
        <View style={styles.col1}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textDate}>{description}</Text>
        </View>
        <View style={styles.col2}>
          <Text style={styles.textOrange}>Rp. {price}</Text>
        </View>
        <View style={styles.col2}>
          <ButtonCustom onPress={onPress} bgColor={Colors.orange} textMain={'Pilih'} padding={12}/>
        </View>
      </View>

    if(type == 'service') {
      return ( paketService )
    } else {
      return ( paketPetrol )
    }
  }
}
