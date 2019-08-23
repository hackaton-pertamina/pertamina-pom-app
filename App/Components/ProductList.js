import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import { Colors, Fonts, Images } from '../Themes';
import ButtonCustom from '../Components/ButtonCustom';
import styles from './Styles/ProductListStyle'

export default class ProductList extends Component {

  render () {
    const {name, price, color, onPress} = this.props;
    return (
      <View style={styles.container}>
      <View style={styles.col1}>
        <Text style={[styles.textName, {color}]}>{name}</Text>
      </View>
      <View style={styles.col2}>
        <Text style={styles.text14}>Rp. {price} (/Liter)</Text>
      </View>
      <View style={styles.col3}>
        <ButtonCustom onPress={onPress} bgColor={Colors.orange} textMain={'Pilih'} padding={12}/>
      </View>
    </View>
    )
  }
}
