import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Colors, Fonts, Images } from '../Themes';
import styles from './Styles/InfoSaldoStyle'
import ButtonCustom from '../Components/ButtonCustom';
export default class InfoSaldo extends Component {


  render () {
    const {onPress} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <Image
            resizeMode="contain"
            source={Images.linkAja}
            style={styles.viewImg}
          />
          <Text style={styles.lbl1}>Rp. 500.000</Text>
        </View>
        <ButtonCustom onPress={onPress} textMain={'Isi Saldo'} isBorder={true} padding={10}/>
      </View>
    )
  }
}
