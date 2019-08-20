import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonCustomStyle'

export default class ButtonCustom extends Component {


  render () {
    const {onPress, textMain, isBorder, inStyle, color, bgColor} = this.props;
    return (
      <TouchableOpacity
          style={[styles.container, 
              isBorder && styles.borderStyle,
              bgColor && {backgroundColor: bgColor},
              inStyle && inStyle]}
          onPress={() => onPress()}
        >
        <Text style={[styles.textButton, color && {color}]}>{textMain.toUpperCase()}</Text>
      </TouchableOpacity>
    )
  }
}
